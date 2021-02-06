import createDataContext, { combineReducers } from './createDataContext';
import data from '../data/LibraryList.json';

const libraryReducer = (state, action) => {
	switch (action.type) {
		case 'fetch_data':
			return data;
		default:
			return state;
	}
};

const selectionReducer = (state, action) => {
	switch (action.type) {
		case 'select_library':
			return action.payload;
		default:
			return state;
	}
};

const reducer = combineReducers({
	libraries: libraryReducer,
	selectedLibraryId: selectionReducer
});

const fetchLibraries = dispatch => () => {
	dispatch({ type: 'fetch_data' });
};

const selectLibrary = dispatch => id => {
	dispatch({ type: 'select_library', payload: id });
};

export const { Context, Provider } = createDataContext(
	reducer,
	{
		fetchLibraries,
		selectLibrary
	},
	{ libraries: [], selectedLibraryId: null }
);
