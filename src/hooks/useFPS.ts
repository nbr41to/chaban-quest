import { useEffect, useState } from 'react';

export const useFPS = () => {
  const [frameTimeState, setFrameTimeState] = useState({
    fps: 0,
    lastStamp: performance.now(),
    framesCount: 0,
  });

  useEffect(() => {
    let req: number;

    function step() {
      setFrameTimeState((current) => {
        const currentStamp = performance.now();
        const shouldUpdateFps = currentStamp - current.lastStamp > 1000;

        if (shouldUpdateFps) {
          return {
            fps: current.framesCount,
            lastStamp: currentStamp,
            framesCount: 0,
          };
        }
        const newFramesCount = current.framesCount + 1;

        return {
          ...current,
          framesCount: newFramesCount,
        };
      });

      req = requestAnimationFrame(step);
    }

    req = requestAnimationFrame(step);

    return () => {
      cancelAnimationFrame(req);
    };
  }, []);

  return frameTimeState.fps;
};
