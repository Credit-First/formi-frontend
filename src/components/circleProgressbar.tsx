import { CircleProgressBarProps } from '@/types';
import React from 'react';

const CircleProgressbar = ({
    sqSize,
    strokeWidth,
    strokeColor,
    percentage,
}: CircleProgressBarProps): JSX.Element => {
    return (
        <svg width={sqSize} height={sqSize} viewBox={`0 0 ${sqSize} ${sqSize}`}>
            <circle
                className={`circle-background fill-transparent stroke-b-item`}
                cx={sqSize / 2}
                cy={sqSize / 2}
                r={(sqSize - strokeWidth) / 2}
                strokeWidth={`${strokeWidth}px`}
            />
            <circle
                className="circle-progress fill-transparent "
                cx={sqSize / 2}
                cy={sqSize / 2}
                r={(sqSize - strokeWidth) / 2}
                strokeWidth={`${strokeWidth}px`}
                stroke={strokeColor}
                // Start progress marker at 12 O'Clock
                transform={`rotate(-90 ${sqSize / 2} ${sqSize / 2})`}
                style={{
                    strokeDasharray: ((sqSize - strokeWidth) / 2) * Math.PI * 2,
                    strokeDashoffset:
                        ((sqSize - strokeWidth) / 2) * Math.PI * 2 +
                        (((sqSize - strokeWidth) / 2) * Math.PI * 2 * percentage) / 100,
                }}
            />
            <text
                className={`circle-text text-xs`}
                x="50%"
                y="50%"
                dy=".3em"
                textAnchor="middle"
                fill={strokeColor}
            >
                {`${percentage}%`}
            </text>
        </svg>
    )
}

export default CircleProgressbar;