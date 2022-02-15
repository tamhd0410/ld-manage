import React from 'react';
import { Scatter } from 'recharts';

export const ScaterChart: React.FC = () => {
  return (
    <Scatter
      shape={(item) => {
        const itemWidth = item.width / 24;
        const itemHeight = item.height / 7;
        return (
          <rect
            stroke='#ffffff'
            strokeWidth={2}
            fill={item.color}
            x={item.cx - itemWidth / 2}
            y={item.cy - itemHeight / 2}
            width={itemWidth}
            height={itemHeight}
          />
        );
      }}
    />
  );
};
