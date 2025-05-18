import {View, Text, SafeAreaView, TextInput, Platform} from "react-native";
import CustomSwitch from "@/app/components/CustomSwitch"
import CustomButton from "@/app/components/CustomButton"
import * as AppleAuthentication from 'expo-apple-authentication';
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
                    <Text className="text-3xl font-bold">{onboardingMode === 1 ? "Get Started Now" : "Welcome Back"}</Text>
                    <Text className={"text-dark-gray"}>{onboardingMode === 1 ? "Create an account or log in to explore our app" : "Log in to access your account"}</Text>
                </View>
                <CustomSwitch
                    selectionMode={1}
                    option1={"Sign Up"}
                    option2={"Log In"}
                    onSelectSwitch={onSelectSwitch}
                />
                <View className="w-full px-3">
                    {onboardingMode === 1 && (
                        <View className="flex-col gap-8">
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
                            {/* Sign Up Button */}
                            <CustomButton text={"Sign Up"} pageNav={"verification"} bgColor={"bg-dark-red"} />
                        </View>
                    )}

                    {onboardingMode === 2 && (
                        <View className="flex-col gap-8">
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

                            <View>

                            </View>

                            {/* Log In Button */}
                            <CustomButton text={"Log In"} pageNav={"verification"} bgColor={"bg-dark-yellow"}/>

                            {/* Divider */}
                            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                <View style={{flex: 1, height: 1, backgroundColor: '#6D6D6D'}} />
                                <View>
                                    <Text style={{width: 100, textAlign: 'center', color: '#6D6D6D'}}>Or sign in with</Text>
                                </View>
                                <View style={{flex: 1, height: 1, backgroundColor: '#6D6D6D'}} />
                            </View>

                            {/*Native Login */}
                            {Platform.OS === 'ios' && (
                                <View>

                                </View>
                            )}

                            {/* Google Login */}

                            {/* Google Login */}

                        </View>
                    )}
                </View>
            </View>

        </SafeAreaView>
    );
}
