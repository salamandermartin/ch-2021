import React, { Component } from "react";
import "react-native-gesture-handler";
import { StyleSheet, Text, View, TouchableOpacity, Image, ImageBackground, TextInput } from "react-native";

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
        <ImageBackground source = {require('./img/record_background.png')}>
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
        <View style={styles_is.history}>
        <Text style={styles_is.history_header}> Food History </Text>
        <View
          style={{
            borderBottomColor: 'black',
            borderBottomWidth: 1,
          }}
        />
        </View>
        </ImageBackground>
      </View>
    );
  }
};

export default InputScreen;

const styles_is = StyleSheet.create({
  input_container: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  input: {
    margin: 50,
    borderWidth: 5,
    borderRadius: 15,
    padding: 30,
  },
  text_input: {
    width: "auto",
  },
  enter_btn: {
    backgroundColor: '#b6d1c7',
    padding: 20,
    borderRadius: 20,
  },
  enter_txt: {
    color: '#138f51',
    fontSize: 25,
  },
  history: {
    backgroundColor: '#bae0d4',
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    padding: 30,
    marginTop: 10,
  },
  history_header: {
    fontSize: 26,
    padding: 10,
  }
});
