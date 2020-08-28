import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, TouchableOpacity } from 'react-native';
import Slider from '@react-native-community/slider'
import Moment from 'moment';
import { FontAwesome5 } from '@expo/vector-icons'

export default class App extends React.Component {
  state = {
    trackLength: 200,
    timeLapsed: '0:00',
    timeRemaining: '3:49'
  }

  changeTime = seconds => {
    this.setState({ timeElapsed: Moment.utc(seconds * 1000).format('m:ss') });
    this.setState({ timeRemaining: Moment.utc((this.state.trackLength - seconds) * 1000).format('m:ss')})
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={{alignItems: 'center'}}>
          <View style={{alignItems: 'center', marginTop: 24}}>
            <Text style={[styles.textLight, {fontSize: 12}]}>ABAZ PLAYLIST</Text>
            <Text style={[styles.text, { fontSize: 15, fontWeight: '500', marginTop: 8 }]}>
              Subscribe to Here 👈
            </Text>
          </View>
  
          <View style={styles.coverContainer}>
            <Image source={require('./assets/musicart.jpg')} style={styles.cover} />
          </View>
  
          <View style={{alignItems: 'center', marginTop: 32}}>
            <Text style={[styles.textDark, {fontSize: 20, fontWeight: '500'}]}> Music 💜 Is LIFE 😍 </Text>
            <Text style={[styles.text, {fontSize: 16, marginTop: 8}]}>Abaz Udosen</Text>
          </View>
  
        </View>
        
        <View style={{margin: 32}}>
            <Slider 
              minimumValue={0} 
              maximumValue={this.state.trackLength} 
              trackStyle={styles.track} 
              thumbStyle={styles.thumb} 
              minimumTrackTintColor='#93a8b3'
              onValueChange={seconds => this.changeTime(seconds)}
            ></Slider>
            <View style={{marginTop: -12, flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={[styles.textLight, styles.timeStamp]}>{this.state.timeElapsed}</Text>
              <Text style={[styles.textLight, styles.timeStamp]}>{this.state.timeRemaining}</Text>
            </View>
          </View>

          <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 20}}>
            <TouchableOpacity>
              <FontAwesome5 name='backward' size={32} color="#93a8b3"></FontAwesome5>
            </TouchableOpacity>
            <TouchableOpacity style={styles.playButtonContainer}>
              <FontAwesome5 name='play' size={32} color="#3d425c" style={[styles.playButton, {marginLeft: 8}]}></FontAwesome5>
            </TouchableOpacity>
            <TouchableOpacity>
              <FontAwesome5 name='forward' size={32} color="#93a8b3"></FontAwesome5>
            </TouchableOpacity>
          </View>
      </SafeAreaView>
    );
  } 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eaeaec',
  },
  textLight: {
    color: '#b6b7bf'
  },
  text: {
    color: '#8e97a6'
  },
  textDark: {
    color: '#3d425c'
  },
  coverContainer: {
    marginTop: 32,
    width: 250,
    height: 250,
    shadowColor: '#5d3f6a',
    shadowOffset: {height: 15},
    shadowRadius: 8,
    shadowOpacity: 0.3
  },
  cover: {
    width: 250,
    height: 250,
    borderRadius: 125
  },
  track: {
    height: 2,
    borderRadius: 1,
    backgroundColor: '#fff'
  },
  thumb: {
    width: 8,
    height: 8,
    backgroundColor: '#3d425c'
  },
  timeStamp: {
    fontSize: 11,
    fontWeight: '500'
  },
  playButtonContainer: {
    backgroundColor: '#fff',
    borderColor: 'rgba(93, 63, 106, 0.2)',
    borderWidth: 16,
    width: 128,
    height: 128,
    borderRadius: 64,
    alignItems: 'center', 
    justifyContent: 'center',
    marginHorizontal: 32,
    shadowColor: '#5d3f6a',
    shadowRadius: 30,
    shadowOpacity: 0.5
  },
  playButton: {

  }
});