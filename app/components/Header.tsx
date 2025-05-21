import {useRouter} from "expo-router";
import {Image, TouchableOpacity, View} from "react-native";
import React from "react";
import data from "../../data.json"
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Header() {
    const router = useRouter();
    return (
        <SafeAreaView>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20}}>
                <TouchableOpacity onPress={() => router.push("/(tabs)/homepage")}>
                    <Image
                        source={require('../../assets/images/crowdy-logo.png')}
                        style={{ width: 50, height: 50 }}
                        resizeMode="contain"
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => router.push("/(tabs)/profile")}>
                    {/*<Image*/}
                    {/*    source={{ uri: data.user.image }}*/}
                    {/*    style={{ width: 50, height: 50, borderRadius: 100 }}*/}
                    {/*    resizeMode="contain"*/}
                    {/*/>*/}
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}