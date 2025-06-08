import { Picker } from '@react-native-picker/picker';
import React from 'react';
import { View } from 'react-native';
import data from "../../data.json";

const LocationDropdown = ({ selectedValue, onValueChange }) => {
    const locations = data.locations;

    return (
        <View className="flex h-10 py-2.5 px-3 rounded-lg border-2 border-brown justify-center items-center bg-transparent">
            <Picker
                selectedValue={selectedValue}
                onValueChange={onValueChange}
                style={{ flex: 1, width: '100%', color: '#392E2D', backgroundColor: 'transparent' }}
            >
                {locations.map((location) => (
                    <Picker.Item key={location.type} label={location.name} value={location.type}/>
                ))}
            </Picker>
        </View>
    );
};



export default LocationDropdown;