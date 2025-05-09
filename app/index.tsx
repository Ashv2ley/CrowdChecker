import React from 'react';
import { ScrollView, View } from 'react-native';
import HomePageSection from './components/HomePageSection';

export default function Index() {
  return (
    <View className="flex-1 bg-beige pt-10">
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
  );
}

