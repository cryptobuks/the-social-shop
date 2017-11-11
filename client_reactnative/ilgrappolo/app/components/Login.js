import React from 'react';
import {connect} from 'react-redux';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity
} from 'react-native';

import {loginUser, signupUser, addAlert} from '../actions';


var Login = React.createClass({
  getInitialState() {
  	return {
  		email: "",
  		password: "",
      name: "",
      surname: "",
  		emailErrorSignIn: "",
  		passwordErrorSignIn: "",
      emailErrorSignUp: "",
      passwordErrorSignUp: "",
      nameError: "",
      surnameError: "",
      loading: false
  	}
  },

  onSignIn: function() {
  	var {email, password} = this.state;
    var {dispatch} = this.props;

    if(this.validateSignIn()) {
      this.setState({
        loading: true
      });

      dispatch(loginUser(email, password)).then(() => {
        this.setState({
          loading: false
        });
      });
    }
  	
  },

  onSignUp: function() {
    var {email, password, name, surname} = this.state;
    var {dispatch} = this.props;

    if(this.validateSignUp()) {

      this.setState({
        loading: true
      });

      dispatch(signupUser(email, password, name, surname)).then(() => {
        this.setState({
          loading: false
        });
      });

    } 
    
  },

  validateSignUp: function() {
    this.setState({
      emailErrorSignUp: "",
      passwordErrorSignUp: "",
      nameError: "",
      surnameError: ""

    });

    if(!this.state.email) {
      this.setState({
          emailErrorSignUp: "Inserisci una E-Mail valida. "
        });
    }
    if(!this.state.password) {
      this.setState({
          passwordErrorSignUp: "Inserisci una password."
        });
    }

    if(!this.state.name) {
      this.setState({
          nameError: "Inserisci un nome. "
        });
    }
    if(!this.state.surname) {
      this.setState({
          surnameError: "Inserisci un cognome. "
        });
    }

    if(this.state.email && this.state.password && this.state.name && this.state.surname) {
      return true;
    } else {
      return false;
    }
  },

  validateSignIn: function() {
    this.setState({
  		emailErrorSignIn: "",
  		passwordErrorSignIn: "",

  	});

  	if(!this.state.email) {
  		this.setState({
     			emailErrorSignIn: "Inserisci una E-Mail valida. "
     		});
  	}
  	if(!this.state.password) {
  		this.setState({
     			passwordErrorSignIn: "Inserisci una password."
     		});
  	}

    if(this.state.email && this.state.password) {
      return true;
    } else {
      return false;
    }
  },

  render() {
  	var renderError = (error) => {
  		if(error != "") {
  			return (
  				<Text style={styles.formError}>
  					{error}
  				</Text>
  			)
  		}
  	}

    if(this.state.loading) {
      return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>
            Loading...
          </Text>
        </View>
      )

    } else {
      return (
        <View style={styles.container}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>
              IlGrappolo
            </Text>
          </View>
          <View style={styles.field}>
            <TextInput 
              value={this.state.email}
              autoCapitalize='none'
              autoCorrect={false} 
              autoFocus={true} 
              keyboardType='email-address'
              returnKeyType='done'
              onChangeText={(text) => {
                this.setState({
                  email: text
                });
              }}
              placeholder='Email'
              style={styles.textInput} 
            />
            <View>
              {renderError(this.state.emailErrorSignIn)}
            </View>
          </View>
          <View style={styles.field}>
            <TextInput 
              value={this.state.password}
              returnKeyType='done'
              autoCapitalize='none'
              autoCorrect={false} 
              secureTextEntry={true}
              onChangeText={(text) => {
                this.setState({
                  password: text,
                });
              }}
              placeholder='Password'
              style={styles.textInput} 
            />
            <View>
              {renderError(this.state.passwordErrorSignIn)}
            </View>
          </View>


          <View style={styles.buttonsContainer}>
            <TouchableOpacity onPress={this.onSignIn}>
              <Text style={styles.button}>
                Accedi
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.divisor}>

            <Text style={styles.divText}>
                Oppure
            </Text>

          </View>



          <View style={styles.field}>
            <TextInput 
              value={this.state.name}
              autoCapitalize='words'
              autoCorrect={false} 
              autoFocus={true} 
              returnKeyType='done'
              onChangeText={(text) => {
                this.setState({
                  name: text
                });
              }}
              placeholder='Nome'
              style={styles.textInput} 
            />
            <View>
              {renderError(this.state.nameError)}
            </View>
          </View>

          <View style={styles.field}>
            <TextInput 
              value={this.state.surname}
              autoCapitalize='words'
              autoCorrect={false} 
              autoFocus={true} 
              returnKeyType='done'
              onChangeText={(text) => {
                this.setState({
                  surname: text
                });
              }}
              placeholder='Cognome'
              style={styles.textInput} 
            />
            <View>
              {renderError(this.state.surnameError)}
            </View>
          </View>
          <View style={styles.field}>
            <TextInput 
              value={this.state.email}
              autoCapitalize='none'
              autoCorrect={false} 
              autoFocus={true} 
              keyboardType='email-address'
              returnKeyType='done'
              onChangeText={(text) => {
                this.setState({
                  email: text
                });
              }}
              placeholder='Email'
              style={styles.textInput} 
            />
            <View>
              {renderError(this.state.emailErrorSignUp)}
            </View>
          </View>
          <View style={styles.field}>
            <TextInput 
              value={this.state.password}
              returnKeyType='done'
              autoCapitalize='none'
              autoCorrect={false} 
              secureTextEntry={true}
              onChangeText={(text) => {
                this.setState({
                  password: text,
                });
              }}
              placeholder='Password'
              style={styles.textInput} 
            />
            <View>
              {renderError(this.state.passwordErrorSignUp)}
            </View>
          </View>


          <View style={styles.buttonsContainer}>
            <TouchableOpacity onPress={this.onSignUp}>
              <Text style={styles.button}>
                Registrati
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    }
  }

});



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    backgroundColor: '#4A001F'
  },
  titleContainer: {
  	padding: 10,
  	paddingTop: 20,
  	marginBottom: 10,
  	justifyContent: 'space-around',
  	alignItems: 'center',
  	backgroundColor: '#4A001F' 
  },
  title: {
  	color: '#FDFDFF',
  	fontSize: 30
  },
  field: {
  	padding: 12,
  	paddingLeft: 16,
  	borderRadius: 8,
  	margin: 6,
  	marginTop: 0,
  	backgroundColor: '#FDFDFF'
  },
  buttonsContainer: {
  	padding: 20,
    paddingBottom: 10,
  	justifyContent: 'space-around',
  	alignItems: 'center',
  	flexDirection: 'row' 
  },
  button: {
  	color: '#FDFDFF',
  	fontSize: 30

  },
  formError: {
  	color: 'red'
  },
  divisor: {
    marginBottom: 10,
    backgroundColor: '#4A001F',
    padding: 15,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row' 
  },
  divText: {
    color: '#FDFDFF',
    fontSize: 14
  }
});




module.exports = connect()(Login);