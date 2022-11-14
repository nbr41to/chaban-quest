import type { FC } from 'react';

import { useState, useEffect } from 'react';

import { useController } from '@/hooks/useController';

type Props = {
  map: number[][];
};

export const Player: FC<Props> = ({ map }) => {
  const { position } = useController(map);
  const [enable, setEnable] = useState(false);

  useEffect(() => {
    /* いちごがある座標 */
    const target = map.reduce(
      (acc, row, y) => {
        const x = row.findIndex((cell) => cell === 2);

        if (x !== -1) {
          return { x, y };
        }

        return acc;
      },
      { x: 0, y: 0 }
    );

    /* いちごに反応するエリア */
    const area = {
      x: [target.x * 40 - 20, target.x * 40 + 20],
      y: [target.y * 40 - 20, target.y * 40 + 20],
    };

    /* エリア内に入る */
    if (
      area.x[0] <= position.x &&
      position.x <= area.x[1] &&
      area.y[0] <= position.y &&
      position.y <= area.y[1]
    ) {
      setEnable(true);
    } else {
      setEnable(false);
    }
  }, [position, map]);

  return (
    <div
      className="absolute flex h-10 w-10 items-center justify-center"
      style={{ top: position.y, left: position.x }}
    >
      <div className="text-4xl">🐈</div>
      {enable && (
        <div className="absolute top-[-70%] left-[30%] text-2xl">💬</div>
      )}
    </div>
  );
};
