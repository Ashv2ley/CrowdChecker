import LocationDropdown from "@/app/components/LocationDropdown";
import SchoolDropdown from "@/app/components/SchoolDropdown";
import { useState } from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import data from "../../data.json";
import HomePageSection from "../components/HomePageSection";


export default function HomePage() {
    const [selectedSchool, setSelectedSchool] = useState(3);
    const [selectedLocation, setSelectedLocation] = useState(1);
    // amenity arrays
    const gyms = data.locationData.filter(location => location.type === 1);
    const diningHalls = data.locationData.filter(location => location.type === 2);
    const libraries = data.locationData.filter(location => location.type === 3);
    const buses = data.locationData.filter(location => location.type === 4);
    const parkingStructures = data.locationData.filter(location => location.type === 5);
    const parkingLots = data.locationData.filter(location => location.type === 6);

    return (
        <SafeAreaView className="flex-1">
            <ScrollView>
                <View className="flex-row bg-cream px-4 py-2 gap-x-2">
                    <View className="flex-1">
                        <SchoolDropdown
                            selectedValue={selectedSchool}
                            onValueChange={(value: number) => setSelectedSchool(value)}
                        />
                    </View>
                    <View className="flex-1">
                        <LocationDropdown
                            selectedValue={selectedLocation}
                            onValueChange={(value: number) => setSelectedLocation(value)}
                        />
                    </View>
                </View>

                <HomePageSection title="Gyms" cards={gyms} />
                <HomePageSection title="Dining Halls" cards={diningHalls} />
                <HomePageSection title="Libraries" cards={libraries} />
                <HomePageSection title="Buses" cards={buses} />
                <HomePageSection title="Parking Structures" cards={parkingStructures} />
                <HomePageSection title="Parking Lots" cards={parkingLots} />
            </ScrollView>
        </SafeAreaView>

    );
}
