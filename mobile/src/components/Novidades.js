import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";

import { Tile, Overlay } from "react-native-elements";

import { Apresentacao } from "./Apresentacao";

export class Novidades extends Component {
  constructor() {
    super();
    this.state = {
      isVisible: false
    };
  }

  openOverlay = async () => {
    this.setState({ isVisible: true });
  };

  render() {
    return (
      <View>
        <Overlay
          isVisible={this.state.isVisible}
          width="auto"
          height="auto"
          onBackdropPress={() => this.setState({ isVisible: false })}
        >
          <Apresentacao />
        </Overlay>

        <Tile
          imageSrc={require("../images/fotos.jpg")}
          title="FOTOS"
          height={100}
          titleStyle={styles.tileTitle}
          containerStyle={styles.tileContainer}
          featured
        />
        <Tile
          imageSrc={require("../images/igreja.jpg")}
          title="A IGREJA"
          height={100}
          titleStyle={styles.tileTitle}
          containerStyle={styles.tileContainer}
          featured
          onPress={() => this.openOverlay()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  subtitle: {},
  tileTitle: { fontSize: 80 },
  tileContainer: { marginBottom: 5 },
  text: {}
});
