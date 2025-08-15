import React from 'react';
import Svg, { Path } from 'react-native-svg';

export const ArrowBackIcon = ({
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
            d="m12 19-7-7 7-7"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <Path
            d="M19 12H5"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
);