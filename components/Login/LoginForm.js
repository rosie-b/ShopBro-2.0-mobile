import React, { Component } from 'react';
import { 
    View, 
    Text, 
    StyleSheet, 
    Image, 
    TextInput, 
    TouchableOpacity, 
    KeyboardAvoidingView, 
    StatusBar } from 'react-native';
import {createStore} from 'redux'
import { Connect } from 'redux'

const TYPE_USER_NAME = 'TYPE_USER_NAME';
const typeUsername = (text) => ({
    type: TYPE_USER_NAME,
    text
})

export default class LoginForm extends Component {
    constructor(props){
        super(props) 
            this.state = {
                user_name: '',
                password: '',
                pendingLoginRequest: false
            };
            // this.store = createStore((state, action) => {
            //     return{...state, user_name: action.text}
            // }, this.state)
    }
    render() {
        return (
            <View style={styles.container}>
              <StatusBar
                barStyle='light-content' //this is iOS specific
              />
                <TextInput 
                    placeholder='username'
                    placeholderTextColor='#85756E'
                    returnKeyType='next'
                    onSubmitEditing={() => this.passwordInput.focus()}
                    autoCorrect={false}
                    underlineColorAndroid='transparent'
                    style={styles.input}
                />
                <TextInput 
                    placeholder='password'
                    placeholderTextColor='#85756E'
                    returnKeyType='go'
                    secureTextEntry
                    underlineColorAndroid='transparent'
                    style={styles.input}
                    ref={(input) => this.passwordInput = input}
                />
                <TouchableOpacity style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>LOGIN</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    buttonContainer: {
        backgroundColor: '#85756E',
        paddingVertical: 15
    },
    buttonText: {
        textAlign: 'center',
        fontWeight: '700'
    },
    input: {
        height: 40,
        backgroundColor: 'rgba(255,255,255,0.2)',
        marginBottom: 10,
        color: 'black',
        paddingHorizontal: 10
    }
})