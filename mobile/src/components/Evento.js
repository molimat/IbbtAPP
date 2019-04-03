import React, { Component } from "react";
import { Text, StyleSheet, View, Image } from "react-native";

class Evento extends Component {
  state = {
    loading: true
  };

  setLoaded = () => {
    this.setState({ loading: false });
  };

  render() {
    const { conteudo } = this.props;

    return (
      <View style={styles.container}>
        <Text>{conteudo.id}</Text>
        <Text>FLATLIST ITEM</Text>
      </View>
    );
  }
}

export default Evento;

const styles = StyleSheet.create({
  container: {
    height: 100,
    backgroundColor: "#333"
  }
});
