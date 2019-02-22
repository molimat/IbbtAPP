import React, { Component } from "react";
import { Text, StyleSheet, View, TouchableOpacity, Image } from "react-native";

import { Infos, Slider } from "../components/MainComponents";

export default class Main extends Component {
  render() {
    return (
      <View>
        <View>
          <Text style={styles.title}>Seja muito bem-vindo!</Text>
        </View>
        <View>
          <Text style={styles.title}>O que você não pode perder </Text>

          <Slider />
        </View>
        <View>
          <Text style={styles.title}>
            Se você quer ter mais informações...{" "}
          </Text>
          <Infos />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    color: "#666",
    margin: 10
  }
});
