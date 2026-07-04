import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { useSelector } from 'react-redux';
import type { RootState } from '../../store/store';
import { RIPPLE_TIME_STEP } from '../../utils/rippleMotion';
import './ParticleWave.scss';

// Dark mode:  rgba(255,255,255,0.07) → white at 7%
// Light mode: rgba(100,116,139,0.20) → slate at 20%
function themeUniforms(theme: 'light' | 'dark') {
  return theme === 'dark'
    ? { color: new THREE.Vector3(0.216, 0.216, 0.216), alpha: 1.0 }
    : { color: new THREE.Vector3(0.39, 0.455, 0.545), alpha: 0.25 };
}

const VERTEX = `
  attribute float scale;
  uniform float uTime;
  void main() {
    vec3 p = position;
    float s = scale;
    p.y += (sin(p.x + uTime) * 0.5) + (cos(p.y + uTime) * 0.1) * 2.0;
    p.x += (sin(p.y + uTime) * 0.5);
    s += (sin(p.x + uTime) * 0.5) + (cos(p.y + uTime) * 0.1) * 2.0;
    vec4 mvPosition = modelViewMatrix * vec4(p, 1.0);
    gl_PointSize = s * 19.0 * (1.0 / -mvPosition.z);
    gl_Position = projectionMatrix * mvPosition;
  }
`;

const FRAGMENT = `
  uniform vec3 uColor;
  uniform float uAlpha;
  void main() {
    gl_FragColor = vec4(uColor, uAlpha);
  }
`;

const ParticleWave: React.FC = () => {
  const theme   = useSelector((state: RootState) => state.theme.mode);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sceneRef  = useRef<{
    renderer: THREE.WebGLRenderer;
    scene: THREE.Scene;
    camera: THREE.PerspectiveCamera;
    material: THREE.ShaderMaterial;
    raf: number;
  } | null>(null);

  // Init once
  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const W = window.innerWidth;
    const H = window.innerHeight;

    const camera = new THREE.PerspectiveCamera(75, W / H, 0.01, 1000);
    camera.position.set(0, 6, 5);

    const scene = new THREE.Scene();

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(W, H);
    renderer.setClearColor(0x000000, 0); // fully transparent — CSS bg shows through

    // Particle grid
    const gap = 0.3;
    const amt = 200;
    const count = amt * amt;
    const positions = new Float32Array(count * 3);
    const scales    = new Float32Array(count);
    let i = 0, j = 0;
    for (let ix = 0; ix < amt; ix++) {
      for (let iy = 0; iy < amt; iy++) {
        positions[i]     = ix * gap - (amt * gap) / 2;
        positions[i + 1] = 0;
        positions[i + 2] = iy * gap - (amt * gap) / 2;
        scales[j] = 1;
        i += 3; j++;
      }
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geo.setAttribute('scale',    new THREE.BufferAttribute(scales, 1));

    const { color, alpha } = themeUniforms(theme);
    const material = new THREE.ShaderMaterial({
      transparent: true,
      vertexShader: VERTEX,
      fragmentShader: FRAGMENT,
      uniforms: {
        uTime:  { value: 0 },
        uColor: { value: color },
        uAlpha: { value: alpha },
      },
    });

    scene.add(new THREE.Points(geo, material));
    camera.lookAt(scene.position);

    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', onResize);

    let raf = 0;
    const animate = () => {
      raf = requestAnimationFrame(animate);
      material.uniforms.uTime.value += RIPPLE_TIME_STEP;
      renderer.render(scene, camera);
    };
    animate();

    sceneRef.current = { renderer, scene, camera, material, raf };

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', onResize);
      geo.dispose();
      material.dispose();
      renderer.dispose();
      sceneRef.current = null;
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // Swap colors on theme change
  useEffect(() => {
    const r = sceneRef.current;
    if (!r) return;
    const { color, alpha } = themeUniforms(theme);
    r.material.uniforms.uColor.value = color;
    r.material.uniforms.uAlpha.value = alpha;
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className="particle-wave-canvas"
    />
  );
};

export default ParticleWave;
