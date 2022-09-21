import React from "react";
import "../../../assets/scss/containers/Svg_animations/Earth/Earth.css";
import {ReactComponent as World} from "../../../assets/svg/Earth/World.svg";

export const Earth = () => {
  return (
    <div className="wrapper_earth">
        <div className="earth_container">
            <World/>
        </div>
    </div>
  );
};
