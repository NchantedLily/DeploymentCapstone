import React from "react";
import "../index.css";
import BenLinked from "https://www.linkedin.com/in/ben-ringer/";
import TreLinked from "https://www.linkedin.com/in/lawrence-tre-griffin-84a0a544/";
import MartiaLinked from "https://www.linkedin.com/in/martia-turner-30b1295a/" ;
import TreGithub from "https://github.com/ltgriff";
import BenGithub from "https://github.com/BenRinger";
import MartiaGithub from "https://github.com/NchantedLily";


const Footer = () => {
  return (
   
       
       
  <div classname="footer-home">
    <div classname="footer-info">
      <div classname="footer-capstone-info">
        <h3>Capstone</h3>
        <p>
          This was made using React 
        </p>
      </div>
      <div classname="footer-personal-info">
        <h3>Ben Ringer</h3>
        <a href={BenGithub} rel="noreferrer" target="_blank">Github</a>
        <a href={BenLinked} rel="noreferrer" target="_blank">LinkedIn</a>
      </div>
      <div classname="footer-personal-info">
        <h3>Tre Griffin</h3>
        <a href={TreGithub} rel="noreferrer" target="_blank">Github</a>
        <a href={TreLinked} rel="noreferrer" target="_blank">LinkedIn</a>
      </div>
      <div classname="footer-personal-info">
        <h3>Martia Turner</h3>
        <a href={MartiaGithub} rel="noreferrer" target="_blank">Github</a>
        <a href={MartiaLinked}rel="noreferrer" target="_blank">LinkedIn</a>
      </div>
      {/* <img src="/img/Cincyskyline.png" alt style={{width: 2525, height: 300}} /> */}
  <a href="http://www.icons8.com">Bridge icon by Icons8</a>
    </div>      
  </div>
  );
  };

