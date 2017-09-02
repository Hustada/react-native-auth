import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';


class App extends Component {
	componentWillMount() {
		firebase.initializeApp({
	    apiKey:'AIzaSyBXr_HKV65n_HOnfmVUSK1kvnPXMRW2pRQ',
	    authDomain: 'auth-c1684.firebaseapp.com',
	    databaseURL: 'https://auth-c1684.firebaseio.com',
	    projectId: 'auth-c1684',
	    storageBucket: 'auth-c1684.appspot.com',
	    messagingSenderId: '372841138092'
		});
	}
	render() {
		return (
			<View>
			<Header headerText="Authentication" />
				<Text>Something</Text>
			</View>
		);
	}
}


export default App;
