import React, {useEffect, useState} from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';

type HomePageCardProps = {
  name: string;
  icon: React.FC;
};


export default function HomePageCard({name, id, icon, open, close, distance}) {
    const router = useRouter();
    const IconComponent = icon;
    const openTime = new Date(open).getHours();
    const closeTime = new Date(close).getHours();
    const [favorite, setFavorite] = React.useState(false);
    const [user, setUser] =  useState<User | null>(null)
    type User = {
        firstname: string;
        lastname: string;
        email: string;
        password: string;
        isRemembered: boolean;
        isLoggedIn: boolean;
        timeJoined: string;
        image: string;
        preferences: {};
        favorites: number[],
    };

    const handleFavorite = async () => {
        const storedUser = await AsyncStorage.getItem("user");
        const parsedUser = storedUser ? JSON.parse(storedUser) : null;
        if (!parsedUser) return;

        const isFavorite = parsedUser.favorites.includes(id);

        const updatedFavorites = isFavorite
            ? parsedUser.favorites.filter(favId => favId !== id)
            : [...parsedUser.favorites, id];

        const updatedUser = { ...parsedUser, favorites: updatedFavorites };
        setUser(updatedUser);
        await AsyncStorage.setItem("user", JSON.stringify(updatedUser));
        setFavorite(!isFavorite);
    };

    console.log("card", user?.favorites);

    return (
    <TouchableOpacity className='border-2 rounded-2xl justify-between text-brown p-2 w-40 h-32 relative' onPress={() => router.push(`/locations/${id}`)}>

      {/* location */}
      <Text className='font-bold text-brown w-24'>{name}</Text>

      {/* crowd level */}
      <View className='absolute z-0 top-2 right-2 flex justify-center items-center w-11 h-12'>
        <IconComponent/>
      </View>

      {/* details */}
        <View className={"flex-row"}>
            <Text className='text-xs z-1 text-gray-600 text-brown'>{distance} mi • Open {openTime}pm • Closes {closeTime-11}am</Text>
            {
                favorite ?
                    (<FontAwesome name="heart" size={22} color="green" className='absolute z-0 bottom-2 right-2 items-center w-6 h-16' onPress={()=> handleFavorite()}/>) :
                    (<FontAwesome name="heart-o" size={22} color='#7ABD7E' className='absolute z-0 bottom-2 right-2 items-center w-6 h-16' onPress={()=> handleFavorite()}/>)
            }
        </View>
    </TouchableOpacity>
  );
}
