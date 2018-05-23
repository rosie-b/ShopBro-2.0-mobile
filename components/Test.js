import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, KeyboardAvoidingView } from 'react-native';
import { connect } from 'react-redux'

import { checkUserToken } from '../redux/actions'
import RootNavigation from '../navigation/RootNavigation'
import Login from './Login/Login'

class Test extends Component {

    componentDidMount(){
        this.props.dispatch(checkUserToken())
    }
    
    render() {
    
    return (
        <View style={styles.container} >
            {this.props.auth.isAuthenticated ? <RootNavigation /> : <Login />} 
        </View>
    );
  }
}

//This styling below is important to have all the components flex to get the view we get when looking at our app in production.
//Without the styling below, the page will not render properly.
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
  });


function mapStateToProps(state){
    console.log('test', state)
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps)(Test)