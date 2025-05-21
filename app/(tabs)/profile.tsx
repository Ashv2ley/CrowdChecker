import {View, Text, SafeAreaView, Image, TouchableOpacity} from "react-native";
import React, {useEffect, useState} from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Profile() {
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
        <SafeAreaView>
            <View className={"flex-col items-center p-6"}>
                <Image
                    source={{ uri: user?.image }}
                    style={{ width: 250, height: 250, borderRadius: 250, borderColor: "#7ABD7E", borderWidth: 5, shadowColor: "#7ABD7E", shadowRadius: 250 }}
                    resizeMode="contain"
                />
                <View className={"flex-row w-full p-4 border-2 border-black rounded-2xl"} style={{marginTop: 30, gap: 10}}>
                    <Text className={"text-2xl font-semibold"}>{user?.firstname}</Text>
                    <Text className={"text-2xl font-semibold"}>{user?.lastname}</Text>
                </View>
                <View className={"flex-row w-full p-4 border-2 border-black rounded-2xl"} style={{marginVertical: 30, gap: 10}}>
                    <Text className={"text-2xl font-semibold"}>{user?.email}</Text>
                </View>
                <TouchableOpacity>
                    <Text>Edit Crowd Level Preferences</Text>
                </TouchableOpacity>

            </View>
        </SafeAreaView>
    );
}
