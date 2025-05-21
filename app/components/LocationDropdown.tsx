import React from 'react';
import data from "../../data.json"
import { View, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const LocationDropdown = ({ selectedValue, onValueChange }) => {
    const locations = data.locations;

    return (
        <View>
            <Text>Choose an option:</Text>
            <Picker
                selectedValue={selectedValue}
                onValueChange={onValueChange}
            >
                {locations.map((location) => (
                    <Picker.Item key={location.type} label={location.name} value={location.type}/>
                ))}
            </Picker>
            <Text>Selected: {selectedValue}</Text>
        </View>
    );
};

export default LocationDropdown;