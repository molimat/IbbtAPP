import React, { Component } from "react";
import { Text, StyleSheet, View, TouchableOpacity, Image } from "react-native";

import { Infos, Slider } from "../components/MainComponents";

export default class Main extends Component {
  render() {
    return (
      <View>
        <View>
          <Text> Main </Text>
        </View>
        <View>
          <Slider />
        </View>
        <View>
          <Infos />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
