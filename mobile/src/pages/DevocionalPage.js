import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";

export default class DevocionalPage extends Component {
  render() {
    const { navigation } = this.props;
    const title = navigation.getParam("title", "Título");
    const image = navigation.getParam("image", "imagem");
    const content = navigation.getParam("content", "texto devocional");
    return (
      <View>
        <View>
          <Text> {title} </Text>
        </View>
        <View>
          <Text> {image} </Text>
        </View>
        <View>
          <Text> {content} </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
