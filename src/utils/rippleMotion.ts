// Speed/direction constants for the Hero ticker's marquee animation.
// Originally derived from the now-removed ParticleWave canvas's uTime step
// to keep the ticker visually in sync with the background wave — the
// background is gone (flat gradient now, see global.scss), but the tuned
// values still read well as the ticker's own pace, so they stayed.
export const RIPPLE_TIME_STEP = 0.008;
const RIPPLE_FPS_ASSUMPTION = 60;

export const RIPPLE_CYCLE_SECONDS = (2 * Math.PI) / (RIPPLE_TIME_STEP * RIPPLE_FPS_ASSUMPTION);
export const RIPPLE_DIRECTION = 'right' as const;
