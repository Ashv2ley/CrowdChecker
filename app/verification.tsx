import React from 'react'
import { Text, SafeAreaView, View } from 'react-native';
import { useRouter } from 'expo-router';
import CustomButton from "@/app/components/CustomButton"
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export default function Verification() {
    const router = useRouter();
    return (
        <SafeAreaView>
            <View className="flex-row justify-between">
                <MaterialIcons name="arrow-back-ios" size={24} color="black" />
                <Text className="text-3xl font-bold">Verification</Text>
            </View>
            <View className="bg-dark-green h-10 w-10">
                <MaterialCommunityIcons name="message-lock-outline" size={24} color="white" className={"justify-center items-center"}/>
            </View>
            <View>
                <Text>Verification code</Text>
                <Text>Enter the verification code we’ve sent to your janedoe@gmail.com</Text>
            </View>
            {/* Verification code input*/}

            <CustomButton bgColor={"bg-dark-green"} pageNav={"(tabs)/homepage"} text={"Confirm"}/>
            <View>
                <Text>Didn’t receive the code?</Text>
                <Text>Resend</Text>
            </View>
        </SafeAreaView>
    )
}