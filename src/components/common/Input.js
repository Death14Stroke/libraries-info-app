import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const Input = ({
	label,
	value,
	onChangeText,
	placeholder,
	secureTextEntry = false
}) => {
	return (
		<View style={styles.containerStyle}>
			<Text style={styles.labelStyle}>{label}</Text>
			<TextInput
				style={styles.inputStyle}
				value={value}
				onChangeText={onChangeText}
				autoCorrect={false}
				autoCapitalize='none'
				placeholder={placeholder}
				secureTextEntry={secureTextEntry}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	inputStyle: {
		color: '#000',
		paddingHorizontal: 5,
		fontSize: 18,
		lineHeight: 23,
		flex: 2
	},
	labelStyle: {
		fontSize: 18,
		paddingLeft: 20,
		flex: 1
	},
	containerStyle: {
		height: 40,
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center'
	}
});

export { Input };
