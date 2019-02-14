import React, { Component } from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import { WebView } from "react-native-webview";

export default class Devocional extends Component {
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
        <Text
          style={{
            fontSize: 20,
            marginLeft: 10,
            marginBottom: 5,
            marginTop: 5,
            fontWeight: "bold"
          }}
        >
          {conteudo.title.rendered}
        </Text>
        <Image
          style={{ height: 150, width: "100%" }}
          source={{
            uri:
              conteudo.better_featured_image.media_details.sizes.medium_large
                .source_url
          }}
        />
        <WebView
          originWhitelist={["*"]}
          automaticallyAdjustContentInsets={false}
          style={{ height: 100, backgroundColor: "#FFF" }}
          source={{ html: conteudo.excerpt.rendered }}
          scrollEnabled={false}
          onLoadEnd={this.setLoaded}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    height: 350,
    flexDirection: "column",
    justifyContent: "space-around",
    marginBottom: 20,
    elevation: 5
  }
});
