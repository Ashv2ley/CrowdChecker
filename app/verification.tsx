import React from 'react'
import { Text, SafeAreaView, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export default function Verification() {
    const router = useRouter();
    return (
        <SafeAreaView>
            <Text className="text-3xl font-bold">Verification</Text>
            <TouchableOpacity className={"bg-dark-green"} onPress={() => router.navigate("/(tabs)/homepage")}>
                <Text>
                    Homepage button
                </Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}