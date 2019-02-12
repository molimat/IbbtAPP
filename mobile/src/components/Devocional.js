import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";

export default class Devocional extends Component {
  render() {
    const { conteudo } = this.props;

    return (
      <View style={styles.container}>
        <Text style={styles.title}> {conteudo.title.rendered} </Text>
        <Text style={styles.content}> {conteudo.content.rendered} </Text>
        <Text style={styles.author}> {conteudo.author} </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    borderBottomWidth: 1,
    borderColor: "#eee"
  },

  author: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#1C2022"
  },

  content: {
    fontSize: 15,
    lineHeight: 20,
    color: "#1C2022",
    marginVertical: 10
  },

  Title: {
    fontSize: 15,
    lineHeight: 20,
    color: "#1C2022",
    marginVertical: 10
  }
});
