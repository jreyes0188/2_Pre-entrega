import React from "react";
import "./NavBar.css";
import CartShop from "../CartShop/Shop";
import { Link } from "react-router-dom"

const NavBar = () => {
    return (
        <nav className="Barra_Navegacion">
            <ul className="List-ul">
                <Link className="Link" to="/"> Inicio </Link>
                <Link className="Link" to="/catalogo"> Catalogo </Link>
                <Link className="Link" to="/consultas"> Consultas </Link>
                <li className="Cart_Shop">
                    <CartShop />
                    <span>0</span>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar;