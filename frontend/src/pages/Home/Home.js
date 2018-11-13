import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import HomeWrapper from './HomeStyle';

import SidePainel from '../../components/SidePainel/SidePainel';
import RightPainel from '../../components/RightPainel/RightPainel';

export default class Home extends Component {
    render() {
        let fullheight = {height: "100%", margin: 0, padding: 5};

        return (
            <HomeWrapper>
                <Grid
                    container
                    spacing={24}
                    justify="center"
                    alignItems="center"
                    style={fullheight}
                >
                    <Grid item md={6} style={fullheight}>
                        <SidePainel />
                    </Grid>
                    <Grid item md={6} style={fullheight}>
                        <RightPainel />
                    </Grid>
                </Grid>
            </HomeWrapper>
        );
    }
}