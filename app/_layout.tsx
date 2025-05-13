import { Stack } from "expo-router";
import './global.css'
import {useState, useEffect} from "react";
import SplashScreen from "@/app/SplashScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function RootLayout() {

  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000); // show splash screen for 2s
  });

  return (
            loading ? (<SplashScreen/>) : (
            <Stack>
                <Stack.Screen
                    name="index"
                    options={{headerShown: false}}
                />
                <Stack.Screen
                    name="onboarding"
                    options={{headerShown: false}}
                />
                <Stack.Screen
                    name="locations/[id]"
                    options={{headerShown: false}}
                />
                <Stack.Screen
                    name="(tabs)"
                    options={{headerShown: false}}
                />
            </Stack>
            )

  );
}
