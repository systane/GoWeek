import React, { Component } from 'react';

import SidePainel from '../../components/SidePainel/SidePainel';
import RightPainel from '../../components/RightPainel/RightPainel';

export default class Home extends Component {
    render() {
        return (
            <div>
                <SidePainel />
                <RightPainel />
            </div>
        );
    }
}