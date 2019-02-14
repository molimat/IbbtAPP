import {
  createSwitchNavigator,
  createAppContainer,
  createDrawerNavigator,
  createStackNavigator
} from "react-navigation";

import React, { Component } from "react";
import { Text, StyleSheet, View, TouchableOpacity, Image } from "react-native";

import Icon from "react-native-vector-icons/FontAwesome";

import Main from "./pages/Main";
import Devocionais from "./pages/Devocionais";
import Podcasts from "./pages/Podcasts";

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

export default Routes;
