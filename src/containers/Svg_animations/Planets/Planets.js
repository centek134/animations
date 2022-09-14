import React from 'react';
import "../../../assets/scss/containers/Svg_animations/Planets/Planets.css";

import {ReactComponent as Sun} from "../../../assets/svg/Planets/sun.svg";
import {ReactComponent as Mercury} from "../../../assets/svg/Planets/mercury.svg";
import {ReactComponent as Venus} from "../../../assets/svg/Planets/venus.svg";
import {ReactComponent as Earth} from "../../../assets/svg/Planets/earth.svg";
import {ReactComponent as Mars} from "../../../assets/svg/Planets/mars.svg";
import {ReactComponent as Jupiter} from "../../../assets/svg/Planets/jupiter.svg";
import {ReactComponent as Saturn} from "../../../assets/svg/Planets/saturn.svg";
import {ReactComponent as Uranus} from "../../../assets/svg/Planets/uranus.svg";
import {ReactComponent as Neptune} from "../../../assets/svg/Planets/neptune.svg";

export const Planets = () => {
  return (
    <div className="wrapper_planets">
        <div className="planets">
          <div className="planet">
            <Sun className="sun"/>
          </div>
          <div className="planet">
            <Mercury className="item"/>
          </div>
          <div className="planet">
            <Venus className="item"/>
          </div>
          <div className="planet">
            <Earth className="item" />
          </div>
          <div className="planet">
            <Mars className="item" />
          </div>
          <div className="planet">
            <Jupiter className="item" />
          </div>
          <div className="planet">
            <Saturn className="item" />
          </div>
          <div className="planet">
            <Uranus className="item" />
          </div>
          <div className="planet">
            <Neptune className="item" />
          </div>
        </div>
    </div>
  );
};
