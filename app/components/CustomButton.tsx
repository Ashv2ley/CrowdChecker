import {Text, TouchableOpacity} from "react-native";

export default function CustomButton({text, bgColor, onPress}) {
    return (
        <TouchableOpacity
            onPress={onPress}
            className={`${bgColor} w-full rounded-full p-5 items-center`}
        >
            <Text className={`font-medium text-black text-xl`}>{text}</Text>
        </TouchableOpacity>

    );
}
