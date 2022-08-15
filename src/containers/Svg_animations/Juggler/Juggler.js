import React from "react";
import "../../../assets/scss/containers/Svg_animations/Juggler/Juggler.css";
import {ReactComponent as Man} from "../../../assets/svg/Juggler/man_550w_550h.svg";
import {ReactComponent as LeftHand} from "../../../assets/svg/Juggler/left_hand_pc.svg";
import {ReactComponent as RightHand} from "../../../assets/svg/Juggler/right_hand_pc.svg";
import {ReactComponent as GreenBall} from "../../../assets/svg/Juggler/green_ball.svg";
import {ReactComponent as YellowBall} from "../../../assets/svg/Juggler/yellow_ball.svg";
import {ReactComponent as BlueBall} from "../../../assets/svg/Juggler/blue_ball.svg";

export const Juggler = () => {
  return (
    <section className="wrapper_juggler">
        <div className="man_container">
            <Man/>
            <LeftHand className = "left_hand"/>
            <RightHand className = "right_hand"/>
            <GreenBall className = "ball green"/>
            <YellowBall className = "ball yellow"/>
            <BlueBall className = "ball blue"/>
        </div>
        
    </section>
  );
};
