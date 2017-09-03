import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common';
import LoginForm  from './components/LoginForm';
import { Input } from './components/common';


class App extends Component {
	state = { loggedIn: null };

	componentWillMount() {
		firebase.initializeApp({
	    apiKey:'AIzaSyBXr_HKV65n_HOnfmVUSK1kvnPXMRW2pRQ',
	    authDomain: 'auth-c1684.firebaseapp.com',
	    databaseURL: 'https://auth-c1684.firebaseio.com',
	    projectId: 'auth-c1684',
	    storageBucket: 'auth-c1684.appspot.com',
	    messagingSenderId: '372841138092'
		});

		//check if user is signed in or signed out(logged in or not logged in)
		firebase.auth().onAuthStateChanged((user) => {
			if (user) {
				this.setState({ loggedIn: true });
			} else {
				this.setState({loggedIn: false})
			}
		});
	}

	renderContent() {
		switch (this.state.loggedIn) {
			case true:
				return ( 
					<Button onPress={() => firebase.auth().signOut()}>
						Log Out
					</Button>
				);
			case false:
				return <LoginForm />;
			default:
			return <Spinner size="large" />;
		}
	}
	
	render() {
		return (
			<View>
				<Header headerText="Authentication" />
				{this.renderContent()}
			</View>
		);
	}
}


export default App;
