import { useState } from "react";
import "../App.css";

interface NavBarProps {
  brandName: string;
  imageSrcPath: string;
  navItems: string[];
}

function NavBar({ brandName,imageSrcPath ,navItems }: NavBarProps) {

  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
    <nav className="navbar navbar-expand-md navbar-light bg-white shadow d-block">
      <div className="container-fluid">
        <a className="navbar-brand" href="home">
          <img
            src={imageSrcPath}
            width="60"
            height="60"
            className="d-inline-block align-center"
            alt=""
          />
          <span className="fw-bolder fs-4">{brandName}</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className="collapse
         navbar-collapse"
        id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-md-1" >
            {navItems.map((items, index) => (
              <li
                key={items}
                className="nav-item"
                onClick={() => setSelectedIndex(index)}
              >
                <a
                  className={
                    selectedIndex == index
                      ? "nav-link active fw-bold"
                      : "nav-link"
                  }
                  href="#home"
          
                >
                  {items}
                </a>
               
              </li>
            ))}
          </ul>
          
        </div>
      </div>
    </nav>
    </>
  );
}

export default NavBar; 
