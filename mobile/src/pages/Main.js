import React, { Component } from "react";
import { Text, StyleSheet, View, TouchableOpacity, Image } from "react-native";

import { Divider } from "react-native-elements";

import { MainContatos } from "../components/MainContatos";
import { MainSlider } from "../components/MainSlider";
import { Novidades } from "../components/Novidades";
import { OverlayApresentacao } from "../components/OverlayApresentacao";

export default class Main extends Component {
  render() {
    return (
      <View>
        <View>
          <Text style={styles.title}>Seja muito bem-vindo!</Text>

          <MainSlider />
        </View>
        <View>
          <Text style={styles.title}>O que você não pode perder </Text>
          <Novidades />
        </View>
        <View>
          <Text style={styles.title}>Nos conheça mais! </Text>
          <MainContatos />
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
