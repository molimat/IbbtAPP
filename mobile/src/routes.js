import {
  createSwitchNavigator,
  createAppContainer,
  createDrawerNavigator,
  createStackNavigator
} from "react-navigation";

import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";

import React, { Component } from "react";
import { Text, StyleSheet, View, TouchableOpacity, Image } from "react-native";

import Icon from "react-native-vector-icons/FontAwesome5";

import Main from "./pages/Main";
import Devocionais from "./pages/Devocionais";
import Podcasts from "./pages/Podcasts";
import Eventos from "./pages/Eventos";
import Cultos from "./pages/Cultos";
import DevocionalPage from "./pages/DevocionalPage";

const DevocionaisStackNavigator = createStackNavigator(
  {
    Devocionais: {
      screen: Devocionais,
      navigationOptions: () => ({
        header: null
      })
    },
    DevocionalPage: {
      screen: DevocionalPage
    }
  },
  {
    initialRouteName: "Devocionais"
  }
);
const MyBottomTabNavigator = createMaterialBottomTabNavigator(
  {
    Devocionais: {
      screen: DevocionaisStackNavigator,
      navigationOptions: ({ navigation }) => ({
        tabBarLabel: "Devocionais",
        tabBarColor: "#FFF",
        inactiveColor:
          navigation.state.routeName === "Main" ? "#FFF" : "#5DA46F",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="hand-holding-heart" size={24} color={tintColor} />
        )
      })
    },
    Podcasts: {
      screen: Podcasts,
      navigationOptions: ({ navigation }) => ({
        tabBarLabel: "Podcasts",
        tabBarColor: "#FFF",
        inactiveColor:
          navigation.state.routeName === "Main" ? "#FFF" : "#5DA46F",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="microphone-alt" size={24} color={tintColor} />
        )
      })
    },
    Main: {
      screen: Main,
      navigationOptions: {
        tabBarLabel: "Início",
        tabBarColor: "#5DA46F",
        activeColor: "#FFF",
        //inactiveColor: "#FFF",
        tabBarIcon: ({ focused, tintColor }) => (
          <Image
            source={
              focused
                ? require("./images/logo.png")
                : require("./images/greenLogo.png")
            }
            style={{
              resizeMode: "contain",
              height: 24
            }}
          />
        )
      }
    },
    Cultos: {
      screen: Cultos,
      navigationOptions: ({ navigation }) => ({
        tabBarLabel: "Cultos",
        tabBarColor: "#FFF",
        inactiveColor:
          navigation.state.routeName === "Main" ? "#FFF" : "#5DA46F",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="video" size={24} color={tintColor} />
        )
      })
    },
    Eventos: {
      screen: Eventos,
      navigationOptions: ({ navigation }) => ({
        tabBarLabel: "Eventos",
        tabBarColor: "#FFF",
        inactiveColor:
          navigation.state.routeName === "Main" ? "#FFF" : "#5DA46F",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="calendar-alt" size={24} color={tintColor} />
        )
      })
    }
  },
  {
    initialRouteName: "Main",
    activeColor: "#5DA46F",
    shifting: true,
    barStyle: {
      elevation: 5
    }
  }
);

export default createAppContainer(MyBottomTabNavigator);
