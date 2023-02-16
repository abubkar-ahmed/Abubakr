import React from 'react'

function AboutMe() {
  return (
    <section className='about-me' id='about-me'>
        <h1><span>01. </span>About Me</h1>
        <p>
        Hi, I'm Abubakr Farah, a full stack developer with a B.Sc in Electronics Engineering. I have a passion for coding and a drive to constantly improve, making me a valuable asset in the field. I am skilled in all key programming languages and able to code and deploy projects efficiently. My diverse background sets me apart and I am always seeking new challenges to grow my skills.
        </p>
        <h2>Here are a few technologies I’ve been working with recently:</h2>
        <div className='skill'>
            <ul>
                <li> HTML5</li>
                <li>{`CSS3 & SCSS`}</li>
                <li>JavaScript</li>
                <li>React JS</li>
                <li className='long'>{`Node & Express Js`}</li>
                <li>MongoDB</li>
                <li>MySQL</li>
                <li>Firebase</li>
                <li>{`Git & Github`}</li>
            </ul>
        </div>
    </section>
  )
}

export default AboutMe