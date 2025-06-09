import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import { Image, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Header() {
    type User = {
        firstname: string;
        lastname: string;
        email: string;
        password: string;
        isVerified: boolean;
        isRemembered: boolean;
        isLoggedIn: boolean;
        timeJoined: string;
        image: string;
        preferences: {};
    };
    const router = useRouter();
    const [user, setUser] =  useState<User | null>(null)
    useEffect(() => {
        const loadUser = async () => {
            const storedUser = await AsyncStorage.getItem("user");
            const parsedUser = storedUser ? JSON.parse(storedUser) : null;
            if (parsedUser) {
                setUser(parsedUser);
            }
        };

        loadUser();
    }, []);

    return (
        <SafeAreaView className="mt-5">
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20}}>
                <TouchableOpacity onPress={() => router.push("/(tabs)/homepage")}>
                    <Image
                        source={require('../../assets/images/crowdy-logo.png')}
                        style={{ width: 50, height: 50 }}
                        resizeMode="contain"
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => router.push("/(tabs)/profile")}>
                    <Image
                        source={{ uri: user?.image }}
                        style={{ width: 50, height: 50, borderRadius: 100 }}
                        resizeMode="contain"
                    />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}