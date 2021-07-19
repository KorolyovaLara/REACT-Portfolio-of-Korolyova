import React from "react";

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <ul className="nav nav-pills nav-justified fixed-top px-2 py-2">
      <li className="nav-item">
        <a
          href="#home"
          onClick={() => handlePageChange("Home")}
          className={
            currentPage === "Home"
              ? "nav-link bg-dark text-light"
              : "nav-link text-dark"
          }
        >
          Home
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#about"
          onClick={() => handlePageChange("About")}
          className={
            currentPage === "About"
              ? "nav-link bg-dark text-light"
              : "nav-link text-dark"
          }
        >
          About
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#portfolio"
          onClick={() => handlePageChange("Portfolio")}
          className={
            currentPage === "Portfolio"
              ? "nav-link bg-dark text-light"
              : "nav-link text-dark"
          }
        >
          Portfolio
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#resume"
          onClick={() => handlePageChange("Resume")}
          className={
            currentPage === "Resume"
              ? "nav-link bg-dark text-light"
              : "nav-link text-dark"
          }
        >
          Resume
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#contact"
          onClick={() => handlePageChange("Contact")}
          className={
            currentPage === "Contact"
              ? "nav-link bg-dark text-light"
              : "nav-link text-dark"
          }
        >
          Contact
        </a>
      </li>
    </ul>
  );
}

export default NavTabs;
