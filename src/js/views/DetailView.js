import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const DetailView = () => {
    const { category, theid } = useParams();
    const [details, setDetails] = useState(null);

    useEffect(() => {
        const fetchDetails = async () => {
            try {
                const response = await fetch(`https://www.swapi.tech/api/${category}/${theid}`);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();

                if (data.result && data.result.properties) {
                    setDetails(data.result.properties);
                } else {
                    console.error("Data format unexpected:", data);
                    setDetails(null);
                }
            } catch (error) {
                console.error("Error fetching details:", error);
                setDetails(null);
            }
        };
        fetchDetails();
    }, [category, theid]);

    const getImageUrl = () => {
        if (category === "people") return `https://starwars-visualguide.com/assets/img/characters/${theid}.jpg`;
        if (category === "planets") return `https://starwars-visualguide.com/assets/img/planets/${theid}.jpg`;
        if (category === "starships") return `https://starwars-visualguide.com/assets/img/starships/${theid}.jpg`;
        return "https://starwars-visualguide.com/assets/img/placeholder.jpg";
    };

    if (!details) {
        return <h1>Loading...</h1>;
    }

    return (
        <div className="container detail-view">
            <div className="row">
                <div className="col-md-6">
                    <img
                        src={getImageUrl()}
                        alt={details.name || details.title}
                        className="img-fluid detail-image"
                        onError={(e) => (e.target.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg")}
                    />
                </div>
                <div className="col-md-6 text-center d-flex align-items-center">
                    <div>
                        <h1>{details.name || details.title}</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum
                            vestibulum. Cras venenatis euismod malesuada.
                        </p>
                    </div>
                </div>
            </div>

            <hr className="text-danger" style={{ height: 3 }} />
            <div className="row text-center text-danger mb-5 mt-3 detail-info">
                {category === "people" && (
                    <>
                        <div className="col">
                            <p><strong>Birth Year:</strong></p>
                            <p>{details.birth_year}</p>
                        </div>
                        <div className="col">
                            <p><strong>Height:</strong></p>
                            <p>{details.height} cm</p>
                        </div>
                        <div className="col">
                            <p><strong>Mass:</strong></p>
                            <p>{details.mass} kg</p>
                        </div>
                        <div className="col">
                            <p><strong>Gender:</strong></p>
                            <p>{details.gender}</p>
                        </div>
                        <div className="col">
                            <p><strong>Hair Color:</strong></p>
                            <p>{details.hair_color}</p>
                        </div>
                        <div className="col">
                            <p><strong>Skin Color:</strong></p>
                            <p>{details.skin_color}</p>
                        </div>
                    </>
                )}

                {category === "planets" && (
                    <>
                        <div className="col">
                            <p><strong>Population:</strong></p>
                            <p>{details.population}</p>
                        </div>

                        <div className="col">
                            <p><strong>Rotation period:</strong></p>
                            <p>{details.rotation_period} days</p>
                        </div>
                        <div className="col">
                            <p><strong>Orbital period:</strong></p>
                            <p>{details.orbital_period} days</p>
                        </div>
                        <div className="col">
                            <p><strong>Diameter:</strong></p>
                            <p>{details.diameter} km</p>
                        </div>
                        <div className="col">
                            <p><strong>Gravity:</strong></p>
                            <p>{details.gravity} Standard</p>
                        </div>
                        <div className="col">
                            <p><strong>Terrain:</strong></p>
                            <p>{details.terrain}</p>
                        </div>
                        <div className="col">
                            <p><strong>Suface water:</strong></p>
                            <p>{details.surface_water}%</p>
                        </div>
                        <div className="col">
                            <p><strong>Climate:</strong></p>
                            <p>{details.climate} </p>
                        </div>

                    </>
                )}

                {category === "starships" && (
                    <>
                        <div className="col">
                            <p><strong>Model:</strong></p>
                            <p>{details.model}</p>
                        </div>
                        <div className="col">
                            <p><strong>Manufacturer:</strong></p>
                            <p>{details.manufacturer}</p>
                        </div>
                        <div className="col">
                            <p><strong>Starship Class:</strong></p>
                            <p>{details.starship_class}</p>
                        </div>
                        <div className="col">
                            <p><strong>Cost:</strong></p>
                            <p>{details.cost_in_credits} credits</p>
                        </div>
                        <div className="col">
                            <p><strong>Speed:</strong></p>
                            <p>{details.max_atmosphering_speed} km/h</p>
                        </div>
                        <div className="col">
                            <p><strong>Hyperdrive rating:</strong></p>
                            <p>{details.hyperdrive_rating}</p>
                        </div>
                        <div className="col">
                            <p><strong>MGLT:</strong></p>
                            <p>{details.MGLT}</p>
                        </div>
                        <div className="col">
                            <p><strong>Length:</strong></p>
                            <p>{details.length}</p>
                        </div>
                        <div className="col">
                            <p><strong>Cargo capacity:</strong></p>
                            <p>{details.cargo_capacity}</p>
                        </div>
                        <div className="col">
                            <p><strong>Crew:</strong></p>
                            <p>{details.crew}</p>
                        </div>
                        <div className="col">
                            <p><strong>Passengers:</strong></p>
                            <p>{details.passengers}</p>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};