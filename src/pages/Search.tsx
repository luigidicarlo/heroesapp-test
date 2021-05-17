import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { HeroCard } from '../components/heroes/HeroCard';
import { Hero } from '../data';
import { useQuery } from '../hooks/useQuery';
import { getHeroByQuery } from '../utils/heroes.util';

export const Search = () => {
	const history = useHistory();
	const queryParams = useQuery();
	const s = queryParams.get('s');
	const [query, setQuery] = useState<string>(s || '');
	const [results, setResults] = useState<Hero[]>(s ? getHeroByQuery(s) : []);

	const onSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		if (!query.length) return;

		history.push(`?s=${query}`);

		setResults(getHeroByQuery(query));
	};

	const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
		setQuery(e.target.value);

	return (
		<div className="container mt-3">
			<h1>Search Superhero</h1>
			<form onSubmit={onSubmit}>
				<div className="form-group d-flex align-items-center justify-content-around">
					<input
						type="text"
						className="form-control"
						placeholder="Batman..."
						value={query}
						onChange={onChange}
					/>
					<button type="submit" className="btn btn-outline-primary">
						Search
					</button>
				</div>
			</form>

			{(results.length > 0 && (
				<div className="card-columns mt-3">
					{results.map(result => (
						<div className="mb-3 animate__animated animate__fadeIn">
							<HeroCard key={result.id} hero={result} />
						</div>
					))}
				</div>
			)) || (
				<h2 className="alert alert-dark text-center">No results to show</h2>
			)}
		</div>
	);
};
