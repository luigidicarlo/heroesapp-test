import { Link } from 'react-router-dom';
import { Hero } from '../../data';

// @ts-ignore
const heroImages = require.context('../../assets/img', true);

interface IProps {
	hero: Hero;
}

export const HeroCard = ({ hero }: IProps) => {
	return (
		<div className="card ms-3">
			<div className="row no-gutters">
				<div className="col-md-4">
					<img
						className="card-img"
						src={heroImages(`./${hero.id}.jpg`).default}
						alt={hero.id}
					/>
				</div>
				<div className="col-md-8">
					<div className="card-body">
						<h4 className="card-title">{hero.superhero}</h4>
						<p className="card-text">{hero.alter_ego}</p>
						{hero.alter_ego !== hero.characters && (
							<p className="card-text">{hero.characters}</p>
						)}
						<p className="card-text">
							<small className="text-muted">{hero.first_appearance}</small>
						</p>
						<Link className="btn btn-outline-primary" to={`/heroes/${hero.id}`}>
							Read more...
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};
