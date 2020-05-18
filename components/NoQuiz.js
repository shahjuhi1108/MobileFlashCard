import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'


class NoQuiz extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.header}>Sorry, you cannot take a quiz because there are no cards in the deck.</Text>
            </View>
        )
    }
}

export default NoQuiz

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 23,
    },
    header: {
        padding: 10,
        textAlign: 'center',
        fontSize: 50,
    },
})