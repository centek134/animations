import React from "react";
import "../../../assets/scss/containers/Svg_animations/Juggler/Juggler.css";
import {ReactComponent as Man} from "../../../assets/svg/Juggler/man_550w_550h.svg";
import {ReactComponent as LeftHand} from "../../../assets/svg/Juggler/left_hand_pc.svg";
import {ReactComponent as RightHand} from "../../../assets/svg/Juggler/right_hand_pc.svg";
import {ReactComponent as Ball} from "../../../assets/svg/Juggler/ball.svg";

export const Juggler = () => {
  return (
    <section className="wrapper_juggler">
        <div className="man_container">
            <Man/>
            <LeftHand className = "left_hand"/>
            <RightHand className = "right_hand"/>
            <Ball className = "ball nr_1"/>
            <Ball className = "ball nr_2"/>
            <Ball className = "ball nr_3"/>
        </div>
        
    </section>
  );
};
