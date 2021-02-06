import React, { useReducer, useContext } from 'react';

export const combineReducers = reducers => {
	return (state = {}, action) => {
		const newState = {};
		for (let key in reducers) {
			newState[key] = reducers[key](state[key], action);
		}

		return newState;
	};
};

export const withContext = (Component, Context) => {
	return props => {
		const contextProps = useContext(Context);

		return <Component {...props} {...contextProps} />;
	};
};

export default (reducer, actions, initialState) => {
	const Context = React.createContext();

	const Provider = ({ children }) => {
		const [state, dispatch] = useReducer(reducer, initialState);

		const boundActions = {};
		for (let key in actions) {
			boundActions[key] = actions[key](dispatch);
		}

		return (
			<Context.Provider value={{ state, ...boundActions }}>
				{children}
			</Context.Provider>
		);
	};

	return { Context, Provider };
};
