import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { colors } from '../utils/index';

const { PRIMARY_COLOR, SECONDARY_COLOR } = colors;

export default function WeatherInfo({ currentWeather }) {
  const {
    main: { temp },
    weather: [details],
    name,
  } = currentWeather;

  const { icon, description } = details;
  const iconUrl = `https://openweathermap.org/img/wn/${icon}@4x.png`;

  return (
    <View style={styles.weatherInfo}>
      <Text style={styles.location}>{name}</Text>
      <Image style={styles.weatherIcon} source={{ uri: iconUrl }} />
      <Text style={styles.text}>{temp}°</Text>
      <Text style={styles.weatherDescription}>{description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  location: {
    fontSize: 40,
    fontWeight: '600',
  },
  weatherInfo: {
    alignItems: 'center',

    marginTop: 50,
  },
  weatherDescription: {
    textTransform: 'capitalize',
  },
  text: {
    fontSize: 40,
    color: PRIMARY_COLOR,
  },
  weatherIcon: {
    width: 150,
    height: 150,
  },
});
