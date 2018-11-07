import React, { Component } from 'react';


import twitterLogo from '../twitter.svg';
import './Login.css';


export default class Login extends Component {

    constructor() {
        super();
        this.state = {
            username: ''
        }
    }

    handleInputChange = (event) => {
        this.setState({ username: event.target.value });
    }

    handleSubmit = (event) => {
        event.preventDefault();

        const { username } = this.state;

        if (!username.length) return;

        localStorage.setItem('username', username);

        this.props.history.push('/timeline'); //redireciona o usuário para a prox página. Todo componente que está no react-router-dom tem acesso a propriedade history
    }

    render() {
        return (
            <div className="login-wrapper">
                <img src={twitterLogo} alt="GoTwitter" />
                <form onSubmit={this.handleSubmit}>
                    <input
                        placeholder="Nome de usuário"
                        value={this.state.username}
                        onChange={this.handleInputChange}
                    />
                    <button type="submit">Entrar</button>
                </form>
            </div>
        );
    }
}