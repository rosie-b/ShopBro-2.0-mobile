import React from 'react'
import {connect} from 'react-redux'
// import {navigate} from '../redux/actions/navigate'
// import {addBudget} from '../redux/actions/budget'
import { 
    View, 
    StyleSheet,
    TextInput,
    TouchableOpacity,
    StatusBar,
    ScrollView, 
    Text } from 'react-native'
// import validateCostInput from './utils/costsInput'


class BudgetSettings extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            budget: '',
            messageCost: '',
            valid: true
        }
        this.updateBudget = this.updateBudget.bind(this)
        // this.handlesubmit = this.handleSubmit.bind(this)
    }

    updateBudget(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    //updateBudget entirely concerned with component's state (sets budget in local state)

    // handleSubmit(e) {
    //     e.preventDefault()
    //     let budget = this.state.budget*100
    //     //validate that budget value is not a negative number before sending to props

    //         let checkValid = validateCostInput(budget)

    //         this.setState({
    //             messageCost : checkValid.messagecost,
    //             valid : checkValid.valid
    //         })
    //         console.log("checking if valid: ", checkValid, checkValid.valid)
    //         if(checkValid.valid) {
    //             this.props.dispatch(addBudget(budget))
    //             this.props.dispatch(navigate('budget'))
    //         }

    // }

    //interacts with redux state: adds budget from components state to redux global state and navigates to budget page

    render() {
        return (
            <View>
            <View style={styles.container}>
                <TextInput
                    placeholder='set your budget'
                    name='budget'
                    placholderTextColor='#85756E'
                    returnKeyType='go'
                    onSubmitEditing={() => this.passwordInput.focus()}
                    autoCorrect={false}
                    underlineColorAndroid='transparent'
                    style={styles.input}
                    onChangeText={(text) => this.setState({budget: text})}
                />
            </View>
            <View style={styles.helpContainer}>
                <TouchableOpacity style={styles.buttonContainer} onPress={this.handleSubmit}>
                    <Text style={styles.helpLinkText}>Save!</Text>
                </TouchableOpacity>
            </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
    //   flex: 1,
      backgroundColor: '#f4bf44',
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
});

export default BudgetSettings