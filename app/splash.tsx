import React, { useEffect, useRef } from 'react';
import { View, Text, Image, Animated, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

export default function Splash() {
    const logoTranslateY = useRef(new Animated.Value(0)).current;
    const textOpacity = useRef(new Animated.Value(0)).current;
    const fadeAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.parallel([
            Animated.timing(logoTranslateY, {
                toValue: -50,
                duration: 2000,
                useNativeDriver: true,
            }),
            Animated.timing(textOpacity, {
                toValue: 1,
                duration: 1500,
                delay: 1000,
                useNativeDriver: true,
            }),
            Animated.timing(fadeAnim, {
                toValue: 1,
                duration: 2800,
                useNativeDriver: true,
            }),
        ]).start();
    }, []);

    return (
        <View style={{ flex: 1 }}>
            <LinearGradient
                colors={['#B6D7A8', '#FAD5A0', '#EA9999']}
                locations={[0.1, 0.5, 1.0]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={StyleSheet.absoluteFill}
            />
            <Animated.View style={[StyleSheet.absoluteFill, { opacity: fadeAnim }]}>
                <LinearGradient
                    colors={['#7ABD7E', '#FFC571', '#E06666']}
                    locations={[0.1, 0.5, 1.0]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    style={StyleSheet.absoluteFill}
                />
            </Animated.View>

            <SafeAreaView style={styles.container}>
                <Animated.View style={{ transform: [{ translateY: logoTranslateY }] }}>
                    <Image
                        source={require('../assets/images/crowdy-logo.png')}
                        style={{ width: 250, height: 250 }}
                        resizeMode="contain"
                    />
                </Animated.View>
                <Animated.Text style={[styles.text, { opacity: textOpacity }]}>crowdy
                    <FontAwesome5 name="exclamation" size={38} color="#7ABD7E" />
                </Animated.Text>
            </SafeAreaView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 60,
        fontWeight: 'bold',
        color: '#7ABD7E',
        fontFamily: 'Urbanist_700Bold'
    },
});
