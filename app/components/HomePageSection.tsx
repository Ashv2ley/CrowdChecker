import React, { JSX } from 'react';
import { ScrollView, Text, View } from 'react-native';
import HomePageCard from './HomePageCard';

import HighCrowd from '../../assets/crowd-level/HighCrowd';
import LowCrowd from '../../assets/crowd-level/LowCrowd';
import ModerateCrowd from '../../assets/crowd-level/ModerateCrowd';


type Card = {
  name: string;
  icon: IconLevel;
};

type IconLevel = 'Low' | 'Moderate' | 'High';

const iconMap: Record<IconLevel, () => JSX.Element> = {
  Low: LowCrowd,
  Moderate: ModerateCrowd,
  High: HighCrowd,
};


type HomePageSectionProps = {
  title: string;
  cards: any;
};

export default function HomePageSection({ title, cards }: HomePageSectionProps) {
  return (
    <View className="mb-4 ml-4 mr-4">
      <View className="flex-row items-baseline gap-2">
        <Text className="font-semibold text-3xl text-brown">{title}</Text>
        <Text className="font-medium text-sm text-brown">{cards.length} open</Text>
      </View>
      
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View className="flex-row gap-4">
          {cards.map((card: Card, index: React.Key) => (
            <HomePageCard key={index} name={card.name} icon={iconMap[card.icon]} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
