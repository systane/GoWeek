import React, { Component } from 'react';
import {FaSistrix} from 'react-icons/fa';
import {FiMessageCircle} from 'react-icons/fi';
import SidePainelWrapper from './SidePainelStyle';
import People from '@material-ui/icons/PeopleOutline'
import Twitter from '../../assets/twitter-logo.png';

export default class SidePainel extends Component {
    render() {
        return (
            <SidePainelWrapper>
                <img src={Twitter} alt="twitter"/>
                <div>
                    <span>
                        <FaSistrix color={'#ffffff'} style={{marginRight: 10}} size={30}/> Siga o que lhe interessa.
                    </span>
                </div>

                <div>
                    <span>
                        <People style={{width: 30, height: 30, marginRight: 10}} /> Saiba sobre o que as pessoas estão falando.
                    </span>
                </div>

                <div>
                    <span>
                        <FiMessageCircle color={'#ffffff'} style={{marginRight: 10}} size={30}/> Participe da conversa.
                    </span>
                </div>
            </SidePainelWrapper>
        );
    }
}