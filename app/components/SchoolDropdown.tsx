import { Picker } from '@react-native-picker/picker';
import React from 'react';
import { View } from 'react-native';

const SchoolDropdown = ({ selectedValue, onValueChange }) => {
    const schools = [
        { name: "UC Berkeley", id: 1 },
        { name: "UC Davis", id: 2 },
        { name: "UC Irvine", id: 3 },
        { name: "UC Los Angeles", id: 4 },
        { name: "UC Merced", id: 5 },
        { name: "UC Riverside", id: 6 },
        { name: "UC San Diego", id: 7 },
        { name: "UC Santa Barbara", id: 8 },
        { name: "UC Santa Cruz", id: 9 }
    ];

    return (
        <View className="flex h-10 py-2.5 px-3 rounded-lg border-2 border-brown justify-center items-center bg-transparent">
            <Picker
                selectedValue={selectedValue}
                onValueChange={onValueChange}
                style={{ flex: 1, width: '100%', color: '#392E2D', backgroundColor: 'transparent' }}
            >
                {schools.map((school) => (
                    <Picker.Item 
                        key={school.id} 
                        label={school.name} 
                        value={school.id} 
                    />
                ))}
            </Picker>
        </View>
    );
};

export default SchoolDropdown;
