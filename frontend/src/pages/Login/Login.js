import React, { Component } from 'react';


import twitterLogo from '../../twitter.svg';
import FormLoginWrapper from './LoginFormStyle'


export default class Login extends Component {

    constructor() {
        super();
        this.state = {
            name: '',
            password: ''
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();

        const { name } = this.state;

        if (!name.length) return;

        localStorage.setItem('username', name);

        this.props.history.push('/timeline'); //redireciona o usuário para a prox página. Todo componente que está no react-router-dom tem acesso a propriedade history
    }

    handleInputChange(inputName, event) {
        var propertyToUpdate = {};
        propertyToUpdate[inputName] = event.target.value;
        this.setState(propertyToUpdate);
    }

    render() {
        return (
            <FormLoginWrapper>
                <img src={twitterLogo} alt="GoTwitter" />
                <form onSubmit={this.handleSubmit}>
                    <input
                        placeholder="Nome de usuário"
                        value={this.state.name}
                        onChange={this.handleInputChange.bind(this, 'name')}
                    />
                    <input
                        type="password"
                        value={this.state.password}
                        onChange={this.handleInputChange.bind(this, 'password')}
                    />
                    <button type="submit">Entrar</button>
                </form>
            </FormLoginWrapper>
        );
    }
}