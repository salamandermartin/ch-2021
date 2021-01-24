import React, { Component } from "react";
import "react-native-gesture-handler";
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput } from "react-native";

class InputScreen extends Component {
  state = {
    food : '',
    serving : ''
  }
  handleFood = (text) => {
    this.setState({ food : text })
  }
  handleServing = (text) => {
    this.setState( { serving : text })
  }

  render() {
    return (
      <View>
        <View style={styles_is.input_container}>
          <View style={styles_is.input}>
            <TextInput
              placeholder="Input your food here"
              onChangeText = {this.handleFood}
            />
          </View>
          <View style={styles_is.input}>
            <TextInput
              placeholder="Serving size"
              onChangeText= {this.handleServing}
            />
          </View>
          <TouchableOpacity
             onPress = {this.handleServing}
             >
           <View style={styles_is.enter_btn}>
           <Text style={styles_is.enter_txt}> Enter </Text>
           </View>
          </TouchableOpacity>
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
