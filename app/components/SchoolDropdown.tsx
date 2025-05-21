import Reactr from 'react';
import { View, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';

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
        <View>
            <Text>Choose an option:</Text>
            <Picker
                selectedValue={selectedValue}
                onValueChange={onValueChange}
            >
                {schools.map((school) => (
                    <Picker.Item key={school.id} label={school.name} value={school.id}/>
                ))}
            </Picker>
            <Text>Selected: {selectedValue}</Text>
        </View>
    );
};

export default SchoolDropdown;