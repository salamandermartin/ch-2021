import React from "react";
import "react-native-gesture-handler";
import { StyleSheet, Text, View, TouchableOpacity, Image, ImageBackground} from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{backgroundColor:'white',}}>
      <ImageBackground source= {require('./img/backgroundHomeScreen.png')}
        style={{flexDirection: 'column',}}>

      <View style={styles.container}>
        <View style={styles.logo}>
        <Image source={require('./img/logo.png')}
          style= {{height: 250, width: 250,}} />
          <Text style={styles.logo_text}> Carbon Foodprint </Text>
        </View>
        <TouchableOpacity
          onPress = {() =>
            navigation.navigate('Profile')}
            >
          <View style= {styles.fp_btn_profile}>
            <Image source={require('./img/profile.png')}
              style={{height: 100, width: 100,}}/>
            <Text style={styles.button_text}> Check your profile! </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress = {() =>
            navigation.navigate('Record')}
          >
          <View style={styles.fp_btn_record}>
          <Image source={require('./img/record.png')}
            style={{height:100, width: 100,}} />
            <Text style={styles.button_text}>Record your Food</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress = {() =>
            navigation.navigate('Search')}
          >
          <View style={styles.fp_btn_search}>
          <Image source = {require('./img/search.png')}
            style = {{height:100, width: 100,}} />
            <Text style={styles.button_text}> Search for Food </Text>
          </View>
        </TouchableOpacity>
      </View>
      </ImageBackground>
    </View>
  );
};
export default HomeScreen;


const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
    flexDirection: "column",
  },
  logo: {
    alignSelf: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  logo_text: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'green',
  },
  fp_btn_profile:{
    backgroundColor: '#A4BDBE',
    alignItems: "center",
    alignSelf: "center",
    margin: 15,
    width: '35%',
    borderWidth: 5,
    borderRadius: 10,
    flexDirection: 'row',
    padding: 32,
  },
  fp_btn_record:{
    backgroundColor: "#D5B9B1",
    alignItems: "center",
    alignSelf: "center",
    margin: 15,
    width: '35%',
    borderWidth: 5,
    borderRadius: 10,
    flexDirection: 'row',
    padding: 32,
  },
  fp_btn_search:{
    backgroundColor: "#457373",
    alignSelf: 'center',
    alignItems: "center",
    margin: 15,
    width: '35%',
    borderWidth: 5,
    borderRadius: 10,
    flexDirection: 'row',
    padding: 32,
  },
  button_text: {
    fontSize: 25,
    color: 'white',
  }

});
