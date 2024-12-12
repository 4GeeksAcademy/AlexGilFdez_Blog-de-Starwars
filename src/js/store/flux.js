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
			favorites: [],
		},
		actions: {
			loadPeople: () => {
				fetch("https://www.swapi.tech/api/people")
					.then(response => response.json())
					.then(data => {
						console.log("People data:", data.results);
						setStore({ people: data.results });
					})
					.catch(err => console.error(err));
			},
			loadStarships: () => {
				fetch("https://www.swapi.tech/api/starships")
					.then(response => response.json())
					.then(data => {
						console.log("starships data:", data.results);
						setStore({ starships: data.results });
					})
					.catch(err => console.error(err));
			},
			loadPlanets: () => {
				fetch("https://www.swapi.tech/api/planets")
					.then(response => response.json())
					.then(data => {
						console.log("Planets data:", data.results);
						setStore({ planets: data.results });
					})
					.catch(err => console.error(err));
			},
			addFavorite: (item) => {
				const store = getStore();
				if (!store.favorites.find((fav) => fav.uid === item.uid)) {
					const updatedFavorites = [...store.favorites, item];
					console.log("Favorites after adding:", updatedFavorites);
					setStore({ favorites: updatedFavorites });
				}
			},
			removeFavorite: (uid) => {
				const store = getStore();
				const updatedFavorites = store.favorites.filter((fav) => fav.uid !== uid);
				console.log("Favorites after removing:", updatedFavorites);
				setStore({ favorites: updatedFavorites });
			},
		},
	};
};

export default getState;
