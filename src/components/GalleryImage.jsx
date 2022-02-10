import React, { useState } from "react";
import "../styles/GalleryImage.css";
import Chola from "../images/corn.jpg";
import Menu from "./Menu";
import Card from "./Card";
import Navbar from "./Navbar";

const GalleryImage = () => {
  const [item, setItem] = useState(Menu);

  const FilterItem = (category) => {
    const upDateData = Menu.filter((currentElement) => {
      return currentElement.category === category;
    });
    setItem(upDateData);
  };

  return (
    <>
      <h1 className="gallery-title">Order your favorite Dish</h1>
      <hr />
      <Navbar FilterItem={FilterItem} setItem={setItem} />

      <section className="main_section">
        <Card item={item} />
      </section>
    </>
  );
};

export default GalleryImage;
