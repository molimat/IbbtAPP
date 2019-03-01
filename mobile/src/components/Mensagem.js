import React, { Component } from "react";
import { Text, StyleSheet, View, Image, TouchableOpacity } from "react-native";

import { Button } from "react-native-elements";
import { Divider } from "react-native-elements";
import Icon from "react-native-vector-icons/AntDesign";
import HTML from "react-native-render-html";
import Player from "./Player";

export default class Mensagem extends Component {
  state = {
    loading: true
  };

  getURL = str => {
    const URL = str.substring(
      str.indexOf("src=") + 5,
      str.indexOf(".mp3?") + 4
    );
    return URL;
  };

  setLoaded = () => {
    this.setState({ loading: false });
  };

  //<Image style={{ height: 150, width: "100%" }} source={null} />
  render() {
    const { conteudo } = this.props;
    const htmlTitle = conteudo.title.rendered;
    const htmlExcert = conteudo.excerpt.rendered;
    //const htmlContent = conteudo.content.rendered;

    /* image={{
      uri: conteudo.better_featured_image
    }} */
    return (
      <View>
        <View style={styles.container}>
          <Image
            source={require("../images/ministerios.jpg")}
            resizeMode={"cover"}
            style={styles.imageContainer}
          />
          <View style={styles.infoContainer}>
            <HTML html={htmlTitle} baseFontStyle={styles.title} />
            <HTML html={htmlExcert} baseFontStyle={styles.subtitle} />
          </View>
          <View style={styles.rightContainer}>
            <Button
              icon={<Icon name="playcircleo" color="#ffffff" />}
              backgroundColor="#5DA46F"
            />
          </View>
        </View>
        <Divider style={{ backgroundColor: "#999" }} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    height: 55,
    margin: 6,

    flex: 1
  },

  imageContainer: {
    height: 55,

    flex: 1.5
  },

  infoContainer: {
    flex: 7,
    margin: 5,
    marginLeft: 10,
    flexDirection: "column",
    justifyContent: "flex-start"
  },

  rightContainer: {
    justifyContent: "center",
    flexDirection: "row",
    margin: 10,
    flex: 1
  },

  title: {
    fontSize: 14,
    fontWeight: "bold"
  },
  subtitle: {
    fontSize: 10,
    color: "#999"
  }
});
