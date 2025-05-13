import {View, Text, SafeAreaView} from "react-native";
import CustomSwitch from "@/app/components/CustomSwitch"
import {useState} from "react";
export default function Onboarding() {
    const [onboardingMode, setOnboardingMode] = useState<Number>(1)
    const onSelectSwitch = (value:Number) => {
        setOnboardingMode(value)
    }
    return (
        <SafeAreaView>
            <View>
                <Text>Get Started Now</Text>
                <Text>Create an account or log in to explore our app</Text>
                <CustomSwitch
                    selectionMode={1}
                    option1={"Sign Up"}
                    option2={"Log In"}
                    onSelectSwitch={onSelectSwitch}
                />
            </View>

            {onboardingMode === 1 && (<Text>signup</Text>)}
            {onboardingMode === 2 && (<Text>login</Text>)}

        </SafeAreaView>
    );
}
