import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { Pressable, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import FavoritesIcon from '../../assets/navigation/FavoritesIcon';
import HomeIcon from '../../assets/navigation/HomeIcon';
import ProfileIcon from '../../assets/navigation/ProfileIcon';

const colors = {
    brown: '#392E2D',
    green: '#7ABD7E',
    cream: '#F5F3F0'
};

const tabItems = [
  { name: 'homepage', label: 'Home', icon: HomeIcon },
  { name: 'favorites', label: 'Favorites', icon: FavoritesIcon },
  { name: 'profile', label: 'Profile', icon: ProfileIcon },
];

export default function CustomTabBar({ state, descriptors, navigation }: BottomTabBarProps) {
  const insets = useSafeAreaInsets();

  return (
    <View
      className="flex-row justify-around items-center pt-4 mb-4"
      style={{
        backgroundColor: colors.cream,
        borderTopWidth: 2,
        borderTopColor: colors.green,
        paddingBottom: insets.bottom,
      }}
    >
      {state.routes.map((route, index) => {
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const tabItem = tabItems.find(item => item.name === route.name);
        if (!tabItem) return null;

        const Icon = tabItem.icon;

        return (
          <Pressable key={route.key} onPress={onPress} className="items-center">
            <Icon
              width={28}
              height={28}
              focused={isFocused}
            />

          </Pressable>
        );
      })}
    </View>
  );
}
