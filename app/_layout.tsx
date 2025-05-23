import { Stack } from "expo-router";
import './global.css'
import {useState, useEffect} from "react";
import Splash from "@/app/splash";

export default function RootLayout() {
    const [loading, setLoading] = useState<boolean>(true);
    useEffect(() => {
        setTimeout(() => {
          setLoading(false);
        }, 2000); // show splash screen for 2s
    });


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
