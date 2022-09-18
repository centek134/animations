import React from "react";
import "../../../assets/scss/containers/3d_animations/RotatingPlanets/RotatingPlanets.css";

export const RotatingPlanets = () => {
  return (
    <div className="wrapper_rotating_planets">
        <div className="rotating_planets">
            <div className="sun"></div>
            <div className="elipse">
            <div className="planet_wrapper first">
                    <div className="left"></div>
                    <div className="right"></div>
                    <div className="circle"></div>
                </div>
            </div>
            <div className="elipse">
            <div className="planet_wrapper second">
                    <div className="left"></div>
                    <div className="right"></div>
                    <div className="circle"></div>
                </div>
            </div>
            <div className="elipse">
                <div className="planet_wrapper third">
                    <div className="left"></div>
                    <div className="right"></div>
                    <div className="circle"></div>
                </div>
            </div>
        </div>
    </div>
  );
};