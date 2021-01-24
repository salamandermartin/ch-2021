import React, { Component } from "react";
import "react-native-gesture-handler";
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput } from "react-native";

class InputScreen extends Component {

  render() {
    return (
      <View>
        <View style={styles_is.input_container}>
          <View style={styles_is.input}>
            <TextInput
              placeholder="Input your food here"
            />
          </View>
          <View style={styles_is.input}>
            <TextInput
              placeholder="Serving size"
            />
          </View>
        </View>
      </View>
    );
  }
};

export default InputScreen;

const styles_is = StyleSheet.create({
  input_container: {
    backgroundColor: "#D8D8D6",
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  input: {
    margin: 50,
    borderWidth: 5,
    borderRadius: 15,
    padding: 40,
  },
  text_input: {
    width: "auto",
  }
});
