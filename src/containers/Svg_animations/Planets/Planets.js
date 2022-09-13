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
          <div className="planet item">
            <Sun className="sun"/>
          </div>
          <div className="planet item">
            <Mercury className="mercury"/>
          </div>
          <div className="planet item">
            <Venus className="venus"/>
          </div>
          <div className="planet item">
            <Earth className="earth" />
          </div>
          <div className="planet item">
            <Mars className="mars" />
          </div>
          <div className="planet item">
            <Jupiter className="jupiter" />
          </div>
          <div className="planet item">
            <Saturn className="saturn" />
          </div>
          <div className="planet item">
            <Uranus className="uranus" />
          </div>
          <div className="planet item">
            <Neptune className="neptune" />
          </div>
        </div>
    </div>
  );
};
