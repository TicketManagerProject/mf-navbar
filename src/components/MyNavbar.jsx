import React from "react";
import "../index.css";

const MyNavbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <ul class="nav justify-content-end">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/Create">Create Ticket</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/View">View Ticket</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/Cancel">Cancel Ticket</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/Notifications">Notifications</a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Name Lastname</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default MyNavbar;