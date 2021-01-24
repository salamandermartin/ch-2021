import React from "react";
import "react-native-gesture-handler";
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput} from "react-native";

const InputScreen = ({ navigation }) => {
  return (
    <View>
      <View style={styles_is.input_container}>
        <View>
        <TextInput
          placeholder = "Input your food here"
          />
        </View>
        <View>
        <TextInput
          placeholder = "Serving size"
          />
        </View>
      </View>
    </View>
  );
};

export default InputScreen;

const styles_is = StyleSheet.create({
    input_container: {
      backgroundColor: "#D8D8D6",
      flexDirection: 'column',
      justifyContent: 'space-around',
    },
    input: {
      alignItems:'center',

    }
});
