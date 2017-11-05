import React from 'react';
import {
  AsyncStorage,
  ActivityIndicator,
  StyleSheet,
  View,
  Image,
  ScrollView,
  Dimensions,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { Actions, Scene, Router, ActionConst } from 'react-native-router-flux';

import { Form, Item, Spinner, Label, Text, Content, List, ListItem, Input, Switch, Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
import Video from 'react-native-video';

const video1 = require('../../assets/video/reactnative1.mp4');
const video2 = require('../../assets/video/reactnative2.mp4');
const video3 = require('../../assets/video/reactnative3.mp4');
const video4 = require('../../assets/video/reactnative4.mp4');
const { width, height } = Dimensions.get('window');

let videos = [
  {
    title : 'React Native Component',
    URI : video1
  },
  {
    title : 'How to buid React Native App?',
    URI : video2,
  },
  {
    title : 'Instruction to React Native',
    URI : video3
  },
  {
    title : 'React Native or Swift',
    URI : video4
  }
 ]
export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videosList : videos,
      videoURL : video1,   
      pauseState :  true,
      storyContent : '',
      isSplash : true,
      currentVideo : videos[0]
    }
  }

  componentWillMount(){
    setTimeout(()=>{
        this.setState({isSplash:false})
    },5000);
  }

  handleVideo(videoInfor, index){
    this.player.seek(0)
    this.setState({pauseState : true});
    this.setState({currentVideo : videoInfor});
    this.setState({videoURL : videoInfor.URI});
    this.setState({pauseState : false});
  }
  render() {
    return (
      this.state.isSplash == true ?
      <View style={{flex : 1, justifyContent : 'center', alignItems : 'center' }}>
        <Spinner color='#9952ce' />
      </View>
      :
      <View style={{flex :1 }}>
        <Header style={styles.headerContainer}>
          <Body style={{flex : 2, alignItems : 'center'}}>
            <Title style={styles.headerTitle}> Video List</Title>
          </Body>
        </Header>   

        <Container>
          <Content>
            <List>
            {
              this.state.videosList.map((eachVideo, index) => 
                <ListItem style={{marginLeft : 0}} key={index} onPress={() => this.handleVideo(eachVideo, index)}>
                  <Text style= { this.state.currentVideo == eachVideo ? styles.selectedItem : styles.listItem } > {index + 1}. {eachVideo.title}</Text>
                </ListItem>  
              )
            }
            </List>
          </Content>
        </Container>
        
        <View style={styles.videoContainer}>
          <Video
            ref={(ref) => {
              this.player = ref
            }}  
            repeat
            paused = {this.state.pauseState}
            //resizeMode="cover"
            source={this.state.videoURL}
            style={styles.backgroundVideo}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  ListItem:{
    borderWidth : 0,
    borderBottomWidth : 0
  },
  videoTitle: {
    marginTop : 10,
    textAlign : 'center',
    color : '#c1479a'
  },
  itemText:{
    fontSize : 20,
    letterSpacing : 10,
    color : 'rgba(0,0,0,1.0)'
  },
  headerContainer: {
    backgroundColor: '#9952ce',
  },
  splashContainer:{
    color: '#9952ce',
  },
  videoContainer : {
    width : '100%',
    height : 400,
  },
  listItem:{
    marginLeft : 0
  },
  selectedItem:{
    color : '#d8259f'
  },
  headerTitle: {
    color:'white'
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});