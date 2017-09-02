import React, { Component } from 'react';
import { TextInput } from 'react-native';
import { Button, Card, CardSection } from './common';

//Text inputs have zero styling by default
// react holds the text 'state' outside of user input
class LoginForm extends Component {
	//initialize state object
	state = { text: ''};
	render() {
		return (
			<Card>
				<CardSection>
					<TextInput
						value={this.state.text}
						onChangeText={text => this.setState({ text })}
						style={{ height: 20, width: 100 }}
					/>
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
