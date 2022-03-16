import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">

				<div className="ml-auto">

					<Link to="/formRegisterAnimal">
						<button className="btn btn-primary">Guardar perrito</button>
					</Link>
					<Link to="/photolist">
						<button className="btn btn-primary">Listado de perritos</button>
					</Link>

					
				</div>
			</div>
		</nav>
	);
};
