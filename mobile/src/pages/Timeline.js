import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import socket from 'socket.io-client';
import { 
    View, 
    Text,
    TouchableOpacity,
    StyleSheet,
    FlatList 
} from 'react-native';

import api from '../services/api';

import Tweet from '../components/Tweet';

export default class Timeline extends Component {
    static navigationOptions = ({navigation}) => ({
        title: "inicio",
        headerRight:(
            <TouchableOpacity onPress={() => navigation.navigate('New')}>
                <Icon
                    style={{marginRight: 20}}
                    name="add-circle-outline"
                    size={24}
                    color="#4BB0EE"
                />
            </TouchableOpacity>
        ),
    });
 
    state = {
        tweets: []
    };

    async componentDidMount(){
        this.subscribeToEvents();

        const response = await api.get("tweets");

        this.setState({tweets: response.data});
    };

    subscribeToEvents = () =>{
        const io = socket('http://10.0.3.2:3000');

        io.on('tweet', data => {
            this.setState({tweets: [data, ...this.state.tweets]}); //... sinal do spread operator do ES6
        });


        io.on('like', data => {
            this.setState({tweets: this.state.tweets.map(tweet =>(
                tweet._id === data._id ? data : tweet
            ))})
        });
    }


    render() {
        return (
            <View style={styles.container}>
                <FlatList 
                    data={this.state.tweets}
                    keyExtractor={tweet => tweet._id}
                    renderItem={({item}) => <Tweet tweet={item}/>}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#FFF"
    }
  });
  