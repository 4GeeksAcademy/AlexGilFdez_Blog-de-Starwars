import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Link } from "react-router-dom";

export const Home = () => {
    const { store } = useContext(Context);


    const getCharacterImageUrl = (index) =>
        `https://starwars-visualguide.com/assets/img/characters/${index + 1}.jpg`;

    const getStarshipImageUrl = (index) =>
        `https://starwars-visualguide.com/assets/img/starships/${index + 1}.jpg`;

    const getPlanetImageUrl = (index) =>
        `https://starwars-visualguide.com/assets/img/planets/${index + 1}.jpg`;

    return (
        <div className="container">

            <h2 className="text-danger">Characters</h2>
            <div className="card-deck d-flex mb-5">
                {store.people.length > 0 ? (
                    store.people.map((character, index) => (
                        <div className="card m-3" key={index}>
                            <img
                                className="card-img-top"
                                src={getCharacterImageUrl(index)}
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
                                        <button className="btn btn-outline-primary"> Learn more! </button>
                                        </Link>         
                                    <button className="btn btn-outline-warning">
                                        <i className="fa-regular fa-heart"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>Loading characters...</p>
                )}
            </div>
            <h2 className="text-danger">Starships</h2>
            <div className="card-deck d-flex mb-5">
                {store.starships.length > 0 ? (
                    store.starships.map((starship, index) => (
                        <div className="card m-3" key={index}>
                            <img
                                className="card-img-top"
                                src={getStarshipImageUrl(index)}
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
                                        <button className="btn btn-outline-primary"> Learn more! </button>
                                        </Link> 
                                    <button className="btn btn-outline-warning">
                                        <i className="fa-regular fa-heart"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>Loading starships...</p>
                )}
            </div>
            <h2 className="text-danger">Planets</h2>
            <div className="card-deck d-flex mb-5">
                {store.planets.length > 0 ? (
                    store.planets.map((planet, index) => (
                        <div className="card m-3" key={index}>
                            <img
                                className="card-img-top"
                                src={getPlanetImageUrl(index)}
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
                                        <button className="btn btn-outline-primary"> Learn more! </button>
                                        </Link> 
                                    <button className="btn btn-outline-warning">
                                        <i className="fa-regular fa-heart"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>Loading planets...</p>
                )}
            </div>


        </div>
    );
};

