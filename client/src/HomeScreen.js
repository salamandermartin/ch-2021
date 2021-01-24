import React from "react";
import "react-native-gesture-handler";
import { StyleSheet, Text, View, TouchableOpacity, Image} from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{backgroundColor: "#D8D8D6",}}>
      <TouchableOpacity
        onPress = {() =>
          navigation.navigate('Profile')}
          >
        <View style= {{alignItems:"center",}}>
          <Image source={require('./img/logo.png')}
            style= {{width: 300, height: 300,}}/>
          <Text> Check your profile! </Text>
        </View>
      </TouchableOpacity>

      <View style={styles.container}>

        <TouchableOpacity
          onPress = {() =>
            navigation.navigate('Record')}
          >
          <View style={styles.fp_btn}>
          <Image source={require('./img/record.png')}
            style= {{width: 50, height: 50,}}/>
            <Text>Record your Food</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress = {() =>
            navigation.navigate('Search')}
          >
          <View style={styles.fp_btn}>
          <Image source={require('./img/search.png')}
            style= {{width: 50, height: 50,}}/>
            <Text> Search for Food </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default HomeScreen;


const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: "column",
    justifyContent: "flex-end",

  },
  fp_btn:{
    alignItems: "center",
    margin: 30,
    width: "auto",
    height: "auto",
    borderWidth: 5,
    borderRadius: 20,
  },

});
