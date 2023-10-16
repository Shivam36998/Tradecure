import React from "react";
import image from "../../assets/logo-1.jpg";
import styles from "./Navbar.module.css";
import Button from "../../UI/Button";
import { NavLink } from "react-router-dom";
// import {useState} from "react";

const Navbar = () => {
  // const [scrolltop, setScrolltop] = useState(0);

  // const handleScroll = (event) =>{

  // }
  return (
    <nav className={styles.nav}>
      <img src={image} alt="Logo" />
      <ul className={styles.links}>
        <li>
          <NavLink to="shop">Shop</NavLink>
        </li>
        <li>
          <NavLink to="nutrient">Nutrients Plan</NavLink>
        </li>
        <li>
          <NavLink to="consult">Consulting</NavLink>
        </li>
        <li>
          <NavLink to="cart">
            <i className="fa-solid fa-cart-shopping"></i>
          </NavLink>
        </li>
        <li>
          <Button />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
