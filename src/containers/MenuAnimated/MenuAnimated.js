/* eslint-disable react/style-prop-object */
import React from "react";

const MenuAnimated = () => {
    const url = "#";

  return (
    <section className="wrapper_menuanimated">
      <ul>
        <li style={{ "--i":6}}>
          <a href={url}>Home</a>
        </li>
        <li style={{ "--i":5}}>
          <a href={url}>about</a>
        </li>
        <li style={{ "--i":4}}>
          <a href={url}>our team</a>
        </li>
        <li style={{ "--i":3}}>
          <a href={url}>Products</a>
        </li>
        <li style={{ "--i":2}}>
          <a href={url}>Portfolio</a>
        </li>
        <li style={{ "--i":1}}>
          <a href={url}>Contact</a>
        </li>
      </ul>
    </section>
  );
};

export default MenuAnimated;
