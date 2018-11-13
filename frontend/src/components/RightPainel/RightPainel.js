import React, { Component } from 'react';
import twitterLogo from '../../twitter.svg';
import {RightPainelWrapper, LoginLinkStyled, SubscriveLinkStyled} from './RightPainelStyle';
import Grid from '@material-ui/core/Grid';

export default class RightPainel extends Component {
    render() {
        return (
            <RightPainelWrapper>
                <Grid
                    container
                    spacing={24}
                    justify="center"
                    alignItems="center"
                >
                    <Grid item md={6}>
                        <img src={twitterLogo} alt="GoTwitter" />
                    </Grid>
                    <Grid item md={6}>
                        <LoginLinkStyled to="/Login">Entrar</LoginLinkStyled>
                    </Grid>
                </Grid>
                <h1>Veja o que está acontecendo no mundo agora</h1>
                <h2>Participe hoje do Twitter.</h2>
                <SubscriveLinkStyled to="/">Inscreva-se</SubscriveLinkStyled>
                <LoginLinkStyled to="/Login">Entrar</LoginLinkStyled>
            </RightPainelWrapper>
        );
    }
}