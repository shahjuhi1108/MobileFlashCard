import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Platform } from 'react-native'
import { purple } from '../utils/colors'
import { connect } from 'react-redux'
import { handleAddDeck } from '../actions/index'

class AddDeck extends Component {

    state = {
        deckName: '',
    }

    handlePress = (event) => {
        event.preventDefault()

        const { dispatch, navigation } = this.props

        dispatch(handleAddDeck(this.state.deckName))

        navigation.navigate('Deck', { name: this.state.deckName })

        this.setState({
            deckName: ''
        })

    }

    render() {

        return (
            <View style={styles.container}>
                <Text style={styles.header}>What is the title of your new deck?</Text>
                <Text>{JSON.stringify(this.state.newValue)}</Text>
                <TextInput style={styles.input}
                    underlineColorAndroid="transparent"
                    placeholder="Deck Title"
                    placeholderTextColor="#808080"
                    value={this.state.deckName}
                    onChangeText={deckName => this.setState({ deckName })}
                    autoCapitalize="sentences" />
                <TouchableOpacity
                    disabled={!this.state.deckName}
                    onPress={this.handlePress}
                    style={Platform.OS === 'ios' ? styles.iosSubmitButton : styles.submitButton}>
                    <Text style={styles.submitButtonText}> Create Deck </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default connect()(AddDeck)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 23,
    },
    header: {
        padding: 10,
        textAlign: 'center',
        fontSize: 40,
    },
    input: {
        padding: 5,
        margin: 15,
        height: 40,
        borderColor: purple,
        borderWidth: 1,
        borderRadius: 2,
    },
    submitButton: {
        backgroundColor: purple,
        padding: 10,
        paddingLeft: 30,
        paddingRight: 30,
        borderRadius: 2,
        marginTop: 30,
        marginBottom: 30,
        height: 45,
        alignSelf: "center",
        justifyContent: "center",
    },
    iosSubmitButton: {
        backgroundColor: purple,
        padding: 10,
        paddingLeft: 30,
        paddingRight: 30,
        borderRadius: 7,
        marginTop: 30,
        marginBottom: 30,
        height: 45,
        alignSelf: "center",
        justifyContent: "center",
    },
    submitButtonText: {
        fontSize: 20,
        justifyContent: 'center',
        textAlign: 'center',
        color: 'white'
    }
})
