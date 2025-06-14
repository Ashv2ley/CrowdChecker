import React from 'react';
import { Circle, Path, Svg } from 'react-native-svg';

type ModerateCrowdProps = {
  size?: number;
};

const ModerateCrowd: React.FC<ModerateCrowdProps> = ({ size = 40 }) => (
  <Svg
    width={size}
    height={size}
    viewBox="0 0 131 131"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
        <Circle cx="65.5" cy="65.5" r="65.5" fill="#FAD5A0" />
        <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M80.7599 64C87.9396 64 93.7599 58.1797 93.7599 51C93.7599 43.8203 87.9396 38 80.7599 38C73.5802 38 67.7599 43.8203 67.7599 51C67.7599 58.1797 73.5802 64 80.7599 64ZM76.1907 88.5C75.7559 83.6033 73.1845 76.5439 66.079 72.7163C69.2886 70.3155 73.8584 68.6392 80.2599 68.5C98.6599 68.1 103.26 81.6667 103.26 88.5H76.1907ZM61.579 55C61.579 62.1797 55.7587 68 48.579 68C41.3993 68 35.579 62.1797 35.579 55C35.579 47.8203 41.3993 42 48.579 42C55.7587 42 61.579 47.8203 61.579 55ZM48.0789 72.5C29.6789 72.9 26.4123 86 27.0789 92.5H71.079C71.079 85.6667 66.4789 72.1 48.0789 72.5Z"
            fill="#392E2D"
        />
    </Svg>
);

export default ModerateCrowd;
