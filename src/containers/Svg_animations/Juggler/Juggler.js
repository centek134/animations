import React from "react";
import "../../../assets/scss/containers/Svg_animations/Juggler/Juggler.css";
import {ReactComponent as Man} from "../../../assets/svg/Juggler/man_550w_550h.svg";
import {ReactComponent as LeftHand} from "../../../assets/svg/Juggler/left_hand_pc.svg";
import {ReactComponent as RightHand} from "../../../assets/svg/Juggler/right_hand_pc.svg";
import {ReactComponent as GreenBall} from "../../../assets/svg/Juggler/green_ball.svg";
import {ReactComponent as YellowBall} from "../../../assets/svg/Juggler/yellow_ball.svg";
import {ReactComponent as BlueBall} from "../../../assets/svg/Juggler/blue_ball.svg";

import {ReactComponent as ManMobile} from "../../../assets/svg/Juggler/man_300w_300h.svg";
import {ReactComponent as LeftHandMobile} from "../../../assets/svg/Juggler/left_hand_mobile.svg";
import {ReactComponent as RightHandMobile} from "../../../assets/svg/Juggler/right_hand_mobile.svg";
import {ReactComponent as GreenBallMobile} from "../../../assets/svg/Juggler/green_ball_mobile.svg";
import {ReactComponent as YellowBallMobile} from "../../../assets/svg/Juggler/yellow_ball_mobile.svg";
import {ReactComponent as BlueBallMobile} from "../../../assets/svg/Juggler/blue_ball_mobile.svg";

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
        <div className="man_container_mobile">
            <ManMobile/>
            <LeftHandMobile className = "left_hand_mobile"/>
            <RightHandMobile className = "right_hand_mobile"/>
            <GreenBallMobile className = "ball green_mobile"/>
            <YellowBallMobile className = "ball yellow_mobile"/>
            <BlueBallMobile className = "ball blue_mobile"/>
        </div>
        
    </section>
  );
};
