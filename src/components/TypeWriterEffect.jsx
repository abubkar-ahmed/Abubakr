import React, { useEffect, useRef, useState } from 'react'

function TypeWriterEffect({text , textIndex}) {

    const [displayedText, setDisplayedText] = useState('');
    const [counter, setCounter] = useState(0);
    const intervalRef = useRef(null);
  
    useEffect(() => {
      const typeWriter = () => {
        if (counter < text.length) {
          setDisplayedText(text.substring(0, counter + 1));
          setCounter(counter + 1);
        } else {
          clearInterval(intervalRef.current);
        }
      };
      if(textIndex === 2){
        intervalRef.current = setInterval(typeWriter, 25);
      }else{
        intervalRef.current = setInterval(typeWriter, 50);
      }
      
  
      return () => {
        clearInterval(intervalRef.current);
      };
    }, [counter, text]);
    
  return (
    <>
        {textIndex === 0 ? (
            <h1>{displayedText}</h1>
        ) : textIndex === 1 ? (
            <h2>{displayedText}</h2>
        ) : (
            <h3>{displayedText}</h3>
        )}
    </>
  )
}

export default TypeWriterEffect