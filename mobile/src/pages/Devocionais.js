import React, { Component } from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";

import axios from "axios"; //devocionais categoria 28

import Devocional from "../components/Devocional";

export default class Devocionais extends Component {
  state = {
    devocional: []
  };

  async componentDidMount() {
    const response = await axios.get(
      "https://ibbt.org.br/wp-json/wp/v2/posts/?categories=48"
    );
    this.setState({ devocional: response.data });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Devocionas</Text>
        {this.state.devocional.map(d => {
          <Text>{d.id}</Text>;
        })}
        <FlatList
          data={this.state.devocional}
          keyExtractor={devocional => devocional.id} // é uma property que precisa retornar cada id unique para evitar problemas.
          renderItem={({ item }) => <Devocional conteudo={item} />} //Aqui é o item que vai ser de fato mostrado
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF"
  }
});
