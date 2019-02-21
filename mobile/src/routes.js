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
import { green } from "ansi-colors";

const MyDrawerNavigator = createDrawerNavigator({
  Main: {
    screen: Main
  },
  Devocionais: {
    screen: Devocionais
  },
  Podcasts: {
    screen: Podcasts
  }
});

const MyBottomTabNavigator = createMaterialBottomTabNavigator(
  {
    Devocionais: {
      screen: Devocionais,
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

const Routes = createAppContainer(
  createStackNavigator(
    {
      MyDrawerNavigator
    },
    {
      defaultNavigationOptions: ({ navigation }) => ({
        headerStyle: {
          backgroundColor: "#5DA46F"
        },
        headerTitleStyle: {},
        headerTitle: (
          <TouchableOpacity
            style={{
              alignSelf: "center",
              textAlign: "center",
              justifyContent: "center",
              flex: 1,
              fontWeight: "bold",
              textAlignVertical: "center"
            }}
            onPress={() => navigation.navigate("Main")}
          >
            <Image
              source={require("./images/logo.png")}
              resizeMode={"contain"}
              style={{
                height: 40,
                alignSelf: "center",
                marginLeft: "auto",
                marginRight: "auto"
              }}
            />
          </TouchableOpacity>
        ),
        headerRight: (
          //A propriedade headerRight permite colocarmos um JSX dentro do nosso header.
          <TouchableOpacity onPress={() => navigation.navigate("Podcasts")}>
            <Icon
              name="power-off"
              size={24}
              color="#FFF"
              style={{ paddingRight: 20 }}
            />
          </TouchableOpacity>
        ),
        headerLeft: (
          <View>
            <TouchableOpacity onPress={() => navigation.navigate.openDrawer()}>
              <Icon
                name="list"
                size={24}
                color="#FFF"
                style={{ paddingLeft: 15 }}
              />
            </TouchableOpacity>
          </View>
        )
      })
    }
  )
);

export default createAppContainer(MyBottomTabNavigator);
