import {View, Text, SafeAreaView, TextInput} from "react-native";
import CustomSwitch from "@/app/components/CustomSwitch"
import {useState} from "react";
export default function Onboarding() {
    const [onboardingMode, setOnboardingMode] = useState<Number>(1)
    const onSelectSwitch = (value:Number) => {
        setOnboardingMode(value)
    }
    return (
        <SafeAreaView>
            <View className="gap-12 p-6">
                <View className="items-center gap-4 mb-2">
                    <Text className="text-3xl font-bold">Get Started Now</Text>
                    <Text>Create an account or log in to explore our app</Text>
                </View>
                <CustomSwitch
                    selectionMode={1}
                    option1={"Sign Up"}
                    option2={"Log In"}
                    onSelectSwitch={onSelectSwitch}
                />
                <View className="w-full px-4">
                    {onboardingMode === 1 && (
                        <View className="space-y-20">
                            {/* First Name and Last Name */}
                            <View className="flex-row w-full">
                                <View className="flex-1 mr-2">
                                    <Text className="mb-1 font-medium">First Name</Text>
                                    <TextInput className="border-2 border-gray rounded-full p-4 w-full" />
                                </View>

                                <View className="flex-1 ml-2">
                                    <Text className="mb-1 font-medium">Last Name</Text>
                                    <TextInput className="border-2 border-gray rounded-full p-4 w-full" />
                                </View>
                            </View>

                            {/* Email */}
                            <View>
                                <Text className="mb-1 font-medium">Email</Text>
                                <TextInput className="border-2 border-gray rounded-full p-4 w-full" />
                            </View>

                            {/* Password */}
                            <View>
                                <Text className="mb-1 font-medium">Password</Text>
                                <TextInput className="border-2 border-gray rounded-full p-4 w-full"/>
                            </View>

                            {/* Confirm Password */}
                            <View>
                                <Text className="mb-1 font-medium">Confirm Password</Text>
                                <TextInput className="border-2 border-gray rounded-full p-4 w-full" />
                            </View>
                        </View>
                    )}

                    {onboardingMode === 2 && (
                        <Text className="text-center font-medium text-lg">Login</Text>
                    )}
                </View>
            </View>

        </SafeAreaView>
    );
}
