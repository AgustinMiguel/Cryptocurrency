import React from "react";
import classes from "./Nav.module.css";
import {Link} from "react-router-dom";
const Nav = () => {
    const style = {color: "white"}
  return (
    <div className={classes.Nav}>
      <ul>
        <li><Link style={style} to="/">Home</Link></li>
        <li><Link style={style} to="/about">About</Link></li>
        <li><Link style={style} to="/list">List</Link></li>   
      </ul>
    </div>
  );
};

export default Nav;
