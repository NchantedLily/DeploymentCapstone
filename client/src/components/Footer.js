import React from "react";
import "../index.css";




const Footer = () => {
  return (
   
       
       
  <div className="footer-home">
    <div className="footer-info">
      <div className="footer-capstone-info">
        <h3>Capstone</h3>
        <p>
          This was made using React 
        </p>
      </div>
      <div className="footer-personal-info">
        <h3>Ben Ringer</h3>
        <a href="https://github.com/BenRinger" rel="noreferrer" target="_blank">Github</a>
        <a href="https://www.linkedin.com/in/ben-ringer/" rel="noreferrer" target="_blank">LinkedIn</a>
      </div>
      <div className="footer-personal-info">
        <h3>Tre Griffin</h3>
        <a href="https://github.com/ltgriff" rel="noreferrer" target="_blank">Github</a>
        <a href="https://www.linkedin.com/in/lawrence-tre-griffin-84a0a544/" rel="noreferrer" target="_blank">LinkedIn</a>
      </div>
      <div className="footer-personal-info">
        <h3>Martia Turner</h3>
        <a href="https://github.com/NchantedLily" rel="noreferrer" target="_blank">Github</a>
        <a href="https://www.linkedin.com/in/martia-turner-30b1295a/" rel="noreferrer" target="_blank">LinkedIn</a>
      </div>
      {/* <img src="/img/Cincyskyline.png" alt style={{width: 2525, height: 300}} /> */}
  <a href="http://www.icons8.com">Bridge icon by Icons8</a>
    </div>      
  </div>
  );
}

export default Footer;