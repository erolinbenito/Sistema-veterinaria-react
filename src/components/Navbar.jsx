import React from "react";
import '../styles/navbar.css'
import logo from "../assets/homeCliente/logo.jpg";

function NavBar({imgSrc, userPhoto}){
    return(
        <nav className="navbar">
            <div className="navbar--identificacion">
            <img className="navbar--logo" src={logo} />
            <h2 className="navbar--titulo">CLAW GUARDIANS</h2>
            </div>
            <div className="navbar--menu">
                <a className="navbar--menu-item" href="#">Inicio</a>
                <a className="navbar--menu-item" href="#">Citas</a>
                <a className="navbar--menu-item" href="#">Productos</a>
                <a className="navbar--menu-item" href="#">Servicios</a>
                <img className="navbar--user" src={userPhoto} />
            </div>
        </nav>
    )
}

export default NavBar