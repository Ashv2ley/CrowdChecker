import { View, Text, SafeAreaView, Image, TouchableOpacity, TextInput, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Profile() {
    type User = {
        firstname: string;
        lastname: string;
        email: string;
        password: string;
        isRemembered: boolean;
        isLoggedIn: boolean;
        timeJoined: string;
        image: string;
        preferences: {};
    };

    const [user, setUser] = useState<User | null>(null);
    const [editMode, setEditMode] = useState(false);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");

    useEffect(() => {
        const loadUser = async () => {
            const storedUser = await AsyncStorage.getItem("user");
            const parsedUser = storedUser ? JSON.parse(storedUser) : null;
            if (parsedUser) {
                setUser(parsedUser);
                setFirstName(parsedUser.firstname);
                setLastName(parsedUser.lastname);
                setEmail(parsedUser.email);
            }
        };

        loadUser();
    }, []);

    const handleSave = async () => {
        if (!user) return;

        const updatedUser = {
            ...user,
            firstname: firstName,
            lastname: lastName,
            email: email,
        };

        await AsyncStorage.setItem("user", JSON.stringify(updatedUser));
        setUser(updatedUser);
        setEditMode(false);
    };

    return (
        <SafeAreaView>
            <ScrollView
                style={{
                    padding: 6
                }}
                contentContainerStyle={{
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 6
                }}
            >
                <Image
                    source={{ uri: user?.image }}
                    style={{
                        width: 250,
                        height: 250,
                        borderRadius: 250,
                        borderColor: "#7ABD7E",
                        borderWidth: 5,
                        shadowColor: "#7ABD7E",
                        shadowRadius: 250,
                    }}
                    resizeMode="contain"
                />

                {/* Full Name */}
                <View className={"flex-row w-full p-4 border-2 border-black rounded-2xl justify-between"} style={{marginTop: 30, gap: 8}}>
                    {editMode ? (
                        <TextInput
                            className="text-xl font-semibold flex-1"
                            value={`${firstName} ${lastName}`}
                            onChangeText={(text) => {
                                const parts = text.split(" ");
                                setFirstName(parts[0]);
                                setLastName(parts.slice(1).join(" "));
                            }}
                            placeholder="Full Name"
                        />
                    ) : (
                        <Text className="text-2xl font-semibold flex-1">
                            {user?.firstname} {user?.lastname}
                        </Text>
                    )}
                    <MaterialCommunityIcons
                        name="pencil"
                        size={32}
                        color="#7ABD7E"
                        onPress={() => setEditMode(true)}
                    />
                </View>

                {/* Email */}
                <View className={"flex-row w-full p-4 border-2 border-black rounded-2xl justify-between"} style={{marginTop: 30, gap: 8}}>
                    {editMode ? (
                        <TextInput
                            className="text-xl font-semibold flex-1"
                            value={email}
                            onChangeText={setEmail}
                            placeholder="Email"
                            keyboardType="email-address"
                        />
                    ) : (
                        <Text className="text-2xl font-semibold flex-1">{user?.email}</Text>
                    )}
                    <MaterialCommunityIcons
                        name="pencil"
                        size={32}
                        color="#7ABD7E"
                        onPress={() => setEditMode(true)}
                    />
                </View>

                {/* Crowd Level Preferences Placeholder */}
                <TouchableOpacity className={"w-full rounded-2xl"} style={{marginTop: 30, gap: 8, backgroundColor:"#7ABD7E", padding:22}}>
                    <Text style={{fontWeight:"500", fontSize:18, textAlign:"center"}}>Edit Crowd Level Preferences</Text>
                </TouchableOpacity>

                {/* Save Button */}
                {editMode && (
                    <TouchableOpacity
                        onPress={handleSave}
                        className="px-4 py-2 rounded-xl"
                    >
                        <Text className={"flex-row w-full p-4 bg-dark-green rounded-2xl justify-between"} style={{marginTop: 30, gap: 8}}>Save Changes</Text>
                    </TouchableOpacity>
                )}
            </ScrollView>
        </SafeAreaView>
    );
}
