import React from 'react';
import { ScrollView,
         View, 
         Text, 
         StyleSheet 
        } from 'react-native';

const EggsScreen = () => {
    return (
        <ScrollView style={EggsStyle.bg}>
            <View style={EggsStyle.view}>
                <Text style={EggsStyle.text}>Scrambled Eggs</Text>
                <Text style={EggsStyle.text}>Sunny Up Side Eggs</Text>
            </View>
        </ScrollView>
    )
};

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