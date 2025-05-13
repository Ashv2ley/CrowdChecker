import {View, Text, Image} from "react-native";

export default function SplashScreen() {

    return (
        <View className={"bg-gradient-to-r from-green via-yellow to-red"}>
            <Image
                source={require("../assets/images/crowdy-logo.png")}
                className={"w-[250px] h-[250px] my-28"}
            />
        </View>
    );
}
