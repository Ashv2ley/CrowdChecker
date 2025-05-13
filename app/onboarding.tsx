import {View, Text, SafeAreaView} from "react-native";
import CustomSwitch from "@/app/components/CustomSwitch"
import {useState} from "react";
export default function Onboarding() {
    const [onboardingMode, setOnboardingMode] = useState<Number>(1)
    const onSelectSwitch = (value:Number) => {
        setOnboardingMode(value)
    }
    return (
        <SafeAreaView className={"p-10"}>
            <View className={"gap-4 justify-center items-center p-10"}>
                <Text className={"text-3xl font-bold"}>Get Started Now</Text>
                <Text>Create an account or log in to explore our app</Text>
            </View>
            <CustomSwitch
                selectionMode={1}
                option1={"Sign Up"}
                option2={"Log In"}
                onSelectSwitch={onSelectSwitch}
            />
            {onboardingMode === 1 && (<Text>signup</Text>)}
            {onboardingMode === 2 && (<Text>login</Text>)}

        </SafeAreaView>
    );
}
