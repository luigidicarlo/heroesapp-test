import { HeroList } from '../components/heroes/HeroList';

export const Marvel = () => {
	return (
		<div className="container mt-3">
			<h1>Marvel Superheroes</h1>
			<hr />
			<HeroList publisher="Marvel Comics" />
		</div>
	);
};
