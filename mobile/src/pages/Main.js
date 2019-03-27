import React, { Component } from "react";
import { Text, StyleSheet, View, ScrollView } from "react-native";

import { MainContatos } from "../components/MainContatos";
import { MainSlider } from "../components/MainSlider";
import { Novidades } from "../components/Novidades";

export default class Main extends Component {
  render() {
    return (
      <ScrollView>
        <View style={{ flex: 5 }}>
          <Text style={styles.title}>Seja muito bem-vindo!</Text>
          {
            //<MainSlider />
          }
        </View>
        <View style={{ flex: 3 }}>
          <Text style={styles.title}>O que você não pode perder </Text>
          <Novidades />
        </View>
        <View style={{ flex: 2 }}>
          <Text style={styles.title}>Nos conheça mais! </Text>
          <MainContatos />
        </View>
      </ScrollView>
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
