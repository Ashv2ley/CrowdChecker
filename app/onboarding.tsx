import {View, Text, SafeAreaView, TextInput, Platform} from "react-native";
import CustomSwitch from "@/app/components/CustomSwitch"
import CustomButton from "@/app/components/CustomButton"
import AsyncStorage from '@react-native-async-storage/async-storage';
import rawData from "../data.json"
import {useState} from "react";
import { Data } from '@/data';
import { useRouter } from 'expo-router'

export default function Onboarding() {
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
    const data: Data = rawData;
    const router = useRouter();
    const [onboardingMode, setOnboardingMode] = useState<Number>(1)
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleConfirmPassword = () => {
        if (password !== confirmPassword) {
            setErrorMessage("Passwords don't match!");
            return false;
        }
        return true;
    }
    const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        const existing = data.users.find((user:User) => user.email === email);
        if (!existing && handleConfirmPassword()){
            const user = {
                "firstname": firstname,
                "lastname": lastname,
                "email": email,
                "password": confirmPassword,
                "isVerified": false,
                "isRemembered": false,
                "isLoggedIn": true,
                "timeJoined": Date.now().toString(),
                "image": "https://th.bing.com/th/id/OIP.hmLglIuAaL31MXNFuTGBgAHaHa?rs=1&pid=ImgDetMain",
                "preferences": {}
            }
            data.users.push(user);
            await AsyncStorage.setItem("user", JSON.stringify(user));
            router.push("/verification")
        } else{
            console.log("Email already exists!");
            return;
        }
    }
    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const user = data.users.find((user:User) => user.email === email);
        if (user) {
            user.isLoggedIn = true;
            await AsyncStorage.setItem("user", JSON.stringify(user));
            router.push("/verification")
        } else {
            setErrorMessage("Account does not exists!");
            return;
        }
    }
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
                                    <TextInput className="border-2 border-gray rounded-full p-4 w-full" onChangeText={(text)=> setFirstname(text)}/>
                                </View>

                                <View className="flex-1 ml-2">
                                    <Text className="mb-1 font-medium">Last Name</Text>
                                    <TextInput className="border-2 border-gray rounded-full p-4 w-full" onChangeText={(text)=> setLastname(text)}/>
                                </View>
                            </View>

                            {/* Email */}
                            <View>
                                <Text className="mb-1 font-medium">Email</Text>
                                <TextInput className="border-2 border-gray rounded-full p-4 w-full" onChangeText={(text)=> setEmail(text)} />
                            </View>

                            {/* Password */}
                            <View>
                                <Text className="mb-1 font-medium">Password</Text>
                                <TextInput className="border-2 border-gray rounded-full p-4 w-full" onChangeText={(text)=> setPassword(text)}/>
                            </View>

                            {/* Confirm Password */}
                            <View>
                                <Text className="mb-1 font-medium">Confirm Password</Text>
                                <TextInput className="border-2 border-gray rounded-full p-4 w-full" onChangeText={(text)=> setConfirmPassword(text)}/>
                            </View>
                            {/* Sign Up Button */}
                            <CustomButton text={"Sign Up"} bgColor={"bg-dark-red"} onPress={handleSignUp}/>
                            <View className={"p-2"}>
                                {errorMessage.length > 0 && (
                                    <Text className={"text-dark-red"}>
                                        {errorMessage}
                                    </Text>
                                )}
                            </View>
                        </View>
                    )}

                    {onboardingMode === 2 && (
                        <View className="flex-col gap-8">
                            {/* Email */}
                            <View>
                                <Text className="mb-1 font-medium">Email</Text>
                                <TextInput className="border-2 border-gray rounded-full p-4 w-full" onChangeText={(text)=> setEmail(text)}/>
                            </View>

                            {/* Password */}
                            <View>
                                <Text className="mb-1 font-medium">Password</Text>
                                <TextInput className="border-2 border-gray rounded-full p-4 w-full" onChangeText={(text)=> setPassword(text)}/>
                            </View>

                            <View>

                            </View>

                            {/* Log In Button */}
                            <CustomButton text={"Log In"} bgColor={"bg-dark-yellow"} onPress={handleLogin}/>

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

                            {/* Apple Login */}

                            {/* Google Login */}

                        </View>
                    )}
                </View>
            </View>

        </SafeAreaView>
    );
}
