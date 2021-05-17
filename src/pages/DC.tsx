import { HeroList } from '../components/heroes/HeroList';

export const DC = () => {
	return (
		<div className="container mt-3">
			<h1>DC Superheroes</h1>
			<hr />
			<HeroList publisher="DC Comics" />
		</div>
	);
};
