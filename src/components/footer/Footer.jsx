import React from "react";
import { FaTwitter, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";
import logo from "../../assets/movie.svg";

import "./style.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <ContentWrapper>
        <div className="menuItems">
          <div className="logo">
            <div>
              <img src={logo} alt="" />
            </div>
            <div className="logoName">Series Safari</div>
          </div>
        </div>
        <div className="infoText">
          Series Safari is your go-to hub for uncovering premium movies and TV
          shows. Navigate through our carefully curated collection and stay
          updated on the freshest trends, highest ratings, and beloved classics
          for your next binge-worthy journey.
        </div>
        <div className="socialIcons">
          <a
            href="https://www.instagram.com/__piyush__kr__"
            target="_blank"
            className="icon"
          >
            <FaInstagram />
          </a>

          <a
            href="https://twitter.com/piyushkr_24"
            target="_blank"
            className="icon"
          >
            <FaTwitter />
          </a>

          <a
            href="https://www.linkedin.com/in/piyushkr22"
            target="_blank"
            className="icon"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://github.com/piyushkr22"
            target="_blank"
            className="icon"
          >
            <FaGithub />
          </a>
        </div>
      </ContentWrapper>
    </footer>
  );
};

export default Footer;
