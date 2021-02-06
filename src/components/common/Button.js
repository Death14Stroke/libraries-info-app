import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

const Button = ({ title, onPress }) => {
	return (
		<TouchableOpacity style={styles.buttonStyle} onPress={onPress}>
			<Text style={styles.textStyle}>{title}</Text>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	textStyle: {
		alignSelf: 'center',
		color: '#007aff',
		fontSize: 16,
		fontWeight: 'bold',
		paddingVertical: 10
	},
	buttonStyle: {
		flex: 1,
		alignSelf: 'stretch',
		backgroundColor: '#fff',
		borderRadius: 5,
		borderWidth: 1,
		borderColor: '#007aff',
		marginHorizontal: 5
	}
});

export { Button };
