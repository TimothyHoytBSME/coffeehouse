import './App.css';

import Sections from './Components/Sections.js';
import TheHead from './Components/TheHead.js';
import React, {useRef} from "react";

const handleScroll = (scrollRef, toRef) => {
  console.log('scroll link clicked',toRef)
  scrollRef.current.scrollTo({
    top: toRef.current.offsetTop,
    left: 0,
    behavior: "smooth"
  })
};

function App() {
  const javaRef = useRef(null);
  const drinksRef = useRef(null);
  const foodRef = useRef(null);
  const dessertRef = useRef(null);
  const contentRef = useRef(null);

  return (
    <div className="App" >
      <div className="headbar">
        <TheHead side={"left"}></TheHead>
        <div className='links'>
          <button className='link glass' onClick={()=>{handleScroll(contentRef, javaRef)}}>Java</button>
          <button className='link glass' onClick={()=>{handleScroll(contentRef, drinksRef)}}>Drinks</button>
          <button className='link glass' onClick={()=>{handleScroll(contentRef, foodRef)}}>Food</button>
          <button className='link glass' onClick={()=>{handleScroll(contentRef, dessertRef)}}>Dessert</button>
        </div>
        <TheHead side={"right"}></TheHead>
      </div>
      <div className='content' ref={contentRef}>
        <div className='intro'>Come enjoy the best cafe north of Antarctica.</div>
        <Sections javaRef={javaRef} drinksRef={drinksRef} foodRef={foodRef} dessertRef={dessertRef}></Sections>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </div>
    </div>
  );
}

export default App;
