import React from 'react';
import Svg, { Path } from 'react-native-svg';

export const PlusIcon = ({
                             size = 24,
                             color = "#000000",
                             strokeWidth = 2
                         }) => (
    <Svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
    >
        <Path
            d="M5 12h14"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <Path
            d="M12 5v14"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
);