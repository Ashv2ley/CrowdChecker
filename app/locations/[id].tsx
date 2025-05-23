import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import data from "../../data.json"
import HighCrowd from '../../assets/crowd-level/HighCrowd';
import LowCrowd from '../../assets/crowd-level/LowCrowd';
import ModerateCrowd from '../../assets/crowd-level/ModerateCrowd';

export default function LocationDetails() {
    type Location = {
        id: number;
        name: string;
        type: number;
        distance: number;
        hours: {
            open: string;
            close: string;
        };
        currentDensity: string;
        reports: {
            density: string;
            timeReported: string;
        }[];
        comments: {
            text: string;
            timeSubmitted: string;
        }[];
    };
    const iconMap = {
        "low": LowCrowd,
        "moderate": ModerateCrowd,
        "high": HighCrowd,
    }
    const router = useRouter();
    const { id } = useLocalSearchParams();
    const locationId = parseInt(id as string, 10);
    const locationData = data.locationData.find((location:Location) => location.id === locationId);
    const IconComponent = iconMap[locationData.currentDensity];

    return (
        <SafeAreaView>
            <View className="p-6">
                <View className={"flex-row"} style={{ flexDirection:"row", alignItems:"center"}}>
                    <MaterialIcons name="arrow-back-ios-new" size={24} color="black" onPress={() => router.back()} />
                    <Text style={{fontSize:20, fontWeight:"600"}}>{locationData?.name}</Text>
                    <IconComponent/>
                </View>
                <SafeAreaView>
                    <Text>Report Current Crowd</Text>
                </SafeAreaView>
                <View>
                    <Text>Current Reports</Text>
                    <Text>Student opinions on the crowd at 5–6 PM today</Text>
                    {locationData?.comments.map((comment) => (
                        <View key={comment.text}>
                            <Text>{comment.text}</Text>
                        </View>
                    ))}
                </View>
                <View>
                    <Text>i shouldn't have come</Text>
                </View>
                <View>
                    <Text>Predicted Crowd</Text>
                </View>
                <View>
                    <View>
                        <Text>Hours</Text>
                    </View>
                    <View>
                        <Text>Location</Text>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
}
