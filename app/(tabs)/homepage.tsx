import { SafeAreaView, ScrollView, View } from "react-native";
import HomePageSection from "../components/HomePageSection";

export default function HomePage() {
    // amenity arrays
    const gyms = [
        { name: 'Anteater Recreation Center', icon: 'High' },
        { name: 'Mesa Court Recreation Center', icon: 'Low' },
    ];

    const diningHalls = [
        { name: 'Brandywine Commons', icon: 'Moderate' },
        { name: 'The Anteatery', icon: 'High' },
    ];

    const libraries = [
        { name: 'Science Library', icon: 'High' },
        { name: 'Langson Library', icon: 'High' },
    ];

    const buses = [
        { name: 'A Line', icon: 'High' },
        { name: 'E Line', icon: 'High' },
        { name: 'H Line', icon: 'High' },
        { name: 'M Line', icon: 'High' },
        { name: 'N Line', icon: 'High' },
    ];

    const parkingStructures = [
        { name: 'Anteater Parking Structure', icon: 'High' },
        { name: 'Mesa Parking Structure', icon: 'High' },
        { name: 'Social Sciences Parking Structure', icon: 'High' },
        { name: 'Student Center Parking Structure', icon: 'High' },
        { name: 'Health Sciences parking Structure', icon: 'High' },
        { name: 'ARC Parking Structure', icon: 'High' },
    ];

    const parkingLots = [
        { name: 'Lot ARC', icon: 'High' },
        { name: 'Lot 5', icon: 'High' },
        { name: 'Lot 14', icon: 'High' },
        { name: 'Lot 14A', icon: 'High' },
        { name: 'Lot 16H', icon: 'High' },
        { name: 'Lot 70', icon: 'High' },
        { name: 'Lot 90', icon: 'High' },
    ];

    return (
        <SafeAreaView className="flex-1">
            <View className="flex-1 bg-cream pt-10">
                <ScrollView>
                    <HomePageSection title="Gyms" cards={gyms} />
                    <HomePageSection title="Dining Halls" cards={diningHalls} />
                    <HomePageSection title="Libraries" cards={libraries} />
                    <HomePageSection title="Buses" cards={buses} />
                    <HomePageSection title="Parking Structures" cards={parkingStructures} />
                    <HomePageSection title="Parking Lots" cards={parkingLots} />
                </ScrollView>
            </View>
        </SafeAreaView>
    );
}
