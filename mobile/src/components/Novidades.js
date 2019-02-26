import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";

export class Novidades extends Component {
  state = {
    isVisible: true
  };

  render() {
    const B = props => (
      <Text style={{ fontWeight: "bold" }}>{props.children}</Text> //PRA DEIXAR OS TEXTOS EM NEGRITO
    );
    return <View />;
  }
}

const styles = StyleSheet.create({
  subtitle: {},

  text: {}
});
