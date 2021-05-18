import { useEffect, useReducer } from 'react';
import { AuthContext } from './auth/AuthContext';
import { authReducer, defaultState } from './auth/authReducer';
import { AppRouter } from './routers/AppRouter';

const init = () => {
	const readData = localStorage.getItem('heroesapp-user');

	if (!readData) return { name: '', isLoggedIn: false };

	return JSON.parse(readData);
};

export const App = () => {
	const [user, dispatch] = useReducer(authReducer, defaultState, init);

	useEffect(() => {
		localStorage.setItem('heroesapp-user', JSON.stringify(user));
	}, [user]);

	return (
		<AuthContext.Provider value={{ user, dispatch }}>
			<AppRouter />
		</AuthContext.Provider>
	);
};
