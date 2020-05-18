import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import { purple } from '../utils/colors'
import { connect } from 'react-redux'
import { handleAddDeck } from '../actions/index'
import { addDeck } from '../utils/api'
import Deck from '../components/Deck'



class AddDeck extends Component {

    state = {
        deckName: '',
        toNextPage: false,
    }

    handlePress = (event) => {
        event.preventDefault()

        const { dispatch } = this.props

        dispatch(handleAddDeck(this.state.deckName))

        this.setState(() => ({
            toNextPage: true,
        }))

    }

    render() {

        const { navigation } = this.props

        debugger

        if(this.state.toNextPage === true) {
            navigation.navigate('Deck', {name: this.state.deckName})
            return null
        }

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
                    onPress={this.handlePress}
                    style={styles.submitButton}>
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
        position: 'absolute',
        bottom: 0,
    },
    submitButtonText: {
        fontSize: 20,
        justifyContent: 'center',
        textAlign: 'center',
        color: 'white'
    }
})

//Make changes for ios and android based buttons - lookwise.