import React, { Component } from "react";
import { Text, View } from "react-native";

import posts from "../services/api"; //devocionais categoria 28

export default class Mensagens extends Component {
  state = {
    mensagem: []
  };

  async componentDidMount() {
    const response = await posts.get("categories=48");
    this.setState({ mensagem: response.data });
  }

  render() {
    return (
      <View>
        <Text> {this.state.mensagem} </Text>
      </View>
    );
  }
}
