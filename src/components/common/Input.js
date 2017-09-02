import React from 'react';
import { TextInput, View, Text } from 'react-native';
	
	//pass in label text as prop
	const Input = ({ label }) => {
		return(
			<View>
				<Text>{label}</Text>
			</View>
		);
	};




export { Input };
