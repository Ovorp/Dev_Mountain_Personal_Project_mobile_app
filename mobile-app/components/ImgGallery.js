import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
// import { Picker } from '@react-native-picker/picker';
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

  return (
    <View style={styles.main}>
      {pictures.length > 1 ? (
        <FlatList
          keyExtractor={(item) => `${item.picture_id}`}
          numColumns={2}
          data={pictures}
          renderItem={({ item }) => (
            <View style={styles.border}>
              <Image
                source={{ uri: `${SERVER_URL}/api/image/${item.picture_key}` }}
                style={styles.pictures}
              />
            </View>
          )}
        />
      ) : (
        <View />
      )}
    </View>
  );
}
// src={`/api/image/${image.picture_key}`

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e8f0f2',
    alignSelf: 'stretch',
  },
  pictures: {
    width: 150,
    height: 150,
    borderTopLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  border: {
    alignSelf: 'stretch',
    margin: 10,
    borderTopLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderWidth: 2,
    borderColor: 'black',
    borderStyle: 'solid',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 11.0,

    elevation: 15,
  },
});
