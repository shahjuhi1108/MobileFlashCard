import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Platform } from 'react-native'
import { black, white, red } from '../utils/colors'

class Scoreboard extends Component {
    render() {

        const { total, correct, goBack, goHome, startOver } = this.props

        return (
            <View style={styles.container}>
                <Text style={styles.header}>Your score is: {correct}/{total}</Text>
                <TouchableOpacity
                    onPress={() => {
                        startOver()
                    }}
                    style={styles.textButton}>
                    <Text style={{color: red, fontSize: 20}}> Start Over </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        goBack()
                    }}
                    style={Platform.OS === 'ios' ? styles.iosStartOverButton : styles.startOverButton}>
                    <Text style={styles.startOverButtonText}> Go Back </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        goHome()
                    }}
                    style={Platform.OS === 'ios' ? styles.iosGoHomeButton : styles.goHomeButton}>
                    <Text style={styles.goHomeButtonText}> Home Page </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default Scoreboard

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 23,
    },
    header: {
        padding: 20,
        textAlign: 'center',
        fontSize: 50,
    },
    startOverButton: {
        backgroundColor: white,
        borderColor: black,
        borderWidth: 2,
        padding: 20,
        paddingLeft: 30,
        paddingRight: 30,
        borderRadius: 2,
        marginBottom: 40,
        height: 45,
        width: 200,
        alignSelf: "center",
        justifyContent: "center",
        position: 'absolute',
        bottom: 80,
    },
    goHomeButton: {
        backgroundColor: black,
        padding: 20,
        paddingLeft: 30,
        paddingRight: 30,
        borderRadius: 2,
        marginBottom: 30,
        height: 45,
        width: 200,
        alignSelf: "center",
        justifyContent: "center",
        position: 'absolute',
        bottom: 30,
    },
    iosStartOverButton: {
        backgroundColor: white,
        borderColor: black,
        borderWidth: 2,
        padding: 20,
        paddingLeft: 30,
        paddingRight: 30,
        borderRadius: 7,
        marginBottom: 40,
        height: 45,
        width: 200,
        alignSelf: "center",
        justifyContent: "center",
        position: 'absolute',
        bottom: 80,
    },
    iosGoHomeButton: {
        backgroundColor: black,
        padding: 20,
        paddingLeft: 30,
        paddingRight: 30,
        borderRadius: 7,
        marginBottom: 30,
        height: 45,
        width: 200,
        alignSelf: "center",
        justifyContent: "center",
        position: 'absolute',
        bottom: 30,
    },
    startOverButtonText: {
        fontSize: 20,
        color: black,
        justifyContent: 'center',
        textAlign: 'center',
        color: black
    },
    goHomeButtonText: {
        fontSize: 20,
        color: black,
        justifyContent: 'center',
        textAlign: 'center',
        color: white
    },
    textButton: {
        padding: 10,
        paddingLeft: 30,
        paddingRight: 30,
        borderRadius: 2,
        marginBottom: 30,
        height: 45,
        alignSelf: "center",
        justifyContent: "center",
    },
})