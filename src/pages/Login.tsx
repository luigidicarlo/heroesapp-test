import { useHistory } from 'react-router';

export const Login = () => {
	const history = useHistory();

	const onClick = () => history.replace('/');

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
