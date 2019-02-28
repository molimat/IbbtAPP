import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";

export class Apresentacao extends Component {
  render() {
    const B = props => (
      <Text style={{ fontWeight: "bold" }}>{props.children}</Text> //PRA DEIXAR OS TEXTOS EM NEGRITO
    );
    return (
      <View>
        <View>
          <View style={styles.subtitleBG}>
            <Text style={styles.subtitle}>
              {" "}
              Somos uma comunidade de fé que deseja cumprir fielmente a sua
              missão.
            </Text>
          </View>
          <Text style={styles.text}>
            {"    "}Desde 1939, a IBBT escreve sua história sob a condução da
            graça divina. Semelhante ao povo de Israel na caminhada rumo à terra
            prometida, somos peregrinos e prosseguimos em frente. Somos uma
            comunidade de fé que deseja cumprir fielmente a sua missão no mundo,
            disposta a superar os obstáculos e a deixar um vibrante testemunho
            acerca do evangelho de Jesus Cristo.{"\n"}
            {"   "} Nossas ênfases continuam sendo evangelização e missões,
            ensino da Palavra, adoração e testemunho, fortalecimento das
            famílias, ação solidária em favor dos carentes e comunhão fraterna.{" "}
            {"\n"}
            {"   "} A caminho dos 80 anos, somos renovados e revigorados no amor
            de Deus e no poder do seu Espírito. A Ele seja toda a glória.
            {"\n"}
            {"\n"}
            <B>Pastor Carlos Novaes </B> - Assumiu o ministério da Igreja
            Batista de Barão da Taquara em 1998. Casado com Jussara, pai de
            Luisa e Laura, o Pr. Novaes também é professor do Seminário Batista
            do Sul do Brasil e já ocupou várias funções na denominação.
            {"\n"}
            {"\n"}
            <B> Corpo Diaconal </B> — Os diáconos da igreja são auxiliares do
            ministério pastoral no acompanhamento da membresia, em termos de
            visitação e aconselhamento, bem como nos ofícios da Ceia e do
            batismo, na participação efetiva de diversas Coordenadorias e na
            assessoria direta no tocante a decisões administrativas.
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  subtitle: {
    fontSize: 20,
    color: "#444",
    textAlign: "center", // <-- the magic
    fontWeight: "bold",
    width: 300,
    alignSelf: "center",
    margin: 15
  },

  subtitleBG: {
    backgroundColor: "#F3F3F3",
    height: 100
  },

  text: {
    fontSize: 14,
    color: "#777",
    textAlign: "justify", // <-- the magic
    width: 350,
    alignSelf: "center",
    margin: 10
  }
});
