import React, { Component } from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import { Tile } from "react-native-elements";
import { withNavigation } from "react-navigation";

class Devocional extends Component {
  state = {
    loading: true
  };

  setLoaded = () => {
    this.setState({ loading: false });
  };

  openDevocionais = () => {};

  render() {
    const { conteudo } = this.props;

    return (
      <View style={styles.container}>
        <Tile
          imageSrc={{
            uri:
              conteudo.better_featured_image.media_details.sizes.medium_large
                .source_url
          }}
          title={conteudo.title.rendered}
          height={150}
          titleStyle={styles.tileTitle}
          containerStyle={styles.tileContainer}
          featured
          onPress={() =>
            this.props.navigation.navigate("DevocionalPage", {
              title: conteudo.title.rendered,
              image:
                conteudo.better_featured_image.media_details.sizes.medium_large
                  .source_url,
              content: conteudo.content.rendered,
              author: conteudo.author,
              date: conteudo.date
            })
          }
        />
      </View>
    );
  }
}

export default withNavigation(Devocional);

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "space-around",
    marginBottom: 10,
    marginBottom: 10,
    elevation: 5
  }
});
