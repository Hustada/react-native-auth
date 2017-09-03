import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSection, Input } from './common';

//Text inputs have zero styling by default
// react holds the text 'state' outside of user input
//define onButtonPress method
// always rerender components by using component level state
// if user both fails to sign in and create a new user then show error

class LoginForm extends Component {
	//initialize state object
	state = { email: '', password: '', error: '' };
	
	onButtonPress() {
		const { email, password } = this.state; // pass in email and password

		this.setState({ error: '' }); //set this to empty object

		firebase.auth().signInWithEmailAndPassword(email, password).catch(() => {
			firebase.auth().createUserWithEmailAndPassword(email, password).catch(() => {
				this.setState({ error: 'Authentication Failed.' });
			});
		}); //catch errors
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
					<Button onPress={this.onButtonPress.bind(this)}>
						Login
					</Button>
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
