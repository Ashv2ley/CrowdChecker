import {Tabs} from "expo-router";

export default function _Layout() {

    return (
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
    );
}
