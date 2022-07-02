import React from "react";
import "../../assets/scss/containers/cube/cube.css";
const Cube = () => {
  return (
    <section className="wrapper_cube">
        <div className="cube">
            <div className="wall front">1</div>
            <div className="wall back">2</div>
            <div className="wall left">3</div>
            <div className="wall right">4</div>
            <div className="wall top">5</div>
            <div className="wall bottom">6</div>
        </div>
        <div className="floor">
        </div>
    </section>
  );
};

export default Cube;
