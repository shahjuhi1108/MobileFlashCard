import React, { Component } from 'react'
import { Platform } from 'react-native'
import { Ionicons, FontAwesome } from "@expo/vector-icons"
import { purple, white } from "../utils/colors"
import ListOfDecks from '../components/ListOfDecks'
import AddDeck from '../components/AddDeck'
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

const Tabs =
    Platform.OS === "ios"
        ? createBottomTabNavigator()
        : createMaterialTopTabNavigator();


function MainTabNavigator() {
    return (
            <Tabs.Navigator
                initialRouteName="ListOfDecks"
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ color, size }) => {
                        let icon;
                        if (route.name === "ListOfDecks") {
                            icon = (
                                <FontAwesome name="bring-forward" size={size} color={color} />
                            );
                        } else if (route.name === "Add Deck") {
                            icon = (
                                <Ionicons name="add-outline" size={size} color={color} />
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
                navigationOptions = {{ header: null }}
            >
                <Tabs.Screen name="ListOfDecks" component={ListOfDecks} options={{ title: 'List Of Decks'}}/>
                <Tabs.Screen name="Add Deck" component={AddDeck} />
            </Tabs.Navigator>
    )
}

export default MainTabNavigator
