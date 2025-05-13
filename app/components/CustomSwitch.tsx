import {View, Text, Image, TouchableOpacity} from "react-native";
import {useState} from "react";

export default function CustomSwitch({selectionMode, option1, option2, onSelectSwitch}) {
    const [getSelectionMode, setSelectionMode] = useState<Number>(selectionMode);
    const updateSwitchData = (value:Number) => {
        setSelectionMode(value);
        onSelectSwitch(value);
    }
    return (
        <View className={"rounded-full bg-gray flex-row justify-center"}>
            <TouchableOpacity
                activeOpacity={1}
                onPress={() => updateSwitchData(1)}
                className={`flex-1 justify-center items-center rounded-full ${getSelectionMode === 1 ? "bg-dark-red" : "bg-none"} p-5`}
            >
                <Text className={`font-medium text-black`}>{option1}</Text>
            </TouchableOpacity>
            <TouchableOpacity
                activeOpacity={1}
                onPress={() => updateSwitchData(2)}
                className={`flex-1 justify-center items-center rounded-full ${getSelectionMode === 2 ? "bg-dark-red" : "bg-none"}`}
            >
                <Text className={`font-medium text-black`}>{option2}</Text>
            </TouchableOpacity>
        </View>
    );
}
