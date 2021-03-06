import React, { Component, useEffect } from 'react'
import { StyleSheet, Text, View, Platform, StatusBar } from 'react-native'
import AddCard from './components/AddCard'
import Constants from "expo-constants"
import { createStore } from "redux"
import { Provider } from "react-redux"
import { purple, white } from "./utils/colors"
import reducer from "./reducers"
import { Ionicons, FontAwesome } from "@expo/vector-icons"
import Deck from './components/Deck'
import Quiz from './components/Quiz'
import middleware from './middleware'
import NoQuiz from './components/NoQuiz'
import MainTabNavigator from './navigation/MainTabNavigator'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import ListOfDecks from './components/ListOfDecks'
import { setLocalNotification } from './utils/helper'

const Stack = createStackNavigator()

function AppStatusBar({ backgroundColor, ...props }) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  );
}

const store = createStore(reducer, middleware)

export default function App() {

  useEffect(() => {
    setLocalNotification()
  });
  
  return (
    <Provider store={store}>
      <View style={{ flex: 1 }}>
        <AppStatusBar backgroundColor={purple} barStyle="light-content" />
        <NavigationContainer>
          <Stack.Navigator initialRouteName='Tabs'>
            <Stack.Screen name='Tabs' component={MainTabNavigator} options={{headerShown: false}} />
            <Stack.Screen name='Deck' component={Deck} options={{ title: 'Deck Screen', headerTitleAlign: 'center' }} />
            <Stack.Screen name='Quiz' component={Quiz} options={{ title: 'Quiz Screen', headerTitleAlign: 'center' }} />
            <Stack.Screen name='NoQuiz' component={NoQuiz} options={{ title: 'No Quiz', headerTitleAlign: 'center' }} />
            <Stack.Screen name='AddCard' component={AddCard} options={{ title: 'Add Card Screen', headerTitleAlign: 'center' }} />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </Provider>
  )
}

