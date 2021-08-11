import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import axios from 'axios';
import * as Location from 'expo-location';
import WeatherInfo from './WeatherInfo';
import UnitPicker from './UnitsPicker';
import WeatherDetails from './WeatherDetails';
const SERVER_URL = `http://192.168.86.203:5555`;

export default function App() {
  const [errorMessage, setErrorMessage] = useState(null);
  const [currentWeather, setCurrentWeater] = useState(null);
  const [unitsSystem, setUnitSystem] = useState('imperial');

  useEffect(() => {
    load();
  }, [unitsSystem]);

  async function load() {
    setCurrentWeater(null);
    try {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMessage('We did not have permissions');
        return;
      }
      const location = await Location.getCurrentPositionAsync();

      const { latitude, longitude } = location.coords;

      const result = await axios
        .get(
          `${SERVER_URL}/api/weather?latitude=${latitude}&longitude=${longitude}&unitsSystem=${unitsSystem}`
        )
        .catch((err) => console.log(err));

      if (result.data) {
        setCurrentWeater(result.data);
      } else {
        setErrorMessage(result.message);
      }
    } catch (error) {
      setErrorMessage(error.message);
    }
  }

  if (currentWeather) {
    return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        <View style={styles.main}>
          <UnitPicker unitsSystem={unitsSystem} setUnitSystem={setUnitSystem} />
          <WeatherInfo currentWeather={currentWeather} />
        </View>
        <WeatherDetails
          currentWeather={currentWeather}
          unitsSystem={unitsSystem}
        />
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{errorMessage}</Text>
        <StatusBar style="auto" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#e8f0f2',
    justifyContent: 'center',
  },
  main: {
    justifyContent: 'center',
    flex: 1,
  },
});
