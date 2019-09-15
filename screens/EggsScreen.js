import React, { Component } from 'react';
import { ScrollView, View, Text, StyleSheet, Button } from 'react-native';

class EggsScreen extends Component {

    state = {
        egg: 'scrambled',
    }

    render() {
    return (
        <ScrollView>
            <View>
                <Text>My brain is {this.state.egg}.</Text>
                <Button 
                    title="Cook me"
                    onPress={() => this.setState({ egg: 'fried' })}
                />
            </View>
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