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
  const contentRef = useRef(null);
  const logtheshit = ()=>{
    console.log('theshit');
  }

  return (
    <div className="App" >
      <TheHead></TheHead>
      <div className='links'>
        <button className='link glass' onClick={()=>{handleScroll(contentRef, javaRef)}}>Java</button>
      </div>
      <div className='content' ref={contentRef}>
        <div className='intro'>Come enjoy the best cafe north of Antarctica.</div>
        <Sections javaRef={javaRef}></Sections>
      </div>
    </div>
  );
}



export default App;







