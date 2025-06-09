import {View, Text, TouchableOpacity, ScrollView, Dimensions, Modal, StyleSheet, TextInput} from "react-native";
import {SafeAreaView} from 'react-native-safe-area-context';
import { useLocalSearchParams, useRouter } from "expo-router";
import { useState } from "react";
import { BarChart, LineChart } from 'react-native-chart-kit';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import data from "../../data.json"
import HighCrowd from '../../assets/crowd-level/HighCrowd';
import LowCrowd from '../../assets/crowd-level/LowCrowd';
import ModerateCrowd from '../../assets/crowd-level/ModerateCrowd';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

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
    const [visible, setVisible] = useState(false);
    const { id } = useLocalSearchParams();
    const locationId = parseInt(id as string, 10);
    const locationData = data.locationData.find((location:Location) => location.id === locationId);
    const IconComponent = iconMap[locationData.currentDensity];
    const [comment, setComment] = useState<string | null>(null);
    const [reportedDensity, setReportedDensity] = useState<string | null>(null);
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

    const handleSubmit = () => {
        if (comment){
            locationData.comments.push({
                text: comment,
                timeSubmitted: Date.now().toString(),
            })
        }
        locationData.reports.push({
            density: reportedDensity,
            timeSubmitted: Date.now().toString(),
        })
        setVisible(false);
    }

    return (
        <SafeAreaView>
        <ScrollView>
            <View className="p-6 gap-8">
                <View className={"flex-row"} style={{ flexDirection:"row", alignItems:"center", justifyContent:"space-between"}}>
                    <MaterialIcons name="arrow-back-ios-new" size={24} color="black" onPress={() => router.back()} className={"bg-green rounded-full p-2"}/>
                    <Text style={{fontSize:20, fontWeight:"600"}}>{locationData?.name}</Text>
                    <IconComponent/>
                </View>
                <TouchableOpacity style={{padding:20, backgroundColor:"#7ABD7E", borderRadius:20, alignItems:"center"}} onPress={() => setVisible(true)}>
                    <Text style={{fontSize:18, fontWeight:"500"}}>Report Current Crowd</Text>
                </TouchableOpacity>
                <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                    <Modal
                        transparent={true}
                        visible={visible}
                        animationType="fade"
                        onRequestClose={() => setVisible(false)}
                    >
                        <View
                            style={{
                                flex: 1,
                                justifyContent: "center",
                                alignItems: "center",
                                backgroundColor: 'rgba(0,0,0,0.5)' // Optional dimmed background
                            }}
                        >
                            <View
                                style={{
                                    width: 300,
                                    height: 520,
                                    padding: 20,
                                    borderRadius: 10,
                                    alignItems: "center",
                                    backgroundColor: "white",
                                }}
                            >
                                <TouchableOpacity
                                    onPress={() => setVisible(false)}
                                    style={{
                                        alignSelf: "flex-end",
                                        marginBottom: 10
                                    }}
                                >
                                    <FontAwesome5 name="times" size={24} color="black" />
                                </TouchableOpacity>
                                <Text style={{fontSize:28, fontWeight:"bold", textAlign:"center"}}>{locationData.name}</Text>
                                <Text style={{fontSize:14, fontWeight:"semibold", textAlign:"center", paddingVertical:5}}>You are reporting the crowd at {new Date().getHours()-12}:{new Date().getMinutes()}PM</Text>
                                <View style={styles.container}>
                                    <TouchableOpacity
                                        onPress={() => setReportedDensity("low")} style={[styles.densityButton,{borderColor:"#7ABD7E"}]}>
                                        <Text style={[styles.densityText,{color:"#7ABD7E"}]}>Not Crowded</Text>
                                        <LowIcon/>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => setReportedDensity("moderate")} style={[styles.densityButton,{borderColor:"#FFC571"}]}>
                                        <Text style={[styles.densityText,{color:"#FFC571"}]}>Moderately Crowded</Text>
                                        <ModerateIcon/>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => setReportedDensity("high")} style={[styles.densityButton,{borderColor:"#E06666"}]}>
                                        <Text style={[styles.densityText,{color:"#E06666"}]}>Very Crowded</Text>
                                        <HighIcon/>
                                    </TouchableOpacity>
                                    <TextInput
                                        onChangeText={(text) => setComment(text)}
                                        style={styles.input}
                                        placeholder={"Any comments?"}
                                        placeholderTextColor={"#6D6D6D"}
                                    />
                                </View>
                                <TouchableOpacity onPress={handleSubmit} style={{borderRadius:12, borderWidth:2, padding:8, width:"90%"}}>
                                    <Text style={{fontWeight:"bold", fontSize:22, textAlign:"center"}}>Submit Crowd</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </Modal>
                </View>

                <View className="gap-4">
                    <Text style={{fontSize:20, fontWeight:"500", outlineStyle:"solid", color: "#7ABD7E"}}>Current Reports</Text>
                    <Text>Student opinions on the crowd at {new Date().getHours()-12}-{new Date().getHours()-12+1} PM today</Text>
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
                            paddingVertical:10
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
            </View>
        </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {padding:20, width: 250, gap:20},
    densityButton: { borderRadius:10, padding:5, paddingVertical:8, borderWidth:2, width:'100%', flexDirection:"row",  justifyContent:"space-between", alignItems:"center"},
    densityText: {fontWeight:"bold", fontSize: 16},
    input: {borderWidth: 2, borderRadius:10, padding:12, width:"100%"},
});