import React from 'react'
import { useRouter } from "expo-router";
import { Text, SafeAreaView, View } from 'react-native';
import CustomButton from "@/app/components/CustomButton"
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export default function Verification() {
    const router = useRouter();
    const handleVerification = () => {
        router.push("/(tabs)/homepage");
    }
    return (
        <SafeAreaView className="m-6 gap-12 items-center">
            <View className="relative w-full h-12 items-center justify-center">
                {/* Back Arrow */}
                <View className="absolute left-0">
                    <MaterialIcons
                        name="arrow-back-ios"
                        size={24}
                        color="black"
                        className="bg-gray rounded-full h-10 w-10 p-2"
                        onPress={() => router.push('/onboarding')}
                    />
                </View>

                {/* Centered Title */}
                <Text className="text-3xl font-bold text-center">Verification</Text>
            </View>

            <View className="bg-green h-48 w-48 rounded-full justify-center items-center m-14">
                <MaterialCommunityIcons name="message-lock-outline" size={56} color="white" className={"bg-dark-green h-36 w-36 rounded-full p-10"}/>
            </View>
            <View className="flex-col justify-center items-center gap-5">
                <Text className={"text-2xl font-bold"}>Verification code</Text>
                <Text className={"text-lg text-center"}>Enter the verification code we’ve sent to your janedoe@gmail.com</Text>
            </View>
            {/* Verification code input*/}

            <CustomButton bgColor={"bg-dark-green"} onPress={handleVerification} text={"Confirm"}/>
            <View className="flex-row gap-1">
                <Text>Didn’t receive the code?</Text>
                <Text className={"font-bold text-dark-green"}>Resend</Text>
            </View>
        </SafeAreaView>
    )
}