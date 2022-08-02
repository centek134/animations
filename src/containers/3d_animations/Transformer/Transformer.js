import React from "react";
import "../../../assets/scss/containers/3d_animations/Transformer/Transformer.css";

export const Transformer = () => {
  return (
    <section className="wrapper_transformer">
      <div className="scene">
        <div className="floor">
          <div className="cube">
            <div className="wall front"></div>
            <div className="wall left"></div>
            <div className="wall right"></div>
            <div className="wall_wrap">
              <div className="wall back"></div>
              <div className="wall top"></div>
            </div>
            <div className="wall bottom"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
