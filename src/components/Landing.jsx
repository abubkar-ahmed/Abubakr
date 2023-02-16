import React, { useEffect, useRef, useState } from 'react'
// import {Link} from 'react-scroll';
import TypeWriterEffect from './TypeWriterEffect';
import {Link} from 'react-router-dom'

function Landing() {
    const [h1, seth1] = useState(false);
    const [h2, seth2] = useState(false);
    const [h3, seth3] = useState(false);
    const [link , setLink] = useState(false);

    useEffect(() => {
        seth1(true);
        setTimeout(() => {
            seth2(true);
        },1000)
        setTimeout(() => {
            seth3(true);
        },2000)
        setTimeout(() => {
            setLink(true);
        },5000)
    },[]);


    const texts = [
        'Hi, My Name Is',
        'Abubakr Farah.',
        "I'm Full Stack Developer. Building innovative web solutions, design and functionality. Let's create something great!"
    ]


  return (
    <section className='landing' id='landing'>
        {h1 && <TypeWriterEffect text={texts[0]} textIndex={0}/>}
        {h2 && <TypeWriterEffect text={texts[1]} textIndex={1}/>}
        {h3&& <TypeWriterEffect text={texts[2]} textIndex={2}/>}
        {link && (
            <Link to="/projects" > Check My Projects</Link>
        )}
       


    </section>
  )
}

export default Landing