import type { Position } from '@/types/position';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

type DownKeys = Record<string, boolean>;

export const useController = (map: number[][]) => {
  const requestRef = useRef<number>(0);
  const [position, setPosition] = useState<Position>({
    x: 0,
    y: 0,
  });
  const pressingKeys: DownKeys = useMemo(() => ({}), []);
  const moveAmount = 4;

  const parseMovablePosition = useCallback(
    (nextPosition: Position) => {
      const { x, y } = nextPosition;
      const isInMap = x >= 0 && x <= 360 && y >= 0 && y <= 360;
      const isMovablePosition =
        map[Math.round(y / 40)][Math.round(x / 40)] === 0;

      if (isInMap && isMovablePosition) {
        return nextPosition;
      }

      return false;
    },
    [map]
  );

  const move = useCallback(() => {
    if (pressingKeys.key_Up || pressingKeys.key_ArrowUp || pressingKeys.key_w) {
      setPosition(
        (prev) =>
          parseMovablePosition({ ...prev, y: prev.y - moveAmount }) || prev
      );
    }

    if (
      pressingKeys.key_Right ||
      pressingKeys.key_ArrowRight ||
      pressingKeys.key_d
    ) {
      setPosition(
        (prev) =>
          parseMovablePosition({ ...prev, x: prev.x + moveAmount }) || prev
      );
    }

    if (
      pressingKeys.key_Down ||
      pressingKeys.key_ArrowDown ||
      pressingKeys.key_s
    ) {
      setPosition(
        (prev) =>
          parseMovablePosition({ ...prev, y: prev.y + moveAmount }) || prev
      );
    }

    if (
      pressingKeys.key_Left ||
      pressingKeys.key_ArrowLeft ||
      pressingKeys.key_a
    ) {
      setPosition(
        (prev) =>
          parseMovablePosition({ ...prev, x: prev.x - moveAmount }) || prev
      );
    }
    requestRef.current = requestAnimationFrame(move);
  }, [pressingKeys, parseMovablePosition]);

  useEffect(() => {
    window.addEventListener('keydown', (e) => {
      pressingKeys[`key_${e.key}`] = true;
    });
    window.addEventListener('keyup', (e) => {
      pressingKeys[`key_${e.key}`] = false;
    });

    requestRef.current = requestAnimationFrame(move);

    return () => {
      cancelAnimationFrame(requestRef.current);
    };
  }, [move, pressingKeys]);

  return { position };
};
