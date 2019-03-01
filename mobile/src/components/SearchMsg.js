import React, { Component } from "react";
import { Text, View } from "react-native";

import { SearchBar } from "react-native-elements";

export default class SearchMsg extends React.Component {
  state = {
    search: ""
  };

  updateSearch = search => {
    this.setState({ search });
  };

  render() {
    const { search } = this.state;

    return (
      <SearchBar
        placeholder="O que você quer ouvir?"
        onChangeText={this.updateSearch}
        value={search}
        showLoading
        searchIcon={{ color: "#CCC" }}
        containerStyle={{
          backgroundColor: "#5DA46F",
          borderBottomColor: "transparent",
          borderTopColor: "transparent"
        }}
        inputContainerStyle={{ backgroundColor: "#5DA46F", borderWidth: 0 }}
        inputStyle={{ color: "white" }}
        placeholderTextColor="#CCC"
      />
    );
  }
}
