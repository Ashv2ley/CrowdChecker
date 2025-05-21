import {View, Text, SafeAreaView, Image, TouchableOpacity} from "react-native";
import React, {useEffect, useState} from "react";
import data from "@/data.json";

export default function Profile() {
    const [user, setUser] = useState({})
    useEffect(() => {
        const data = localStorage.getItem("user");
        if (data){
            setUser(JSON.parse(data))
        }
    },[]);

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
                <TouchableOpacity>Edit Crowd Level Preferences</TouchableOpacity>

            </View>
        </SafeAreaView>
    );
}
