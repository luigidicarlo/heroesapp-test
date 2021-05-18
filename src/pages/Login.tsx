import { useContext } from 'react';
import { useHistory } from 'react-router';
import { AuthContext } from '../auth/AuthContext';
import { actions } from '../auth/authReducer';

export const Login = () => {
	const history = useHistory();
	const { dispatch } = useContext(AuthContext);

	const onClick = () => {
		dispatch({
			type: actions.login,
			payload: { name: 'Luis Huerta' },
		});
		history.replace('/');
	};

	return (
		<div className="container mt-3">
			<h1>Login</h1>
			<hr />
			<button className="btn btn-primary" type="button" onClick={onClick}>
				Log In
			</button>
		</div>
	);
};
