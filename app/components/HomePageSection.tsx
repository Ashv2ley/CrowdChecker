import React, { JSX } from 'react';
import { ScrollView, Text, View } from 'react-native';
import HomePageCard from './HomePageCard';
import { Location } from '@/data';
import HighCrowd from '../../assets/crowd-level/HighCrowd';
import LowCrowd from '../../assets/crowd-level/LowCrowd';
import ModerateCrowd from '../../assets/crowd-level/ModerateCrowd';


type HomePageSectionProps = {
  title: string;
  cards: any;
};

const iconMap = {
    "low": LowCrowd,
    "moderate": ModerateCrowd,
    "high": HighCrowd,
}

export default function HomePageSection({ title, cards }: HomePageSectionProps) {
    return (
    <View className="mb-4 ml-4 mr-4">
      <View className="flex-row items-baseline gap-2">
        <Text className="font-semibold text-3xl text-brown">{title}</Text>
        <Text className="font-medium text-sm text-brown">{cards.length} open</Text>
      </View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View className="flex-row gap-4">
          {cards.map((card: Location, index: React.Key) => (
            <HomePageCard key={card.id} name={card.name} id={card.id} icon={iconMap[card.currentDensity]} open={card.hours.open} close={card.hours.close} distace={card.distance}/>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
