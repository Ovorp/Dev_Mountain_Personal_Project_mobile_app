import React from 'react';
import { View, Pressable, Text, StyleSheet } from 'react-native';
import axios from 'axios';

const SERVER_URL = `http://192.168.86.203:5555`;

export default function LogOut({ setLoggedIn, loggedIn }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Pressable
        style={styles.logout}
        onPress={() => {
          axios
            .post(`${SERVER_URL}/api/users/logout`)
            .then()
            .catch(() => console.log('the log out did not work'));
          setLoggedIn(!loggedIn);
        }}
      >
        <Text style={styles.text}>Logout!</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  logout: {
    borderRadius: 10,
    borderWidth: 4,
    borderColor: '#dbdbdb',
    backgroundColor: '#343a40',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    padding: 20,
  },
  text: {
    fontSize: 29,
    color: '#e8f0f2',
    width: 150,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
});
