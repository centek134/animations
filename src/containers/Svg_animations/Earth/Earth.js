import React from "react";
import "../../../assets/scss/containers/Svg_animations/Earth/Earth.css";
import {ReactComponent as WorldPc} from "../../../assets/svg/Earth/World_pc.svg";

export const Earth = () => {
  return (
    <div className="wrapper_earth">
        <div className="earth_container">
            <WorldPc className="earth"/>
        </div>
    </div>
  );
};
