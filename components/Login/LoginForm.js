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
import { WebBrowser } from 'expo'


class LoginForm extends Component {
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
        // console.log(e.target.name)
        this.setState({[e.target.name]: e.target.value})
    }

    submit(e) {
        console.log(this.state)
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
                    name='user_name'
                    placeholderTextColor='#85756E'
                    returnKeyType='next'
                    onSubmitEditing={() => this.passwordInput.focus()}
                    autoCorrect={false}
                    underlineColorAndroid='transparent'
                    style={styles.input}
                    onChangeText={(text) => this.setState({user_name: text})}
                />
                <TextInput 
                    placeholder='password'
                    placeholderTextColor='#85756E'
                    returnKeyType='go'
                    secureTextEntry
                    underlineColorAndroid='transparent'
                    style={styles.input}
                    ref={(input) => this.passwordInput = input}
                    onChangeText={(text) => this.setState({password: text})}
                />
                <TouchableOpacity style={styles.buttonContainer} onPress={this.submit}>
                    <Text style={styles.buttonText}>LOGIN</Text>
                </TouchableOpacity>
                <View style={styles.helpContainer}>
                    <TouchableOpacity onPress={this._handleRegister} style={styles.helpLink}>
                        <Text style={styles.helpLinkText}>Create a new account</Text>
                    </TouchableOpacity>
                </View>

            </View>
        )
    }
    _handleRegister = () => {
        WebBrowser.openBrowserAsync(
          'https://shopbro.herokuapp.com/#/register'
        );
      };
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
    },
    helpContainer: {
        marginTop: 15,
        paddingVertical: 15,
        alignItems: 'center',
      }
})

export default connect()(LoginForm)