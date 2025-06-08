import React from 'react';
import { Path, Svg } from 'react-native-svg';

const navColors = {
  brown: '#392E2D',
  green: '#7ABD7E',
};

type ProfileIconProps = {
  width?: number;
  height?: number;
  focused?: boolean;
};

const ProfileIcon = ({
  width = 45,
  height = 45,
  focused = false,
}: ProfileIconProps) => {
  return (
    <Svg
    width={width}
    height={height}
    viewBox="0 0 45 45"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {focused ? (
      <>

        <Path
          d="M22.5 0C16.2844 0 11.25 5.03437 11.25 11.25C11.25 17.4656 16.2844 22.5 22.5 22.5C28.7156 22.5 33.75 17.4656 33.75 11.25C33.75 5.03437 28.7156 0 22.5 0ZM22.5 28.125C14.9906 28.125 0 31.8937 0 39.375V45H45V39.375C45 31.8937 30.0094 28.125 22.5 28.125Z"
          fill={navColors.green}
        />
      </>
    ) : (
      <Path
        d="M22.5 5.625C25.5938 5.625 28.125 8.15625 28.125 11.25C28.125 14.3438 25.5938 16.875 22.5 16.875C19.4062 16.875 16.875 14.3438 16.875 11.25C16.875 8.15625 19.4062 5.625 22.5 5.625ZM22.5 33.75C30.0938 33.75 38.8125 37.3781 39.375 39.375H5.625C6.27187 37.35 14.9344 33.75 22.5 33.75ZM22.5 0C16.2844 0 11.25 5.03437 11.25 11.25C11.25 17.4656 16.2844 22.5 22.5 22.5C28.7156 22.5 33.75 17.4656 33.75 11.25C33.75 5.03437 28.7156 0 22.5 0ZM22.5 28.125C14.9906 28.125 0 31.8937 0 39.375V45H45V39.375C45 31.8937 30.0094 28.125 22.5 28.125Z"
        fill={navColors.brown}
      />
    )}
  </Svg>
  );
};

export default ProfileIcon;
