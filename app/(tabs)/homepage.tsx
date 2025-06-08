import LocationDropdown from "@/app/components/LocationDropdown";
import SchoolDropdown from "@/app/components/SchoolDropdown";
import { useState } from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import data from "../../data.json";
import HomePageSection from "../components/HomePageSection";


export default function HomePage() {
    const [selectedSchool, setSelectedSchool] = useState(3);
    const [selectedLocation, setSelectedLocation] = useState(0);

    // Filtered locationData based on selectedLocation
    const filteredLocations =
    selectedLocation === 0
        ? data.locationData
        : data.locationData.filter(location => location.type === selectedLocation);
    
    // amenity arrays
    const gyms = filteredLocations.filter(location => location.type === 1);
    const diningHalls = filteredLocations.filter(location => location.type === 2);
    const libraries = filteredLocations.filter(location => location.type === 3);
    const buses = filteredLocations.filter(location => location.type === 4);
    const parkingStructures = filteredLocations.filter(location => location.type === 5);
    const parkingLots = filteredLocations.filter(location => location.type === 6);

    return (
        <SafeAreaView className="flex-1 bg-cream">
            <ScrollView>
                <View className="flex-row px-4 py-2 gap-x-2">
                    <View className="flex-1">
                        <SchoolDropdown
                            selectedValue={selectedSchool}
                            onValueChange={(value: any) => setSelectedSchool(Number(value))}
                        />
                    </View>
                    <View className="flex-1">
                        <LocationDropdown
                            selectedValue={selectedLocation}
                            onValueChange={(value: any) => setSelectedLocation(Number(value))}
                        />
                    </View>
                </View>

                {gyms.length > 0 && <HomePageSection title="Gyms" cards={gyms} />}
                {diningHalls.length > 0 && <HomePageSection title="Dining Halls" cards={diningHalls} />}
                {libraries.length > 0 && <HomePageSection title="Libraries" cards={libraries} />}
                {buses.length > 0 && <HomePageSection title="Buses" cards={buses} />}
                {parkingStructures.length > 0 && (
                <HomePageSection title="Parking Structures" cards={parkingStructures} />
                )}
                {parkingLots.length > 0 && <HomePageSection title="Parking Lots" cards={parkingLots} />}
            </ScrollView>
        </SafeAreaView>

    );
}
