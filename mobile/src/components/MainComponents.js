import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Platform,
  Linking
} from "react-native";

import InfoIcons from "react-native-vector-icons/FontAwesome5";

export class Slider extends Component {
  render() {
    return (
      <View>
        <Text> Slider </Text>
      </View>
    );
  }
}

export class Infos extends Component {
  openInMaps() {
    const scheme = Platform.select({
      ios: "maps:0,0?q=",
      android: "geo:0,0?q="
    });
    const lat = "-22.8974171";
    const lng = "-43.3530273";
    const latLng = `${lat},${lng}`;
    const label = "Igreja Batista de Barão da Taquara";
    const url = Platform.select({
      ios: `${scheme}${label}@${latLng}`,
      android: `${scheme}${latLng}(${label})`
    });

    Linking.openURL(url);
  }
  render() {
    return (
      <View>
        <View>
          <Text style={styles.title}> Contato </Text>
        </View>
        <View style={styles.contatoContainer}>
          <View style={styles.contatoItems}>
            <Text style={styles.subTitle}> Fale Conosco </Text>
            <View>
              <TouchableOpacity
                style={styles.contatoItem}
                onPress={() => {
                  Linking.openURL("tel:2137987084");
                }}
              >
                <InfoIcons name="phone" size={12} color={"#5DA46F"} />
                <Text style={{ marginLeft: 5, marginBottom: 10 }}>
                  +55 21 37987084{" "}
                </Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={styles.contatoItem}
              onPress={() => {
                Linking.openURL("mailto:secretaria@ibbt.org.br");
              }}
            >
              <InfoIcons
                name="envelope-open-text"
                size={12}
                color={"#5DA46F"}
              />
              <Text style={{ marginLeft: 5 }}> secretaria@ibbt.org.br</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.address}>
            <Text style={styles.subTitle}> Visite-nos </Text>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.addressText}>
                Praça Seca, 32 - Jacarépaguá (Rio de janeiro - RJ)
              </Text>
              <TouchableOpacity
                style={styles.maps}
                onPress={() => {
                  this.openInMaps();
                }}
              >
                <InfoIcons
                  style={{ alignSelf: "center" }}
                  name="map-marked-alt"
                  size={34}
                  color={"#5DA46F"}
                />
                <Text
                  style={{ fontSize: 12, color: "#999", alignSelf: "center" }}
                >
                  Abrir no maps
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    paddingBottom: 5,
    paddingLeft: 10
  },
  subTitle: {
    fontSize: 16,
    fontWeight: "bold",
    paddingBottom: 5
  },
  contatoContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignContent: "center"
  },
  maps: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    margin: 10
  },

  contatoItems: {
    flex: 1,
    margin: 5,
    paddingLeft: 15
  },
  contatoItem: {
    flexDirection: "row",
    paddingLeft: 5
  },
  address: {
    flex: 1,
    marginRight: 5
  },
  addressText: {
    flex: 1,
    borderRightWidth: 0.5
  }
});
