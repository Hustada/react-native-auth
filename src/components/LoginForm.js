import React, { Component } from 'react';
import { View, TextInput } from 'react-native';
import { Button, Card, CardSection } from './common';

//Text inputs have zero styling by default
class LoginForm extends Component {
	render() {
		return (
			<Card>
				<CardSection>
					<TextInput style={{ height: 20, width: 100 }}/>
				</CardSection>

				<CardSection />

				<CardSection>
					<Button>
						Login
					</Button>
				</CardSection>
			</Card>
		);
	}
}

export default LoginForm;
