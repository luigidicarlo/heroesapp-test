import { heroes, Publisher } from '../data';

export const getHeroesByPublisher = (publisher: Publisher) =>
	heroes.filter(hero => hero.publisher === publisher);

export const getHeroById = (id: string) => heroes.find(hero => hero.id === id);

export const getHeroByQuery = (q: string) => {
	if (!q.length) return [];

	return heroes.filter(hero => {
		const superhero = hero.superhero.toLowerCase();
		const characters = hero.characters
			.split(',')
			.map(char => char.trim())
			.join('')
			.toLowerCase();
		const alterEgo = hero.alter_ego.toLowerCase();
		const lowerQuery = q.toLowerCase();

		return (
			superhero.includes(lowerQuery) ||
			characters.includes(lowerQuery) ||
			alterEgo.includes(lowerQuery)
		);
	});
};

// @ts-ignore
export const heroImages = require.context('../assets/img', true);
