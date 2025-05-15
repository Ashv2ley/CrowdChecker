import {Text, TouchableOpacity} from "react-native";
import {useRouter} from "expo-router";

export default function CustomButton({text, pageNav, bgColor}) {
    const router = useRouter();
    return (
        <TouchableOpacity
            onPress={() => router.navigate(`/${pageNav}`)}
            className={`${bgColor} w-full rounded-full p-5 items-center`}
        >
            <Text className={`font-medium text-black text-xl`}>{text}</Text>
        </TouchableOpacity>

    );
}
