import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Provider as TechProvider } from './src/context/TechContext';
import LibraryListScreen from './src/screens/LibraryListScreen';

const navigator = createStackNavigator(
	{
		LibraryList: LibraryListScreen
	},
	{
		initialRouteName: 'LibraryList'
	}
);

const App = createAppContainer(navigator);

export default () => {
	return (
		<TechProvider>
			<App />
		</TechProvider>
	);
};
