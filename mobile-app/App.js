import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native';
import axios from 'axios';
import Main from './components/Main';

export default function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [userId, setUserId] = useState(null);
  const SERVER_URL = `http://192.168.86.203:5555`;

  async function logInUser(email, password) {
    const logInData = {
      email: email,
      password: password,
    };

    const result = await axios
      .post(`${SERVER_URL}/api/users/login`, logInData)
      .catch((err) => console.log(err));
    if (result) {
      setLoggedIn(!loggedIn);
      setUserId(result.data.id);
    }
  }

  return (
    <>
      {loggedIn ? (
        <Main userId={userId} />
      ) : (
        <View style={styles.container}>
          <Text style={styles.header}>Log into the app!</Text>
          <Text>The email and password are case sensitive</Text>
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={true}
          />
          <Pressable onPress={() => logInUser(email, password)}>
            <Text style={{ fontSize: 29, marginTop: 10 }}>Log In</Text>
          </Pressable>
          <StatusBar style="auto" />
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 30,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
  },

  input: {
    height: 40,
    width: 200,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
