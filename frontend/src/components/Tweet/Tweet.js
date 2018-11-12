import React, { Component } from 'react';

import like from '../../like.svg';
import TweetWrapper from './TweetStyle.js';
import api from '../../services/api';

export default class Tweet extends Component {


    handleLike = async (event) => {
        const { _id } = this.props.tweet;

        await api.post(`likes/${_id}`);
    }

    render() {
        const { tweet } = this.props;

        return (
            <TweetWrapper>
                <strong>{tweet.author}</strong>
                <p>{tweet.content}</p>
                <button type="button" onClick={this.handleLike}>
                    <img src={like} alt="Like" />
                    {tweet.likes}
                </button>
            </TweetWrapper>
        );
    }
}

