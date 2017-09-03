import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSection, Input, Spinner } from './common';

//Text inputs have zero styling by default
// react holds the text 'state' outside of user input
//define onButtonPress method
// always rerender components by using component level state
// if user both fails to sign in and create a new user then show error

class LoginForm extends Component {
	//initialize state object
	state = { email: '', password: '', error: '', loading: false };
	
	onButtonPress() {
		const { email, password } = this.state; // pass in email and password

		this.setState({ error: '', loading: true }); //set this to empty object, loading true

		firebase.auth().signInWithEmailAndPassword(email, password).then(this.onLoginSuccess.bind(this)).catch(() => {
			firebase.auth().createUserWithEmailAndPassword(email, password).then(this.onLoginSuccess.bind(this)).catch(this.onLoginFail.bind(this));
		}); //catch errors
	}

onLoginFail() {
	this.setState({error: 'Authentication Failed', loading: false });
}

	onLoginSuccess() {
		this.setState({ 
			email: '',
			password: '',
			loading: false,
			error: ''
		});
	}

	renderButton() {
		if (this.state.loading) {
			return <Spinner size="small"/>;
		}

		return (
			<Button onPress={this.onButtonPress.bind(this)}>
				Login
			</Button>
		);
	}

	render() {
		return (
			<Card>
				<CardSection>
					<Input
						placeholder="example@gmail.com"
						label="Email"
						value={this.state.email}
						onChangeText={email => this.setState({ email })}
					/>
				</CardSection>

				<CardSection>
				<Input
					secureTextEntry
					placeholder="password"
					label="Password"
					value={this.state.password}
					onChangeText={password => this.setState({ password })}
				/>
				</CardSection>

				
				<Text style={styles.errorTextStyle}>
					{this.state.error}
				</Text>

				<CardSection>
					{this.renderButton()}
				</CardSection>
			</Card>
		);
	}
}

const styles = {
	errorTextStyle: {
		fontSize: 20,
		alignSelf: 'center',
		color: 'red'
	}
}

export default LoginForm;
