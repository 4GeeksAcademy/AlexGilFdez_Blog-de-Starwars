const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			people: [],
			starships: [],
			planets: [],
		},
		actions: {
			loadPeople: () => {
				fetch("https://www.swapi.tech/api/people")
					.then(response => response.json())
					.then(data => {
						setStore({ people: data.results });
					})
					.catch(err => console.error(err));
			},
			loadStarships: () => {
				fetch("https://www.swapi.tech/api/starships")
					.then(response => response.json())
					.then(data => {
						setStore({ starships: data.results })
					})
					.catch(err => console.error(err));
			},
			loadPlanets: () => {
				fetch("https://www.swapi.tech/api/planets")
					.then(response => response.json())
					.then(data => {
						setStore({ planets: data.results })
					})
					.catch(err => console.error(err));
			},
		},
	};
};

export default getState;
