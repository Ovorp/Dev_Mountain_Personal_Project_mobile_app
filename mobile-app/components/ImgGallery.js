import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import axios from 'axios';
const SERVER_URL = `http://192.168.86.203:5555`;

export default function ImgGallery({ userId }) {
  const [pictures, setPictures] = useState([]);

  useEffect(() => {
    axios
      .get(`${SERVER_URL}/api/image?userId=${userId}`)
      .then((response) => {
        setPictures(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(userId, 'userId', pictures);
  return (
    <View style={styles.main}>
      <Text>{userId} is the user id</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e8f0f2',
  },
});
