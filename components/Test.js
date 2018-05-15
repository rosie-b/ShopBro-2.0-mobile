import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, KeyboardAvoidingView } from 'react-native';
import { connect } from 'react-redux'

import { checkUserToken } from '../redux/actions'
import RootNavigation from '../navigation/RootNavigation'
import Login from './Login/Login'

class Test extends Component {
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         username: this.props.auth.user.user_name,
    //         password: this.props.auth.user.password
    //     }
    // }

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

//This styling below is important to have all the components flex to get the view we get.
//Without the styling below
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