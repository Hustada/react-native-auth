import React, { Component } from 'react';
import { Button, Card, CardSection, Input } from './common';

//Text inputs have zero styling by default
// react holds the text 'state' outside of user input
class LoginForm extends Component {
	//initialize state object
	state = { text: ''};
	render() {
		return (
			<Card>
				<CardSection>
					<Input
						label="Email"
						value={this.state.text}
						onChangeText={text => this.setState({ text })}
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
