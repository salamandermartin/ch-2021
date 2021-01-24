import React, { Component } from "react";
import "react-native-gesture-handler";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";

class ProfileScreen extends Component {
  state = {
    global_avg_comparison: '0%',
    app_avg_comparison:'0%',
  }
  global_avg_set = (percent) => {
    this.setState({ food : percent })
  }
  app_avg_set = (percent) => {
    this.setState({ food : percent })
  }

  render() {
    return (
      <View style={styles_ps.body}>
        <View style={styles_ps.top_percentages_container}>
          <Text style={styles_ps.top_percentages}></Text>

        </View>
      </View>
    );
  }
};

export default ProfileScreen;

const styles_ps = StyleSheet.create({
  body: {
    backgroundColor: '#D5B9B1',
    flexDirection: 'column',
  },
  top_percentages: {
    fontSize: 28,
    fontWeight: 'bold',
  },
})
