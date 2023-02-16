import React from 'react'
import  { useNavigate }  from 'react-router-dom';

function Projects({projects}) {
  const navigate = useNavigate();

  return (
    <section className="Projects" id="work">
      <h1><span>02. </span>Some Things I’ve Built </h1>
      <div className="container">
        {
          projects.map(proj => {
            return (
                <div className="project-container" key={proj.id}>
                  <div className="img-container">
                    <img src={proj.images[0]} alt={proj.title}></img>
                  </div>
                  <div className="project-info">
                    <h2>{proj.title}</h2>
                    <p>{proj.shortDec}</p>
                    <button onClick={() => navigate(`/project/${proj.id}`)}>
                      View More
                    </button>
                  </div>
                </div>
            )
          })
        }
      </div>
  </section>
  )
}

export default Projects