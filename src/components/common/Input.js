import React from 'react';
import { TextInput, View, Text } from 'react-native';
	
	//pass in label text as prop
	const Input = ({ label, value, onChangeText }) => {
		return(
			<View>
				<Text>{label}</Text>
				<TextInput
					value={value}
					onChangeText={onChangeText}
					style={{ height: 20, width: 20 }}
				/>
			</View>
		);
	};




export { Input };
