import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "expo-router";
import React, { useCallback, useState } from "react";
import { SafeAreaView, ScrollView, Text, View } from "react-native";
import HighCrowd from '../../assets/crowd-level/HighCrowd';
import LowCrowd from '../../assets/crowd-level/LowCrowd';
import ModerateCrowd from '../../assets/crowd-level/ModerateCrowd';
import data from "../../data.json";
import HomePageCard from "../components/HomePageCard";


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
    favorites: number[];
};

const iconMap = {
    "low": LowCrowd,
    "moderate": ModerateCrowd,
    "high": HighCrowd,
}

export default function Favorites() {
    const [user, setUser] = useState<User | null>(null);

    useFocusEffect(
        useCallback(() => {
            const loadUser = async () => {
                const storedUser = await AsyncStorage.getItem("user");
                const parsedUser = storedUser ? JSON.parse(storedUser) : null;
                if (parsedUser) {
                    setUser(parsedUser);
                }
            };

            loadUser();
        }, [])
    );


    const favoriteCards = data.locationData.filter((location) =>
        user?.favorites?.includes(location.id)
    );

    return (
        <SafeAreaView className="flex-1 bg-cream">
          <ScrollView contentContainerStyle={{ padding: 16 }}>
            <Text className="font-semibold text-3xl text-brown mb-2">Your Favorite Spots</Text>
            {favoriteCards.length > 0 ? (
                
              <View className="flex-row flex-wrap gap-4">
                {favoriteCards.map((location) => {
                    const IconComponent = iconMap[location.currentDensity]; 
                    return (
                        <HomePageCard
                        key={location.id}
                        name={location.name}
                        id={location.id}
                        icon={IconComponent}
                        open={location.open}
                        close={location.close}
                        distance={location.distance}
                        fromFavorites={true}
                        />
                    );
                    })}
              </View>
            ) : (
              <Text className="text-base text-gray-600">
                You have no favorite locations yet.
              </Text>
            )}
          </ScrollView>
        </SafeAreaView>
      );


}
