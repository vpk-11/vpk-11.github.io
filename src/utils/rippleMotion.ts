// Single source of truth for ParticleWave's motion, shared with anything
// that needs to visually sync to it (the Hero ticker) instead of running
// an independent CSS animation with a guessed duration.
//
// ParticleWave's vertex shader deforms position using sin(x + uTime) /
// cos(y + uTime). uTime advances by RIPPLE_TIME_STEP every rendered frame.
// As uTime grows, a fixed phase value of sin(x + uTime) shifts toward
// smaller x — i.e. the wave pattern drifts leftward. One full repeat of
// the pattern happens once uTime has advanced by 2*PI.
export const RIPPLE_TIME_STEP = 0.008;
const RIPPLE_FPS_ASSUMPTION = 60;

export const RIPPLE_CYCLE_SECONDS = (2 * Math.PI) / (RIPPLE_TIME_STEP * RIPPLE_FPS_ASSUMPTION);
export const RIPPLE_DIRECTION = 'left' as const;
