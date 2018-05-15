import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { WebBrowser } from 'expo';
import { connect } from 'react-redux';
import { MonoText } from '../components/StyledText';
import {logoutUser} from '../redux/actions/logout';
import TotalSavings from '../components/TotalSavings'


class HomeScreen extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      username: this.capitalize(this.props.auth.user.user_name)
    }
    this.capitalize = this.capitalize.bind(this)
  }

  static navigationOptions = {
    header: null,
  };

  componentWillReceiveProps(nextProps) {
    this.setState({username: this.capitalize(nextProps.auth.user.user_name) })
  }
  
  capitalize(username) {
    //put the if statement here for state
    if (typeof username === 'string') {
    return username.charAt(0).toUpperCase() + username.slice(1)
    } else {
      return ''
    }
  }


  render() {




    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.welcomeContainer}>
            <Image
              source={
                __DEV__
                  ? require('../assets/images/144.png')
                  : require('../assets/images/144.png')
              }
              style={styles.welcomeImage}
            />
            <TouchableOpacity onPress={() => this.props.dispatch(logoutUser())}>
              <Text>
                Logout
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.getStartedContainer}>
            {this._maybeRenderDevelopmentModeWarning()}
            <Text style={styles.getStartedText}>Kia ora {this.state.username}!</Text>

            {/* <View style={[styles.codeHighlightContainer, styles.homeScreenFilename]}>
              <MonoText style={styles.codeHighlightText}>screens/HomeScreen.js</MonoText>
            </View> 
            SHOPBRO TEAM: Please leave this code.  It will be handy to refer to as we build*/}

            <TotalSavings />
          </View>

          {/* <View style={styles.helpContainer}>
            <TouchableOpacity onPress={this._handleRegister} style={styles.helpLink}>
              <Text style={styles.helpLinkText}>Create a new account</Text>
            </TouchableOpacity>
          </View>
          SHOPBRO TEAM: Please leave this code.  This is how you will create a hyperlink in React Native. */}
        </ScrollView>

        <View style={styles.tabBarInfoContainer}>
          <Text style={styles.tabBarInfoText}>This application is in development</Text>

          <View style={[styles.codeHighlightContainer, styles.navigationFilename]}>
            <MonoText style={styles.codeHighlightText}>Watch this space, there is more to come!</MonoText>
          </View>
        </View>
      </View>
    );
  }

  _maybeRenderDevelopmentModeWarning() {
    if (__DEV__) {
      const learnMoreButton = (
        <Text onPress={this._handleLearnMorePress} style={styles.helpLinkText}>
          Learn more
        </Text>
      );

      return (
        <Text style={styles.developmentModeText}>
          Development mode is enabled, your app will be slower but you can use useful development
          tools. {learnMoreButton}
        </Text>
      );
    } else {
      return (
        <Text style={styles.developmentModeText}>
          You are not in development mode, your app will run at full speed.
        </Text>
      );
    }
  }

  _handleLearnMorePress = () => {
    WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/guides/development-mode');
  };

  _handleRegister = () => {
    WebBrowser.openBrowserAsync(
      'https://shopbro.herokuapp.com/#/register'
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
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
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps)(HomeScreen)