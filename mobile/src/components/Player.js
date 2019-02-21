/* AudioPlayer.onEnd(() => {
  console.log('on end');
});

const URL = 'http://sample.com/sample.mp3';

const callback = () => {
  AudioPlayer.play();
    
  AudioPlayer.getDuration((duration) => {
    console.log(duration);
  });
  setInterval(() => {
    AudioPlayer.getCurrentTime((currentTime) => {
      console.log(currentTime);
    });
  }, 1000);
}

AudioPlayer.prepare(URL, callback); */

import React, { Component } from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";

import AudioPlayer from "react-native-play-audio";

export default class Player extends Component {
  play = () => {
    AudioPlayer.play();
  };

  pause = () => {
    AudioPlayer.stop();
  };

  async componentDidMount() {
    const callback = () => {
      AudioPlayer.getDuration(duration => {
        console.log(duration);
      });
      setInterval(() => {
        AudioPlayer.getCurrentTime(currentTime => {
          console.log(currentTime);
        });
      }, 1000);
    };
    const { URL } = this.props;
    await AudioPlayer.prepare(URL, callback);
  }

  render() {
    return (
      <View>
        <Text> Now playing </Text>
        <TouchableOpacity onPress={this.play}>
          <Text> Play </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.pause}>
          <Text> Pause </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

/* const styles = StyleSheet.create({}) */
