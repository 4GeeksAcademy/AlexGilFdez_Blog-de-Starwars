import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	return (
		<nav className="navbar navbar-light bg-light mb-5 ">
			<div className="container">
			<Link to="/">
				<img className="w-50 h-50 " src="https://img.icons8.com/?size=100&id=38539&format=png&color=000000"></img>
			</Link>
			<div className="dropdown">
				<button className="btn btn-outline-dark dropdown-toggle " type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
					Favoritos <span className="badge bg-danger">{store.favorites.length}</span>
				</button>
				<ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton1">
                        {store.favorites.length > 0 ? (
                            store.favorites.map((fav, index) => (
                                <li key={index} className="dropdown-item d-flex justify-content-between align-items-center">
                                    {fav.name}

                                    <button
                                        className="btn btn-sm ms-2"
                                        onClick={() => actions.removeFavorite(fav.uid)}
                                    >
                                            <i className="fa-solid fa-trash"></i>
                                    </button>
                                </li>
                            ))
                        ) : (
                            <li className="dropdown-item">No favorites added</li>
                        )}
                    </ul>
			</div>
			</div>
		</nav>
	);
};
