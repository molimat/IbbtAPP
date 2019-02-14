import React, { Component } from "react";
import { Text, View, StyleSheet, FlatList, SafeAreaView } from "react-native";

import axios from "axios"; //devocionais categoria 28

import Mensagem from "../components/Mensagem";

export default class Podcasts extends Component {
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
      <SafeAreaView style={styles.container}>
        <View>
          <Text>Podcasts</Text>
          <FlatList
            style={styles.flatlist}
            data={this.state.devocional}
            numColumns={2}
            keyExtractor={devocional => devocional.id.toString()} // é uma property que precisa retornar cada id unique para evitar problemas.
            renderItem={({ item }) => <Mensagem conteudo={item} />} //Aqui é o item que vai ser de fato mostrado
          />
        </View>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF"
  }
});
