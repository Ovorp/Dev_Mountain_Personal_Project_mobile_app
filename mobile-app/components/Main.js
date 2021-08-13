import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Weather from './Weather';
import ImgGallery from './ImgGallery';
import LogOut from './LogOut';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
const Tab = createBottomTabNavigator();

function MainWeather() {
  return (
    <View style={styles.main}>
      <Weather />
    </View>
  );
}

function Images({ userId }) {
  return <ImgGallery userId={userId} />;
}

function MyTabs({ userId: { userId, loggedIn, setLoggedIn } }) {
  function Image() {
    return <Images userId={userId} />;
  }
  // console.log(props, 'props');
  // console.log(userId, loggedIn, setLoggedIn, 'main');
  function Log() {
    return <LogOut setLoggedIn={setLoggedIn} loggedIn={loggedIn} />;
  }

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Weather"
        component={MainWeather}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Images"
        component={Image}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="image" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Log Out"
        component={Log}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="logout" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function Main({ userId }) {
  return (
    <NavigationContainer>
      <MyTabs userId={userId} />
    </NavigationContainer>
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
