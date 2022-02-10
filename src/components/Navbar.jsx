import React from "react";
import Menu from "./Menu";

const Navbar = ({ FilterItem, setItem }) => {
  return (
    <>
      <div className="navbar__box">
        <button onClick={() => FilterItem("breakfast")} className="nav-btn">
          breakfast
        </button>
        <button onClick={() => FilterItem("lunch")} className="nav-btn">
          Lunch
        </button>
        <button onClick={() => FilterItem("evening")} className="nav-btn">
          Evening
        </button>
        <button onClick={() => setItem(Menu)} className="nav-btn">
          All
        </button>
      </div>
    </>
  );
};

export default Navbar;
