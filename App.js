import React, { Component } from 'react'
import { StyleSheet, Text, View, Platform, StatusBar } from 'react-native'
import AddDeck from './components/AddDeck'
import AddCard from './components/AddCard'
import Constants from "expo-constants"
import { NavigationContainer } from "@react-navigation/native"
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { createStore } from "redux"
import { Provider } from "react-redux"
import { purple, white } from "./utils/colors"
import reducer from "./reducers"
import { Ionicons, FontAwesome } from "@expo/vector-icons"
import ListOfDecks from './components/ListOfDecks'
import Deck from './components/Deck'
import Quiz from './components/Quiz'
import Demo from './components/Demo'
import middleware from './middleware'


function AppStatusBar({ backgroundColor, ...props }) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  );
}

const Tabs =
  Platform.OS === "ios"
    ? createBottomTabNavigator()
    : createMaterialTopTabNavigator();

    const store = createStore(reducer, middleware)

export default function App() {
  return (
    <Provider store={store}>
      <View style={{ flex: 1 }}>
        <AppStatusBar backgroundColor={purple} barStyle="light-content" />
        <NavigationContainer>
          <Tabs.Navigator
            initialRouteName="Decks"
            screenOptions={({ route }) => ({
              tabBarIcon: ({ color, size }) => {
                let icon;
                if (route.name === "Decks") {
                  icon = (
                    <FontAwesome name="bring-forward" size={size} color={color} />
                  );
                } else if (route.name === "Add Deck") {
                  icon = (
                    <Ionicons name="plus-square" size={size} color={color} />
                  );
                } 
                return icon;
              }
            })}
            tabBarOptions={{
              activeTintColor: Platform.OS === "ios" ? purple : white,
              style: {
                height: 80,
                backgroundColor: Platform.OS === "ios" ? white : purple,
                shadowColor: "rgba(0, 0, 0, 0.24)",
                shadowOffset: {
                  width: 0,
                  height: 3
                },
                shadowRadius: 6,
                shadowOpacity: 1
              }
            }}
          >
            <Tabs.Screen name="Decks" component={ListOfDecks} />
            <Tabs.Screen name="Add Deck" component={AddDeck} />
          </Tabs.Navigator>
        </NavigationContainer>
      </View>
    </Provider>
  )
}

