import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  Image,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import axios from 'axios';
import Main from './components/Main';
import fishLogo from './utils/logos/fishLogo.png';

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
        <Main userId={{ userId, loggedIn, setLoggedIn }} />
      ) : (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
          <View style={styles.container}>
            <Image source={fishLogo} style={styles.fishLogo} />
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
              value={password}
              placeholder="Password"
              onChangeText={setPassword}
              secureTextEntry={true}
            />
            <Pressable
              onPress={() => logInUser(email, password)}
              style={{
                borderRadius: 10,
                borderWidth: 4,
                borderColor: '#dbdbdb',
                backgroundColor: '#343a40',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
              }}
            >
              <Text
                style={{
                  fontSize: 29,
                  color: '#e8f0f2',
                  width: 150,
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                }}
              >
                Log In
              </Text>
            </Pressable>
            <StatusBar style="auto" />
          </View>
        </TouchableWithoutFeedback>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    position: 'relative',
    top: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e8f0f2',
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    height: 40,
    width: 200,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  fishLogo: {
    resizeMode: 'center',
    position: 'absolute',
    top: -40,
  },
});
