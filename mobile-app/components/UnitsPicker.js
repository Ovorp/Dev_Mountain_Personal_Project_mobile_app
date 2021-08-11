import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function UnitsPicker({ unitsSystem, setUnitSystem }) {
  return (
    <View style={styles.unitsSystem}>
      <Picker
        selectedValue={unitsSystem}
        onValueChange={(item) => setUnitSystem(item)}
      >
        <Picker.Item label="C°" value="metric" />
        <Picker.Item label="F°" value="imperial" />
      </Picker>
    </View>
  );
}

const styles = StyleSheet.create({
  unitsSystem: {
    position: 'absolute',
    top: -40,
    left: 20,
    height: 50,
    width: 100,
  },
});
