import React, { Component } from 'react';
import api from '../../services/api';
import socket from 'socket.io-client';

import twitterLogo from '../../assets/twitter.svg';
import TimelineWrapper from './TimelineStyle';

import Tweet from '../../components/Tweet/Tweet';

export default class Timeline extends Component {
    constructor() {
        super();
        this.state = {
            tweets: [],
            newTweet: ''
        };
    }

    async componentDidMount() {
        this.subscribeToEvents();

        const response = await api.get('tweets');

        this.setState({ tweets: response.data });
    }

    subscribeToEvents = () =>{
        const io = socket('http://localhost:3000');

        io.on('tweet', data => {
            this.setState({tweets: [data, ...this.state.tweets]}); //... sinal do spread operator do ES6
        });


        io.on('like', data => {
            this.setState({tweets: this.state.tweets.map(tweet =>(
                tweet._id === data._id ? data : tweet
            ))})
        });
    }

    handleNewTweet = async (event) => {
        if (event.keyCode !== 13) return;

        const content = this.state.newTweet;
        const author = localStorage.getItem('username');

        console.log(api);
        await api.post('tweets', { content, author });

        this.setState({ newTweet: '' });
    }

    handleInputChange = (event) => {
        this.setState({ newTweet: event.target.value });
    }

    render() {
        return (
            <TimelineWrapper>
                <img height={24} src={twitterLogo} alt="GoTwitter}" />
                <form>
                    <textarea
                        value={this.state.newTweet}
                        placeholder="O que está acontecendo?"
                        onChange={this.handleInputChange}
                        onKeyDown={this.handleNewTweet} />
                </form>
                <ul className="tweet-list">
                    {
                        this.state.tweets.map(tweet => (
                            <Tweet key={tweet._id} tweet={tweet} />
                        ))
                    }
                </ul>
            </TimelineWrapper>
        );
    }
}