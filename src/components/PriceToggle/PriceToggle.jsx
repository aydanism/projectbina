import React, { useState } from 'react';
import "./PriceToggle.css"
import Switcher from "../../assets/stsswitcher-right.svg"
import SwitcherSecond from "../../assets/stsswitcher-left.svg"

const PriceToggle = () => {
    const [pricePerSqM, setPricePerSqM] = useState(true);
  
    const handleClick = (isSqM) => {
      setPricePerSqM(isSqM);
    };
  
    return (
      <div className="switcher">
        <button onClick={() => handleClick(true)}>
          <span style={{color: pricePerSqM ? 'blue' : 'black'}}>Qiymətlər 1 m² görə</span>
        </button>
        <img src={pricePerSqM ? SwitcherSecond:  Switcher}  alt="" onClick={() => handleClick(!pricePerSqM)}/>
        <button onClick={() => handleClick(false)} >
          <span style={{color: !pricePerSqM ? 'blue' : 'black', textDecoration: "none"}}>mənzilə görə</span>
        </button>
      </div>
    );
};
export default PriceToggle;
