import React, { Component } from 'react'
import { Text, View, Image, StyleSheet, TouchableHighlight } from 'react-native'
import * as Colors from '../config/Colors';
import Logo from '../../assets/galaxy.png';
import UnderlineTextField from '../components/textfields/UnderlineTextField';
import NextButton from '../components/buttons/NextButton';

export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHidden: true,
      togglerColor: 'gray'
    }
  }
  onSubmit = () => {
    alert("Submit pressed")
  }
  onSignup = () => {
    alert("Sign up pressed")
  }
  onTogglePassword = () => {
    this.setState({
      isHidden: !this.state.isHidden,
      togglerColor: this.state.isHidden ? 'white' : 'gray'
    })
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.top}>
          <Image source={Logo} />
          <Text style={styles.welcome}>Login</Text>
        </View>
        <View style={styles.form}>
          <UnderlineTextField
            keyboardType='email-address'
            placeholder="Email Address"
            input='email'
          />
          <UnderlineTextField
            keyboardType='default'
            placeholder="Password"
            input='password'
            onTogglePress={this.onTogglePassword}
            isHidden={this.state.isHidden}
            togglerColor={this.state.togglerColor}
          />
        </View>
        <NextButton handleOnPress={this.onSubmit}/>
        <View style={styles.signup}>
          <Text style={styles.signupText}>Don't Have An Account? </Text>
          <TouchableHighlight onPress={this.onSignup}>
            <Text style={styles.signupClickable}>
              Sign Up!
            </Text>
          </TouchableHighlight>
        </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {

    backgroundColor: `${Colors.GuestBackground}`,
    display: 'flex',
    flex: 1,
    padding: 20
  },
  top: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    marginTop: 70,
    justifyContent: 'space-between'
  },
  welcome: {
    fontSize: 20,
    letterSpacing: 3,
    color: `${Colors.GuestText}`,
    fontWeight: '300',
    marginBottom: 40,
  },
  form: {
    marginTop: 40 
  },
  loginButton: {
    position: 'absolute',
    bottom: 0,
    right: 0
  },
  signup: {
    flex: 1,
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 16,
  },
  signupText: {
    color: `${Colors.GuestText}`,
  },
  signupClickable: {
    color: `${Colors.GuestClickable}`,
    textDecorationLine: 'underline'
  }
})