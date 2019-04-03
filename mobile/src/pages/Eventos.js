import React, { Component } from "react";
import { Text, StyleSheet, View, FlatList } from "react-native";

import axios from "axios";
import { Calendar, LocaleConfig } from "react-native-calendars";

import Evento from "../components/Evento";

export default class Eventos extends Component {
  state = {
    eventos: []
  };

  async componentDidMount() {
    const response = await axios.get(
      "https://ibbt.org.br/wp-json/tribe/events/v1/events"
    );

    this.setState({ eventos: response.data.events });
    //LocaleConfig.defaultLocale = "pt";
  }
  render() {
    return (
      <View>
        <FlatList
          style={styles.flatlist}
          data={this.state.eventos}
          keyExtractor={eventos => eventos.id.toString()} // é uma property que precisa retornar cada id unique para evitar problemas.
          renderItem={({ item }) => <Evento conteudo={item} />} //Aqui é o item que vai ser de fato mostrado
        />
        <Calendar disableMonthChange={true} hideArrows={true} />
      </View>
    );
  }
}

const styles = StyleSheet.create({});
