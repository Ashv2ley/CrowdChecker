import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import HomePageCard from './HomePageCard';

import HighCrowd from '../../assets/crowd-level/HighCrowd';
import LowCrowd from '../../assets/crowd-level/LowCrowd';
import ModerateCrowd from '../../assets/crowd-level/ModerateCrowd';

type HomePageSectionProps = {
  title: string;
  cards: any;
};

export default function HomePageSection({ title, cards }: HomePageSectionProps) {
  const iconMap = {
    Low: LowCrowd,
    Moderate: ModerateCrowd,
    High: HighCrowd,
  };

  return (
    <View className="mb-4 ml-4 mr-4">
      <Text className="font-bold text-xl pb-2 text-brown">{title}</Text>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View className="flex-row gap-4">
          {cards.map((card, index) => (
            <HomePageCard key={index} name={card.name} icon={iconMap[card.icon]} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
