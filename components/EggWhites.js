import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';

class EggWhites extends Component {
    render() {
        return(
            <ScrollView>
                <Text>{this.props.usePan}</Text>
                <Button 
                    onPress={this.props.alterPan("theres an egg")}
                />
            </ScrollView>
        );
    }
}

export default EggWhites;