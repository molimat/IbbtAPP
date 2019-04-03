import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";
import axios from "axios";

import { WebView } from "react-native-webview";
export class MainSlider extends Component {
  constructor() {
    super();
    this.state = {
      content: [],
      loaded: false
    };
  }

  async componentDidMount() {
    const response = await axios.get("http://ibbt.org.br/");

    this.setState({ content: response.data, loaded: true });
  }

  getSlide = str => {
    const URL = str.substring(
      str.indexOf("src=") + 5,
      str.indexOf(".mp3?") + 4
    );
    return URL;
  };
  render() {
    const conteudo = this.state.content;

    return (
      this.state.loaded && (
        <WebView
          originWhitelist={["*"]}
          automaticallyAdjustContentInsets={false}
          style={{ height: 100, backgroundColor: "#FFF" }}
          source={{ html: conteudo }}
          scrollEnabled={false}
        />
      )
    );
  }
}

const styles = StyleSheet.create({});
