import FontAwesome from '@expo/vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';


export default function HomePageCard({name, id, icon, open, close, distance, fromFavorites = false}) {
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

    return (
      <TouchableOpacity
        className={`border-2 rounded-2xl justify-between text-brown p-2 relative ${
          fromFavorites ? 'h-36 w-96' : 'h-32 w-56'
        }`}
        onPress={() => router.push(`/locations/${id}`)}
      >
    
      {/* location */}
      <Text       
        className={`font-semibold text-brown ${
          fromFavorites ? 'w-48 text-2xl' : 'w-32 text-lg' 
        }`}>
          {name}
        </Text>

      {/* crowd level */}
      <View className='absolute z-0 top-2 right-2 flex justify-center items-center w-16 h-16'>
        <IconComponent size={fromFavorites ? 80 : 60} />
      </View>

      {/* details */}
      <View className="flex-row">
        <Text 
          className={`z-1 text-gray-600 text-brown ${
            fromFavorites ? 'text-sm' : 'text-xs' 
          }`}
        >
          {distance} mi • Open now
        </Text>
      </View>

      {/* favorites btn */}
      <TouchableOpacity
        className="absolute bottom-2 right-2"
        onPress={handleFavorite}
      >
        {favorite ? (
          <FontAwesome name="heart" size={26} color="#7ABD7E" />
        ) : (
          <FontAwesome name="heart-o" size={26} color="#7ABD7E" />
        )}
      </TouchableOpacity>
    </TouchableOpacity>
  );
}
