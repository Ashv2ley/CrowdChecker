import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import {Link, useRouter } from 'expo-router';

type HomePageCardProps = {
  name: string;
  icon: React.FC;
};


export default function HomePageCard({name, id, icon, open, close, distance}) {
    const router = useRouter();
    const IconComponent = icon;
    const openTime = new Date(open).getHours();
    const closeTime = new Date(close).getHours();

    return (
    <TouchableOpacity className='border-2 rounded-2xl text-brown p-4 w-64 h-42 relative' onPress={() => router.push(`/locations/${id}`)}>
      
      {/* location */}
      <Text className='font-bold text-2xl w-48 text-brown'>{name}</Text>

      {/* crowd level */}
      <View className='absolute top-2 right-2 flex justify-center items-center w-12 h-12'>
        <IconComponent/>
      </View>

      {/* details */}
      <Text className='text-sm text-gray-600 mt-2 text-brown'>{distance} mi • Open {openTime}pm • Closes {closeTime-11}am</Text>
    </TouchableOpacity>
  );
}
