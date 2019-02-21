import React, { Component } from "react";
import { Text, StyleSheet, View, Image, TouchableOpacity } from "react-native";
import { WebView } from "react-native-webview";

import CardFlip from "react-native-card-flip";
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

    return (
      <CardFlip style={styles.container} ref={card => (this.card = card)}>
        <View style={styles.cardContainer}>
          <HTML
            style={styles.titleText}
            html={conteudo.title.rendered}
            baseFontStyle={{
              fontSize: 25,
              color: "#FFF",
              fontWeight: "bold"
            }}
            containerStyle={{
              marginLeft: 10
            }}
          />
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.playButton}
              onPress={() => this.card.flip()}
            >
              <Icon name="playcircleo" size={45} color="#FFF" />
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <Player URL={this.getURL(conteudo.content.rendered)} />
          <TouchableOpacity
            style={styles.cardContainer}
            onPress={() => this.card.flip()}
          >
            <Text>{this.getURL(conteudo.content.rendered)}</Text>
          </TouchableOpacity>
        </View>
      </CardFlip>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#FFF",
    flexGrow: 1,
    height: 150,
    margin: 6,
    padding: 20,
    flexBasis: 0,
    flex: 1
  },

  cardContainer: {
    backgroundColor: "#5DA46F",
    fontSize: 15,
    height: 150,
    elevation: 5,
    flex: 1,
    flexDirection: "column",
    borderRadius: 5
  },

  titleText: {
    margin: 10,
    flex: 5
  },

  playButton: { alignSelf: "flex-end" },

  buttonContainer: {
    justifyContent: "flex-end",
    flexDirection: "row",
    margin: 10,
    flex: 2
  }
});
