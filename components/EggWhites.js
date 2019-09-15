import React, { Component } from 'react';
import { Text, View, ScrollView, Button, TextInput } from 'react-native';

class EggWhites extends Component {
    render() {
        return(
            <ScrollView>
                <Text>{this.props.usePan}</Text>
                <TextInput 
                    placeholder="What do you want to replace the above text with?"
                    onChangeText={(text) => this.props.alterPan(text)}
                    ref={input => {this.textInput = input}}
                />
            </ScrollView>
        );
    }
}

export default EggWhites;