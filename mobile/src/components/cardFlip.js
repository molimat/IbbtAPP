/*  <CardFlip style={styles.container} ref={card => (this.card = card)}>
        <View style={styles.cardContainer}>
          <HTML
            style={styles.titleText}
            html={conteudo.title.rendered}
            baseFontStyle={{
              fontSize: 25,
              color: "#FFF",
              fontWeight: "bold"
            }}
            containerStyle={{
              marginLeft: 10
            }}
          />
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.playButton}
              onPress={() => this.card.flip()}
            >
              <Icon name="playcircleo" size={45} color="#FFF" />
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <Player URL={this.getURL(conteudo.content.rendered)} />
          <TouchableOpacity
            style={styles.cardContainer}
            onPress={() => this.card.flip()}
          >
            <Text>{this.getURL(conteudo.content.rendered)}</Text>
          </TouchableOpacity>
        </View>
      </CardFlip> */
