import React, { createContext } from 'react';
import { doVoidReturn } from '../utils/misc.util';
import { AuthValue, IAction } from './authReducer';

interface IAuthContext {
	user: AuthValue;
	dispatch: React.Dispatch<IAction>;
}

export const AuthContext = createContext<IAuthContext>({
	user: {
		name: '',
		isLoggedIn: false,
	},
	dispatch: doVoidReturn,
});
