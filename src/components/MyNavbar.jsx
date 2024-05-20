import React from "react";
import { Link } from "react-router-dom";
import ticketImage from './ticket.png';
import "../index.css";

const MyNavbar = ({ role }) => {

  const handleLogout = () => {
    // Lógica para cerrar sesión, como limpiar el token de autenticación, etc.
    // Luego, redirige al usuario a la página de inicio (/)
    window.location.href = "/";
  };

  return (
    <nav className="navbar">
      <div className="container">
      
        <ul className="nav justify-content-end">
          {(role === "user") && (
            <>
              <div className="navbar-brand" style={{ cursor: 'pointer' }}>
          <img src={ticketImage} alt="Inicio" className="navbar-logo" />
        </div>
              <li className="nav-item">
                <a className="nav-link" href="/View">View Ticket</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/Notifications">Notifications</a>
              </li>
            </>
          )}
          {(role === "admin" || role === "user") && (
            <>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/Create">Create Ticket</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/Cancel">Cancel Ticket</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" onClick={handleLogout}>Cerrar Sesión</a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Name Lastname</a>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};


export default MyNavbar;