import { View, Text, SafeAreaView, TouchableOpacity, Image} from "react-native";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useFonts, Roboto_600SemiBold_Italic } from "@expo-google-fonts/roboto";
import { Inter_700Bold } from "@expo-google-fonts/inter";
import { Urbanist_700Bold } from "@expo-google-fonts/urbanist";

export default function Index() {
    useFonts({
        Inter_700Bold,
        Roboto_600SemiBold_Italic,
        Urbanist_700Bold,
    })
    return (
        <SafeAreaView className={"flex-1 justify-around items-center"}>
            <View>
                <Text className={"text-5xl font-bold text-dark-green"} style={{fontFamily: 'Urbanist_700Bold'}}>crowdy</Text>
            </View>
            <Image
                source={require("../assets/images/crowdy-logo.png")}
                className={"w-[250px] h-[250px] my-28"}
            />
            <TouchableOpacity className={"bg-green p-6 w-[90%] rounded-lg flex-row justify-between items-center"}>
                <Text className={"font-bold text-xl text-white"} style={{fontFamily: 'Roboto_600SemiBold_Italic'}}>Let's Begin</Text>
                <MaterialIcons name="keyboard-arrow-right" size={24} color="white" />
            </TouchableOpacity>
        </SafeAreaView>
    );
}
