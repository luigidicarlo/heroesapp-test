import { getHeroesByPublisher } from '../../utils/heroes.util';
import { Publisher } from '../../data';
import { HeroCard } from './HeroCard';
import { useMemo } from 'react';

interface IProps {
	publisher: Publisher;
}

export const HeroList = ({ publisher }: IProps) => {
	const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);

	return (
		<div className="card-columns animate__animated animate__fadeIn">
			{heroes.map(hero => (
				<HeroCard key={hero.id} hero={hero} />
			))}
		</div>
	);
};
