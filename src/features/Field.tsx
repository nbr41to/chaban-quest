import type { FC } from 'react';

type Props = {
  map: number[][];
};

export const Field: FC<Props> = ({ map }) => {
  return (
    <div className="absolute">
      {map.map((row, y) => {
        const rowKey = `row-${y}`;

        return (
          <div key={rowKey} className="flex">
            {row.map((cell, x) => {
              const cellKey = `cell-${x}-${y}`;

              if (cell === 0) {
                return (
                  <div
                    key={cellKey}
                    className="h-10 w-10 "
                    style={{ top: y * 10, left: x * 10 }}
                  />
                );
              }

              if (cell === 1) {
                return (
                  <div
                    key={cellKey}
                    className="flex h-10 w-10 items-center justify-center bg-green-400 text-4xl"
                    style={{ top: y * 10, left: x * 10 }}
                  >
                    🌳
                  </div>
                );
              }

              if (cell === 2) {
                return (
                  <div
                    key={cellKey}
                    className="flex h-10 w-10 items-center justify-center text-4xl"
                    style={{ top: y * 10, left: x * 10 }}
                  >
                    🍓
                  </div>
                );
              }

              return null;
            })}
          </div>
        );
      })}
    </div>
  );
};
