import React, { Component } from "react";
import "react-native-gesture-handler";
import { StyleSheet, Text, View, TouchableOpacity, Image, ImageBackground } from "react-native";

class ProfileScreen extends Component {
  state = {
    global_avg_comparison: '0%',
    app_avg_comparison:'0%',
    food1: ['10%', 'nuts'],
    food2: ['20%', 'berries'],
    food3: ['30%', 'meat'],
    food4: ['40%', 'beans'],
    food5: ['50%', 'cake'],
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
      <ImageBackground source = {require('./img/profile_background.png')}>
        <View style={styles_ps.top_percentages_container}>
          <View>
          <View style={styles_ps.percentage_container}>
            <Text style={styles_ps.top_percentages}>{this.state.global_avg_comparison}</Text>
            <Text style = {styles_ps.small_txt}> less emission {"\n"} than global average </Text>
          </View>
          <View style={styles_ps.percentage_container}>
            <Text style={styles_ps.top_percentages}>{this.state.app_avg_comparison}</Text>
            <Text style = {styles_ps.small_txt}> less emission {"\n"} than other users </Text>
          </View>
          </View>
          <Image source={require('./img/environment.png')}
            style = {{height: 100, width: 100, marginRight: 70}}/>
        </View>
        <View style = {styles_ps.suggestion_txt_container}>
          <Text> Looking to improve your score? </Text>
          <Text style={{textDecorationLine: 'underline'}}> Check out these low carbon emission recipes. </Text>
        </View>
      </ImageBackground>
        <View style = {styles_ps.analysis}>
          <Text style = {styles_ps.analysis_header}> Analysis </Text>
          <Text style = {styles_ps.analysis_subheader}> Last 7 Days </Text>
          <View style = {styles_ps.graph}>
            <View style = {styles_ps.graph_key}>
              <View style = {styles_ps.graph_key_elem}>
                <View style =
                  {{width: 8, height: 8, backgroundColor: 'red'}} />
                <Text> {this.state.food1[1]} </Text>
              </View>
              <View style = {styles_ps.graph_key_elem}>
                <View style =
                  {{width: 8, height: 8, backgroundColor: 'blue'}} />
                <Text> {this.state.food2[1]} </Text>
              </View>
              <View style = {styles_ps.graph_key_elem}>
                <View style =
                  {{width: 8, height: 8, backgroundColor: 'green'}} />
                <Text> {this.state.food3[1]} </Text>
              </View>
              <View style = {styles_ps.graph_key_elem}>
                <View style =
                  {{width: 8, height: 8, backgroundColor: 'purple'}} />
                <Text> {this.state.food4[1]} </Text>
              </View>
              <View style = {styles_ps.graph_key_elem}>
                <View style =
                  {{width: 8, height: 8, backgroundColor: 'yellow'}} />
                <Text> {this.state.food5[1]} </Text>
              </View>
            </View>
          </View>

          <View style = {styles_ps.break_down}>
            <Text style = {{fontSize: 19,}}> Breakdown </Text>
            <View style = {styles_ps.break_down_text}>
              <Text style={styles_ps.food_text1}> Category </Text>
              <Text style={styles_ps.food_text2}> Percent </Text>
            </View>
            <View style = {styles_ps.break_down_text}>
              <Text style={styles_ps.food_text1}> {this.state.food1[1]} </Text>
              <Text style={styles_ps.food_text2}> {this.state.food1[0]} </Text>
              <View style = {styles_ps.line} />
            </View>
            <View style = {styles_ps.break_down_text}>
              <Text style={styles_ps.food_text1}> {this.state.food2[1]} </Text>
              <Text style={styles_ps.food_text2}> {this.state.food2[0]} </Text>
            </View>
            <View style = {styles_ps.break_down_text}>
              <Text style={styles_ps.food_text1}> {this.state.food3[1]} </Text>
              <Text style={styles_ps.food_text2}> {this.state.food3[0]} </Text>
            </View>
            <View style = {styles_ps.break_down_text}>
              <Text style={styles_ps.food_text1}> {this.state.food4[1]} </Text>
              <Text style={styles_ps.food_text2}> {this.state.food4[0]} </Text>
            </View>
            <View style = {styles_ps.break_down_text}>
              <Text style={styles_ps.food_text1}> {this.state.food5[1]} </Text>
              <Text style={styles_ps.food_text2}> {this.state.food5[0]} </Text>
            </View>
          </View>
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
  top_percentages_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  top_percentages: {
    fontSize: 28,
    fontWeight: 'bold',
    padding: 18,
  },
  small_txt: {
    marginTop: 7,
  },
  percentage_container: {
    flexDirection: 'row',
  },
  suggestion_txt_container: {
    marginLeft: 6,
  },
  analysis: {
    padding: 20,
    backgroundColor: 'beige',
    borderTopLeftRadius: -40,
    borderTopRightRadius: 180,
  },
  analysis_header: {
    fontSize: 24,
  },
  analysis_subheader: {
    fontSize: 14,
    color: 'gray',
    marginLeft: 5,
  },
  graph: {
    height: 350,
    flexDirection: 'row',
  },
  graph_key: {
    margin: 15,
  },
  graph_key_elem: {
    flexDirection: 'row',
    marginBottom: 7,
  },
  break_down: {
    padding: 10,
    marginLeft: 5,
    backgroundColor: 'white',
    borderWidth: 2,
    borderRadius: 20,
  },
  break_down_text: {
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'space-around',
  },
  line: {
    height: 1,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
  food_text1: {
    align: 'left',
  },
  food_text2: {
    align: 'right',
  }
})
