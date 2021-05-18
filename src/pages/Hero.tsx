import { useMemo } from 'react';
import { Redirect, useHistory, useParams } from 'react-router';
import { getHeroById, heroImages } from '../utils/heroes.util';

interface IParams {
	heroid: string;
}

export const Hero = () => {
	const history = useHistory();
	const { heroid } = useParams<IParams>();
	const hero = useMemo(() => getHeroById(heroid), [heroid]);

	const goBack = () =>
		history.length <= 2 ? history.push('/') : history.goBack();

	if (!hero) {
		return <Redirect to="/" />;
	}

	return (
		<div className="row mt-3">
			<div className="col-xs-12 col-md-4">
				<img
					src={heroImages(`./${heroid}.jpg`).default}
					alt={heroid}
					className="img-thumbnail animate__animated animate__fadeInLeft"
				/>
			</div>
			<div className="col-xs-12 col-md-8">
				<h3>{hero.superhero}</h3>
				<ul className="list-group list-group-flush">
					<li className="list-group-item">
						<strong>Alter Ego:</strong> {hero.alter_ego}
					</li>
					<li className="list-group-item">
						<strong>Publisher:</strong> {hero.publisher}
					</li>
					<li className="list-group-item">
						<strong>First Appearance:</strong> {hero.first_appearance}
					</li>
				</ul>
				<h4 className="mt-3">Characters</h4>
				<p>{hero.characters}</p>
				<button
					className="btn btn-outline-primary"
					type="button"
					onClick={goBack}
				>
					Go Back
				</button>
			</div>
		</div>
	);
};
