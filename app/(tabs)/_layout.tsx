import {Tabs} from "expo-router";
import { View } from "react-native";
import Header from "../components/Header"

export default function _Layout() {
    return (
        <View style={{ flex: 1 }}>
            <Header/>
            <Tabs>
                <Tabs.Screen
                    name="homepage"
                    options={{
                        title: "Home",
                        headerShown: false
                    }}
                />
                <Tabs.Screen
                    name="favorites"
                    options={{
                        title: "Favorites",
                        headerShown: false
                    }}
                />
                <Tabs.Screen
                    name="profile"
                    options={{
                        title: "Profile",
                        headerShown: false
                    }}
                />
            </Tabs>
        </View>
    );
}
