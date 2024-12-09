import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-5 ">
			<div className="container">
			<Link to="/">
				<img className="w-50 h-50 " src="https://img.icons8.com/?size=100&id=38539&format=png&color=000000"></img>
			</Link>
			<div className="dropdown">
				<button className="btn btn-outline-dark dropdown-toggle " type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
					Favoritos
				</button>
				<ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
					<li><a className="dropdown-item" href="#">Action</a></li>
					<li><a className="dropdown-item" href="#">Another action</a></li>
					<li><a className="dropdown-item" href="#">Something else here</a></li>
				</ul>
			</div>
			</div>
		</nav>
	);
};
