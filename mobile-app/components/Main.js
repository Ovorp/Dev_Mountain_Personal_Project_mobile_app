import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Weather from './Weather';
import ImgGallery from './ImgGallery';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
const Tab = createBottomTabNavigator();

function Main() {
  return (
    <View style={styles.main}>
      <Weather />
    </View>
  );
}

function Images({ userId }) {
  return <ImgGallery userId={userId} />;
}

function MyTabs({ userId }) {
  function Image() {
    return <Images userId={userId} />;
  }

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Main"
        component={Main}
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
    </Tab.Navigator>
  );
}

export default function App({ userId }) {
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
