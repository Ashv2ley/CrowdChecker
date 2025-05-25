import {View, Text, TouchableOpacity, ScrollView, Dimensions} from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context"
import { BarChart, LineChart } from 'react-native-chart-kit';
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
    const LowIcon = iconMap["low"];
    const ModerateIcon = iconMap["moderate"];
    const HighIcon = iconMap["high"];
    const densityCounts = data.locationData.reduce(
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
    );

    const DATA = {
        labels: [],
        datasets: [
            {
                data: [densityCounts.low, densityCounts.moderate, densityCounts.high],
                colors: [
                    () => '#B6D7A8',
                    () => '#FAD5A0',
                    () => '#EA9999',
                ],
            },
        ],
    };

    return (
        <ScrollView>
            <View className="p-6 gap-8">
                <View className={"flex-row"} style={{ flexDirection:"row", alignItems:"center", justifyContent:"space-between"}}>
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
                    <BarChart
                        data={DATA}
                        width={Dimensions.get('window').width - 40}
                        height={220}
                        fromZero
                        chartConfig={{
                            backgroundGradientFrom: '#F3F3F3',
                            backgroundGradientTo: '#F3F3F3',
                            decimalPlaces: 0,
                            color: (opacity = 1) => `rgba(34, 197, 94, ${opacity})`,
                            labelColor: () => '#000',
                        }}

                        style={{
                            marginVertical: 8,
                            borderRadius: 16,
                        }}
                    />
                    <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
                        <View style={{ alignItems: "center" }}>
                            <LowIcon/>
                            <Text style={{ color: "#7ABD7E", fontWeight: "600" }}>low</Text>
                        </View>
                        <View style={{ alignItems: "center" }}>
                            <ModerateIcon/>
                            <Text style={{ color: "#FFC571", fontWeight: "600" }}>moderate</Text>
                        </View>
                        <View style={{ alignItems: "center" }}>
                            <HighIcon/>
                            <Text style={{ color: "#E06666", fontWeight: "600" }}>high</Text>
                        </View>
                    </View>
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
                    <Text style={{ fontSize: 20, fontWeight: '500', color: '#7ABD7E' }}>
                        Predicted Crowd
                    </Text>
                    <LineChart
                        data={DATA}
                        width={Dimensions.get('window').width}
                        height={220}
                        yAxisSuffix=""
                        fromZero
                        chartConfig={{
                            backgroundGradientFrom: '#F3F3F3',
                            backgroundGradientTo: '#F3F3F3',
                            fillShadowGradientOpacity: 1,
                            decimalPlaces: 0,
                            color: (opacity = 1) => `rgba(34, 197, 94, ${opacity})`,
                            labelColor: () => '#000',
                        }}
                        style={{
                            borderRadius: 16,
                        }}
                    />
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 12 }}>
                        <View style={{ alignItems: 'center' }}>
                            <LowIcon />
                            <Text style={{ fontWeight: '500', marginTop: 4 }}>Low</Text>
                        </View>
                        <View style={{ alignItems: 'center' }}>
                            <ModerateIcon />
                            <Text style={{ fontWeight: '500', marginTop: 4 }}>Moderate</Text>
                        </View>
                        <View style={{ alignItems: 'center' }}>
                            <HighIcon />
                            <Text style={{ fontWeight: '500', marginTop: 4 }}>High</Text>
                        </View>
                    </View>
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
        </ScrollView>
    );
}