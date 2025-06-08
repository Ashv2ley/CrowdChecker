import React from 'react';
import { Circle, Path, Svg } from 'react-native-svg';

type LowCrowdProps = {
  size?: number;
};

const LowCrowd: React.FC<ModerateCrowdProps> = ({ size = 40 }) => (
  <Svg
    width={size}
    height={size}
    viewBox="0 0 131 131"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
        <Circle cx="65.5" cy="65.5" r="65.5" fill="#B6D7A8"/>
        <Path fill-rule="evenodd" clip-rule="evenodd" d="M64.579 66C71.7587 66 77.579 60.1797 77.579 53C77.579 45.8203 71.7587 40 64.579 40C57.3993 40 51.579 45.8203 51.579 53C51.579 60.1797 57.3993 66 64.579 66ZM43.0789 90.5C42.4123 84 45.6789 70.9 64.0789 70.5C82.4789 70.1 87.079 83.6667 87.079 90.5H43.0789Z" fill="#392E2D"/>
    </Svg>
);

export default LowCrowd;
