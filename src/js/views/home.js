import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/home.css";

export const Home = () => {
    const { store, actions } = useContext(Context);
    const isFavorite = (uid) => {
        const result = store.favorites.some((fav) => fav.uid === uid);
        console.log("Checking favorite:", uid, "Result:", result);
        return result;
    };

    const getCharacterImageUrl = (uid) =>
        `https://starwars-visualguide.com/assets/img/characters/${uid}.jpg`;

    const getStarshipImageUrl = (uid) =>
        `https://starwars-visualguide.com/assets/img/starships/${uid}.jpg`;

    const getPlanetImageUrl = (uid) =>
        `https://starwars-visualguide.com/assets/img/planets/${uid}.jpg`;

    return (
        <div className="container">
            <h2 className="text-danger">Characters</h2>
            <div className="card-deck d-flex mb-5">
                {store.people.map((character) => {
                    console.log("Character UID:", character.uid, "Category: people");
                    return (
                        <div className="card m-3" key={character.uid}>
                            <img
                                className="card-img-top"
                                src={getCharacterImageUrl(character.uid)}
                                alt={character.name}
                                onError={(e) =>
                                (e.target.src =
                                    "https://starwars-visualguide.com/assets/img/placeholder.jpg")
                                }
                            />
                            <div className="card-body">
                                <h5 className="card-title">{character.name}</h5>
                                <div className="d-flex justify-content-between">
                                    <Link to={`/detail/people/${character.uid}`}>
                                        <button className="btn btn-outline-primary">
                                            Learn more!
                                        </button>
                                    </Link>
                                    <button
                                        className="btn btn-outline-warning"
                                        onClick={() =>
                                            isFavorite(`${character.uid}-people`)
                                                ? actions.removeFavorite(`${character.uid}-people`)
                                                : actions.addFavorite({
                                                    uid: `${character.uid}-people`,
                                                    name: character.name,
                                                    category: "people",
                                                })}>
                                        <i className={
                                            isFavorite(`${character.uid}-people`)
                                                ? "fa-solid fa-heart"
                                                : "fa-regular fa-heart"
                                        }
                                        ></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            <h2 className="text-danger">Starships</h2>
            <div className="card-deck d-flex mb-5">
                {store.starships.map((starship) => {
                    console.log("Starship UID:", starship.uid, "Category: starship");
                    return (
                        <div className="card m-3" key={starship.uid}>
                            <img
                                className="card-img-top"
                                src={getStarshipImageUrl(starship.uid)}
                                alt={starship.name}
                                onError={(e) =>
                                (e.target.src =
                                    "https://starwars-visualguide.com/assets/img/placeholder.jpg")
                                }
                            />
                            <div className="card-body">
                                <h5 className="card-title">{starship.name}</h5>
                                <div className="d-flex justify-content-between">
                                    <Link to={`/detail/starships/${starship.uid}`}>
                                        <button className="btn btn-outline-primary">
                                            Learn more!
                                        </button>
                                    </Link>
                                    <button
                                        className="btn btn-outline-warning"
                                        onClick={() =>
                                            isFavorite(`${starship.uid}-starships`)
                                                ? actions.removeFavorite(`${starship.uid}-starships`)
                                                : actions.addFavorite({
                                                    uid: `${starship.uid}-starships`,
                                                    name: starship.name,
                                                    category: "starships",
                                                })}>
                                        <i className={
                                            isFavorite(`${starship.uid}-starships`)
                                                ? "fa-solid fa-heart"
                                                : "fa-regular fa-heart"
                                        }
                                        ></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            <h2 className="text-danger">Planets</h2>
            <div className="card-deck d-flex mb-5">
                {store.planets.map((planet) => {
                    console.log("Planet UID:", planet.uid, "Category: planets");
                    return (
                        <div className="card m-3" key={planet.uid}>
                            <img
                                className="card-img-top"
                                src={getPlanetImageUrl(planet.uid)}
                                alt={planet.name}
                                onError={(e) =>
                                (e.target.src =
                                    "https://starwars-visualguide.com/assets/img/placeholder.jpg")
                                }
                            />
                            <div className="card-body">
                                <h5 className="card-title">{planet.name}</h5>
                                <div className="d-flex justify-content-between">
                                    <Link to={`/detail/planets/${planet.uid}`}>
                                        <button className="btn btn-outline-primary">
                                            Learn more!
                                        </button>
                                    </Link>
                                    <button
                                        className="btn btn-outline-warning"
                                        onClick={() =>
                                            isFavorite(`${planet.uid}-planets`)
                                                ? actions.removeFavorite(`${planet.uid}-planets`)
                                                : actions.addFavorite({
                                                    uid: `${planet.uid}-planets`,
                                                    name: planet.name,
                                                    category: "planets",
                                                })}>
                                        <i className={
                                            isFavorite(`${planet.uid}-planets`)
                                                ? "fa-solid fa-heart"
                                                : "fa-regular fa-heart"
                                        }
                                        ></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};