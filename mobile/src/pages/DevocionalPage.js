import React, { Component } from "react";
import { Text, StyleSheet, View, Image, ScrollView } from "react-native";

import HTML from "react-native-render-html";

export default class DevocionalPage extends Component {
  getDate = str => {
    const date = str.substring(0, str.indexOf("T"));
    return date;
  };
  render() {
    const { navigation } = this.props;
    const title = navigation.getParam("title", "Título");
    const image = navigation.getParam("image", "imagem");
    const author = navigation.getParam("author", "autor");
    const date = this.getDate(navigation.getParam("date", "data"));

    const htmlContent = navigation.getParam("content", "texto devocional");
    return (
      <ScrollView style={styles.container}>
        <View>
          <Text style={styles.title}> {title} </Text>
        </View>
        <View>
          <Image
            source={{ uri: image }}
            resizeMode={"cover"}
            style={styles.imageContainer}
          />
          <View>
            <Text>{"Postado em " + date}</Text>
            <Text>{"Escrito por " + author}</Text>
          </View>
        </View>
        <View style={styles.content}>
          <HTML html={htmlContent} baseFontStyle={styles.content} />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    marginBottom: 10,
    marginTop: 10
  },
  title: {
    fontSize: 30,
    marginTop: 6,
    marginBottom: 15,
    color: "#999"
  },
  imageContainer: {
    height: 250
  },
  content: { margin: 5, fontSize: 24, textAlign: "justify" }
});
