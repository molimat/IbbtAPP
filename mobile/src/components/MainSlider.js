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
    const response = await axios.get(
      "http://ibbt.org.br/wp-json/smartslider3/v1/sliders/3"
    );

    this.setState({ content: response.data, loaded: true });
  }

  render() {
    const conteudo = this.state.content;

    return (
      this.state.loaded && (
        <WebView
          originWhitelist={["*"]}
          automaticallyAdjustContentInsets={false}
          style={{ height: 100, backgroundColor: "#FFF" }}
          source={{ html: conteudo.html.head }}
          scrollEnabled={false}
        />
      )
    );
  }
}

const styles = StyleSheet.create({});
