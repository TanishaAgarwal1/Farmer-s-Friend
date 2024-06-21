import React, { useState, useEffect } from 'react';
import { theme } from "./../theme";
import Services from './Services';
import Footer from './Footer';
import backgroundImage from "../assets/farm.jpg";
//import Extra from './Extra';

function TypingEffect({ text, speed }) {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      setDisplayText(text.substring(0, currentIndex));
      currentIndex++;
      if (currentIndex > text.length) {
        clearInterval(intervalId);
      }
    }, speed);

    return () => clearInterval(intervalId);
  }, [text, speed]);

  return <span>{displayText}</span>;
}

function DashBoard() {
  return (
    <div className="Dashboard">
      {/* Main div taking up the whole screen */}
      <div className="Main flex">
        {/* Left half with the background image */}
        <div className="hero h-screen w-3/5" style={{backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}></div>
        
        {/* Right half with text content */}
        <div className="hero h-screen w-2/5 flex justify-center    text-neutral-content" style={{backgroundColor:"#FFFCDB"}}>
          <div className="ml-10" >
            {/* Typing effect component */}
            <h1 className="mb-5 text-7xl font-bold" style={{color:"#d3a118"}}>
              <TypingEffect text="Welcome To Farmer's Friend" speed={100} />
            </h1>
            <p className="mb-5 text-2xl font-medium" style={{color:"#f6c43d"}}>A guide for Farmers all needs</p>
          </div>
        </div>
      </div>
      
      {/* Additional components */}
      <Services/>
      {/* <Extra/> */}
      <Footer/>
    </div>
  );
}

export default DashBoard;
