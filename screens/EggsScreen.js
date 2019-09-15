import React, { Component } from 'react';
import { ScrollView, View, Text, StyleSheet, Button } from 'react-native';
import EggWhites from '../components/EggWhites';

class EggsScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pan: 'empty',
        }
    }
    
    changePan = (newPan) => {
        this.setState({ pan: newPan });
    }

    render() {
    return (
        <ScrollView>
            <EggWhites  usePan={this.state.pan}
                        alterPan={this.changePan}
            />
        </ScrollView>
    )
    };
}

const EggsStyle = StyleSheet.create({
    text: {
        color: 'white',
        marginLeft: 'auto',
    },
    bg: {
        backgroundColor: '#aa9500',
    },
    view: {
        backgroundColor: 'rgb(23, 154, 23)',
    },
});

export default EggsScreen;