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

import { connect } from 'react-redux'
import { loginUser } from '../../redux/actions'


export default class LoginForm extends Component {
    constructor(props){
        super(props) 
            this.state = {
                user_name: '',
                password: '',
            };
            this.updateDetails = this.updateDetails.bind(this)
            this.submit = this.submit.bind(this)
    }

    updateDetails(e) {
        this.setState({[e.target.name]: e.target.value})
    }

    submit(e) {
        e.preventDefault()
        let {user_name, password} = this.state
        this.props.dispatch(loginUser({user_name, password}))
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
                    onChange={this.updateDetails}
                />
                <TextInput 
                    placeholder='password'
                    placeholderTextColor='#85756E'
                    returnKeyType='go'
                    secureTextEntry
                    underlineColorAndroid='transparent'
                    style={styles.input}
                    ref={(input) => this.passwordInput = input}
                    onChange={this.updateDetails}
                />
                <TouchableOpacity style={styles.buttonContainer} onSubmit={this.submit}>
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

// export default connect()(LoginForm)