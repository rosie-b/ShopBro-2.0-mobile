import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, KeyboardAvoidingView } from 'react-native';
import LoginForm from './LoginForm'
import { connect } from 'react-redux'

class Login extends Component {
    
    render() {
    console.log('here I am')
        return (
        <KeyboardAvoidingView behavior='padding' style={styles.container}>
            <View style={styles.logoContainer}>
                <Image 
                    style={styles.logo}
                    source={require('../../assets/images/144.png')}
                />

                <Text style={styles.title}>Making sure you stick to your budget and smash your savings goals!</Text>
            </View>
            <View style={styles.formContainer}>
                <LoginForm />
            </View>
        </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: '#f4bf44'
    },
    logoContainer: {
        alignItems: 'center',
        flexGrow: 1, 
        justifyContent: 'center'
    },
    title: {
        color: '#383D3B',
        marginTop: 10,
        width: 160,
        textAlign: 'center',
        opacity: 0.9
    },
    logo: {
        width: 100,
        height: 100
    }
});


export default connect()(Login)