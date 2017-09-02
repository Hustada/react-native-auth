import React, { Component } from 'react';
import { Button, Card, CardSection, Input } from './common';

//Text inputs have zero styling by default
// react holds the text 'state' outside of user input
class LoginForm extends Component {
	//initialize state object
	state = { email: ''};
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
