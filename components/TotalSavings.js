import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, KeyboardAvoidingView, ScrollView, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { logoutUser } from '../redux/actions/logout'
import {getShoppingListTotals} from '../redux/actions/shoppinglisttotals'

class TotalSavings extends Component {

  componentDidMount() {
    this.props.dispatch(getShoppingListTotals())
  }

  

    render() {
        return (
        <View style={styles.container}>
            <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
                <View>
                  {console.log(this.props)}
                    <Text style={styles.getStartedText}>You have saved: ${this.props.dashboardShoppingListTotals[0] && (this.props.dashboardShoppingListTotals[0].totalsavings/100).toFixed(2)}</Text>
                </View>
            </ScrollView>
        </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      paddingHorizontal: 10
    },
    contentContainer: {
      paddingTop: 10,
      paddingBottom: 10,
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
    tabBarInfoText: {
      fontSize: 17,
      color: 'rgba(96,100,109, 1)',
      textAlign: 'center',
    },
    navigationFilename: {
      marginTop: 5,
    },
  });


  const mapStateToProps = (state) => {
     return{
         auth: state.auth,
         dashboardShoppingListTotals: state.dashboardShoppingListTotals
     }
}

export default connect(mapStateToProps)(TotalSavings)
