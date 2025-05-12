import { View, Text, SafeAreaView, TouchableOpacity} from "react-native";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function Index() {
    return (
        <SafeAreaView className={"flex-1 justify-center items-center"}>
            <View>
                <Text className={"text-5xl font-bold text-dark-green"}>crowdy</Text>
            </View>
            <TouchableOpacity>
                <Text>Let's Begin</Text>
                <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
            </TouchableOpacity>
        </SafeAreaView>
    );
}
