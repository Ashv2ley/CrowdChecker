import { SafeAreaView, ScrollView, View } from "react-native";
import HomePageSection from "../components/HomePageSection";
export default function HomePage() {

    return (
        <SafeAreaView>
            <View className="flex-1 bg-cream pt-10">
                <ScrollView>
                    <HomePageSection
                    title="Gyms"
                    cards={[{ name: 'Anteater Recreation Center', icon: 'High' },
                            { name: 'Mesa Court Recreation Center', icon: 'Low' }]}
                    />

                    <HomePageSection
                    title="Dining Halls"
                    cards={[{ name: 'Brandywine Commons', icon: 'Moderate' }, 
                            { name: 'The Anteatery', icon: 'High' }]}
                    />
                    
                    <HomePageSection 
                    title="Libraries" 
                    cards={[{ name: 'Science Library', icon: 'High' },
                            { name: 'Langson Library', icon: 'High' }]} />
                </ScrollView>
            </View>
        </SafeAreaView>
    );
}
