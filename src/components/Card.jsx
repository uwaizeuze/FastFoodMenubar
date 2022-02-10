import React from "react";

const Card = ({ item }) => {
  return (
    <>
      {item.map((currElement) => {
        const { id, name, image, price, description, category } = currElement;
        return (
          <>
            <div className="card__box" key={id}>
              <div className="image__container">
                <img src={image} alt="image__default" className="image--" />
              </div>
              <div className="content__container">
                <h1 className="content__title">{name}</h1>
                <p className="content__description">{category}</p>
                <div className="price__box">
                  <h3 className="price__title">price:{price}</h3>
                  <button className="price__btn">order</button>
                </div>
                <p className="content__description">{description}</p>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};

export default Card;
