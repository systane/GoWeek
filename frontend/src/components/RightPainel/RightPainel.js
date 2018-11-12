import React, { Component } from 'react';
import twitterLogo from '../../twitter.svg';
import { Link } from 'react-router-dom';

export default class RightPainel extends Component {
    render() {
        return (
            <div>
                <img src={twitterLogo} alt="GoTwitter" />
                <Link to="/Login">Entrar</Link>
                <h1>Veja o que está acontecendo no mundo agora</h1>
                
                <span>Participe hoje do Twitter.</span>

                {/* <Link>Inscreva-se</Link> */}
                <Link to="/Login">Entrar</Link>
            </div>
        );
    }
}