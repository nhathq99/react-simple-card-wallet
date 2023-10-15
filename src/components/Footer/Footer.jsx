import React from "react";
import { Wrapper } from "./Footer.styled";
import HeartSVG from '../../assets/icons/heart.svg'

const Footer = () => {
    return (
      <Wrapper>
        <div className="body">
          <p className="text">
            Website made with
            <img className="heart-icon" alt="" src={HeartSVG} />
          </p>
        </div>
      </Wrapper>
    );
};

export default Footer;
