import { Stack } from "expo-router";
import './global.css'
import {useState, useEffect} from "react";
import Splash from "@/app/splash";

export default function RootLayout() {
    const [loading, setLoading] = useState<boolean>(true);

  return (
            loading ? (<Splash/>) : (
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
                    name="verification"
                    options={{headerShown: false}}
                />
                <Stack.Screen
                    name="(tabs)"
                    options={{headerShown: false}}
                />
                <Stack.Screen
                    name="locations/[id]"
                    options={{headerShown: false}}
                />
            </Stack>
            )

  );
}
