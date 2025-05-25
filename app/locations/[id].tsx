import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context"
import { CartesianChart, Bar } from "victory-native";
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
    const densityData = Object.entries(
        data.locationData.reduce(
            (acc: { low: number; moderate: number; high: number }, location: Location) => {
                location.reports.forEach((report) => {
                    const density = report.density.toLowerCase();
                    if (density === "low" || density === "moderate" || density === "high") {
                        acc[density]++;
                    }
                });
                return acc;
            },
            { low: 0, moderate: 0, high: 0 }
        )
    ).map(([key, value]) => ({ x: key, y: value }));

    return (
        <SafeAreaView>
            <View className="p-6 gap-4">
                <View className={"flex-row"} style={{ flexDirection:"row", alignItems:"center"}}>
                    <MaterialIcons name="arrow-back-ios-new" size={24} color="black" onPress={() => router.back()} className={"bg-green rounded-full p-2"}/>
                    <Text style={{fontSize:20, fontWeight:"600"}}>{locationData?.name}</Text>
                    <IconComponent/>
                </View>
                <View style={{padding:20, backgroundColor:"#7ABD7E", borderRadius:20, alignItems:"center"}}>
                    <Text style={{fontSize:18, fontWeight:"500"}}>Report Current Crowd</Text>
                </View>
                <View className="gap-4">
                    <Text style={{fontSize:20, fontWeight:"500", outlineStyle:"solid", color: "#7ABD7E"}}>Current Reports</Text>
                    <Text>Student opinions on the crowd at 5–6 PM today</Text>
                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={{
                            flexDirection: "row",
                            gap: 8,
                        }}>
                        {locationData?.comments.map((comment) => (
                            <View
                                key={comment.text}
                                style={{
                                    borderWidth: 2,
                                    padding: 12,
                                    borderRadius: 10,
                                    maxWidth: 250,
                                }}>
                                <Text style={{ flexWrap: "wrap" }}>{comment.text}</Text>
                            </View>
                        ))}
                    </ScrollView>
                </View>
                <View>
                    <Text style={{fontSize:20, fontWeight:"500", outlineStyle:"solid", color: "#7ABD7E"}}>Predicted Crowd</Text>
                </View>
                <CartesianChart data={densityData} xKey="x" yKeys={["y"]}>
                    {({ points, chartBounds }) => (
                        <Bar
                            points={points.y}
                            chartBounds={chartBounds}
                        />
                    )}
                </CartesianChart>

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