import { useContext } from 'react';
import { Link, NavLink, useHistory } from 'react-router-dom';
import { AuthContext } from '../../auth/AuthContext';
import { actions } from '../../auth/authReducer';

export const Navbar = () => {
	const history = useHistory();
	const { user, dispatch } = useContext(AuthContext);

	const onLogout = () => {
		dispatch({
			type: actions.logout,
			payload: { name: '', isLoggedIn: false },
		});
		history.push('/login');
	};

	return (
		<nav className="navbar navbar-expand-sm navbar-dark bg-dark">
			<Link className="navbar-brand" to="/">
				Superheroes
			</Link>

			<div className="navbar-collapse">
				<div className="navbar-nav">
					<NavLink
						activeClassName="active"
						className="nav-item nav-link"
						exact
						to="/marvel"
					>
						Marvel
					</NavLink>

					<NavLink
						activeClassName="active"
						className="nav-item nav-link"
						exact
						to="/dc"
					>
						DC
					</NavLink>
					<NavLink
						activeClassName="active"
						className="nav-item nav-link"
						exact
						to="/search"
					>
						Search
					</NavLink>
				</div>
			</div>

			<div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
				<ul className="navbar-nav ml-auto">
					{user ? (
						<span className="nav-item nav-link text-info">{user.name}</span>
					) : (
						''
					)}
					<button className="btn btn-outline-danger" onClick={onLogout}>
						Log out
					</button>
				</ul>
			</div>
		</nav>
	);
};
