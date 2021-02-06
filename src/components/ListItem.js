import React, { Component, useContext, useEffect, useRef } from 'react';
import {
	Text,
	TouchableWithoutFeedback,
	StyleSheet,
	View,
	LayoutAnimation,
	UIManager,
	Platform
} from 'react-native';
import { CardSection } from './common';
import { Context as TechContext } from '../context/TechContext';
import { withContext } from '../context/createDataContext';

if (
	Platform.OS === 'android' &&
	UIManager.setLayoutAnimationEnabledExperimental
) {
	UIManager.setLayoutAnimationEnabledExperimental(true);
}

class ListItem extends Component {
	componentWillUpdate() {
		LayoutAnimation.spring();
	}

	renderDescription() {
		const {
			library: { id, description },
			state: { selectedLibraryId }
		} = this.props;

		const expanded = showDescription(id, selectedLibraryId);

		return expanded ? (
			<CardSection>
				<Text>{description}</Text>
			</CardSection>
		) : null;
	}

	render() {
		const {
			selectLibrary,
			state: { selectedLibraryId }
		} = this.props;
		const { id, title } = this.props.library;

		return (
			<TouchableWithoutFeedback onPress={() => selectLibrary(id)}>
				<View>
					<CardSection>
						<Text style={styles.titleStyle}>{title}</Text>
					</CardSection>
					{this.renderDescription()}
				</View>
			</TouchableWithoutFeedback>
		);
	}
}

// const ListItem = ({ library }) => {
// 	const {
// 		selectLibrary,
// 		state: { selectedLibraryId }
// 	} = useContext(TechContext);
// 	const { id, title } = library;
// 	const expanded = showDescription(id, selectedLibraryId);

// 	return (
// 		<TouchableWithoutFeedback onPress={() => selectLibrary(id)}>
// 			<View>
// 				<CardSection>
// 					<Text style={styles.titleStyle}>{title}</Text>
// 				</CardSection>
// 				{expanded ? (
// 					<CardSection>
// 						<Text>{library.description}</Text>
// 					</CardSection>
// 				) : null}
// 			</View>
// 		</TouchableWithoutFeedback>
// 	);
// };

const showDescription = (id, selectedLibraryId) => {
	return id === selectedLibraryId;
};

const styles = StyleSheet.create({
	titleStyle: {
		fontSize: 18,
		paddingLeft: 15
	}
});

export default withContext(ListItem, TechContext);
