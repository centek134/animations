import React from "react";
import "../../assets/scss/containers/cube/cube.css";
const Cube = () => {
  return (
    <section className="wrapper_cube">
      <div className="scene">
          <div className="cube">
              <div className="wall front">( ͡° ͜ʖ ͡°)</div>
              <div className="wall back">༼つ ◕_◕ ༽つ</div>
              <div className="wall left">(⌐▀͡ ̯ʖ▀)=/̵͇̿̿/'̿'̿̿̿ ̿ ̿̿</div>
              <div className="wall right">(=｀ω´=)</div>
              <div className="wall top">(╯ ͠° ͟ʖ ͡°)╯┻━┻</div>
              <div className="wall bottom">👌</div>
          </div>
          <div className="floor">
            <div className="cube_shadow"></div>
          </div>
      </div>
    </section>
  );
};

export default Cube;
