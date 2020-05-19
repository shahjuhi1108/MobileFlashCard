import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Platform } from 'react-native'
import { purple } from '../utils/colors'
import { connect } from 'react-redux'
import { handleSaveCard } from '../actions/index'


class AddCard extends Component {

    state = {
        question: '',
        answer: ''
    }
    
    handlePress = (event) => {
        event.preventDefault()

        const { name, dispatch, navigation } = this.props

        dispatch(handleSaveCard(name, this.state.question, this.state.answer))

        this.setState(() => ({
            question: '',
            answer: '',
        }))

        navigation.goBack()
    }

    render() {

        return (
            <View  style={styles.container}>
                <View>
                    <TextInput style={styles.input}
                        underlineColorAndroid="transparent"
                        placeholder="Question"
                        value={this.state.question}
                        onChangeText={question => this.setState({ question })}
                        placeholderTextColor="#808080"
                        autoCapitalize="sentences" />
                    <TextInput style={styles.input}
                        underlineColorAndroid="transparent"
                        placeholder="Answer"
                        value={this.state.answer}
                        onChangeText={answer => this.setState({ answer })}
                        placeholderTextColor="#808080"
                        autoCapitalize="sentences" />
                </View>
                <TouchableOpacity
                    disabled={!this.state.question || !this.state.answer}
                    style={Platform.OS === 'ios' ? styles.iosSubmitButton : styles.submitButton}
                    onPress={this.handlePress}
                    >
                    <Text style={styles.submitButtonText}> Submit </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

function mapStateToProps(state, ownProps) {

    const { name } = ownProps.route.params

    return {
        name,
    }
}


export default connect(mapStateToProps)(AddCard)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50,
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
        marginBottom: 50,
        paddingLeft: 30,
        paddingRight: 30,
        borderRadius: 2,
        height: 45,
        alignSelf: "center",
        justifyContent: 'center',
        position: 'absolute',
        bottom: 0,
    },
    iosSubmitButton: {
        backgroundColor: purple,
        padding: 10,
        marginBottom: 50,
        paddingLeft: 30,
        paddingRight: 30,
        borderRadius: 7,
        height: 45,
        alignSelf: "center",
        justifyContent: 'center',
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