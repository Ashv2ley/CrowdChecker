import { View, Text, SafeAreaView } from "react-native";
import React, { useEffect, useState, useCallback } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "expo-router";

export default function Favorites() {
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


    console.log("favorites",user?.favorites)

    return (
        <SafeAreaView>
            <View style={{ padding: 16 }}>
                <Text style={{ fontWeight: "bold", fontSize: 20, marginBottom: 12 }}>
                    Favorite Location IDs:
                </Text>
                {Array.isArray(user?.favorites) && user.favorites.map((item) => (
                    <View
                        key={item}
                        style={{
                            borderWidth: 2,
                            padding: 12,
                            borderRadius: 10,
                            maxWidth: 250,
                            marginBottom: 8,
                        }}
                    >
                        <Text>{item}</Text>
                    </View>
                ))}
            </View>
        </SafeAreaView>
    );
}
