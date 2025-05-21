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
            <View>
                <Image
                    source={{ uri: user?.image }}
                    style={{ width: 200, height: 200, borderRadius: 100 }}
                    resizeMode="contain"
                />
                <View>
                    <Text>{user?.firstname}</Text>
                    <Text>{user?.lastname}</Text>
                </View>
                <View>
                    <Text>{user?.email}</Text>
                </View>
                <TouchableOpacity>
                    <Text>Edit Crowd Level Preferences</Text>
                </TouchableOpacity>

            </View>
        </SafeAreaView>
    );
}
