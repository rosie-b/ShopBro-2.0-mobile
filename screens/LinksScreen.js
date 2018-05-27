import { ExpoLinksView } from '@expo/samples';

import React, { Component } from 'react';
import { Platform, View, Text, StyleSheet, Image, KeyboardAvoidingView, ScrollView, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { logoutUser } from '../redux/actions/logout'

class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'ShopBro 2.0',
  };

  render() {
    return (
      <View style={styles.container}>
            <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
            <View style={styles.welcomeContainer}>
                <TouchableOpacity style={styles.buttonContainer} onPress={() => this.props.dispatch(logoutUser())}>
                    <Text style={styles.buttonText}>
                        Logout
                    </Text>
                </TouchableOpacity>
            </View>
            </ScrollView>

            <View style={styles.welcomeContainer}>
                <Text>This will be the main app</Text>
                {/* {this.props.totalsavings} */}
            </View>

        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  buttonText: {
      textAlign: 'center',
      fontWeight: '700'
  },
  buttonContainer: {
      backgroundColor: '#85756E',
      paddingVertical: 10,
      paddingHorizontal: 5,
  }
});


const mapStateToProps = (state) => {
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps)(LinksScreen)