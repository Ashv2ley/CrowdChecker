import { Tabs } from "expo-router";
import { View } from "react-native";
import CustomTabBar from "../components/CustomTabBar";
import Header from "../components/Header";

export default function _Layout() {
  return (
    <View style={{ flex: 1 }}>
      <Header />
      <Tabs
        tabBar={props => <CustomTabBar {...props} />}
        screenOptions={{ headerShown: false }}
      >
        <Tabs.Screen name="homepage" />
        <Tabs.Screen name="favorites" />
        <Tabs.Screen name="profile" />
      </Tabs>
    </View>
  );
}
