import React, { useContext, useEffect, useCallback } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import ListItem from '../components/ListItem';
import { Context as TechContext } from '../context/TechContext';

const LibraryListScreen = () => {
	const { state, fetchLibraries } = useContext(TechContext);

	const listKeyExtractor = useCallback(library => library.id.toString(), []);
	const listRenderItem = useCallback(({ item }) => {
		return <ListItem library={item} />;
	}, []);

	useEffect(() => {
		fetchLibraries();
	}, []);

	return (
		<View style={{ flex: 1 }}>
			<FlatList
				data={state.libraries}
				keyExtractor={listKeyExtractor}
				renderItem={listRenderItem}
			/>
		</View>
	);
};

LibraryListScreen.navigationOptions = {
	title: 'Tech Stack'
};

const styles = StyleSheet.create({});

export default LibraryListScreen;
