import React from 'react';
import { Text, View } from 'react-native';

type HomePageCardProps = {
  name: string;
  icon: React.FC;
};

export default function HomePageCard({ name, icon: IconComponent }: HomePageCardProps) {
  return (
    <View className='border-2 rounded-2xl text-brown p-4 w-64 h-42 relative'>
      
      {/* location */}
      <Text className='font-bold text-2xl w-48 text-brown'>{name}</Text>

      {/* crowd level */}
      <View className='absolute top-2 right-2 flex justify-center items-center w-12 h-12'>
        <IconComponent />
      </View>

      {/* details */}
      <Text className='text-sm text-gray-600 mt-2 text-brown'>2 mi • Open now • Closes 10pm</Text>
    </View>
  );
}
