export const storageKey = 'heroesapp-user';

export interface AuthValue {
	name: string;
	isLoggedIn?: boolean;
}

export interface IAction {
	type: string;
	payload: AuthValue;
}

export const actions = {
	login: 'login',
	logout: 'logout',
};

export const defaultState: AuthValue = {
	name: '',
	isLoggedIn: false,
};

export const authReducer = (
	state: AuthValue = defaultState,
	action: IAction
) => {
	switch (action.type) {
		case actions.login:
			return { ...action.payload, isLoggedIn: true };
		case actions.logout:
			return defaultState;
		default:
			return state;
	}
};
