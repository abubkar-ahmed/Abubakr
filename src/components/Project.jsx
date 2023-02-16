import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import ImagesPrev from './ImagesPrev';
import gitHubIcon from '../images/icons8-octocat-25.png';
import { nanoid } from 'nanoid';

function Project({projects}) {
    const {projectId} = useParams();
    const [project , setProject] = useState({});

    useEffect(() => {
        if(projects.length > 0){
            setProject(...projects.filter((proj) => {
                return proj.id === projectId
            }))
        }
        
    },[projects , projectId])

    
  return (
    <>
    {project.title && (
        <section className='project'>
            <h1>{project?.title}</h1>
            <ImagesPrev images={project?.images}/>
            <div className="desc info">
                <h3>Project Description</h3>
                <p>{project.description}</p>
            </div>
            <div className="tech info">
                <h3>Technology Stack</h3>
                <ul>
                    {project?.Lan?.map(e => {
                        return (
                            <li key={nanoid()}>{e}</li>
                        )
                    })}
                </ul>
            </div>
    
            <div className="link info">
                <h3>Live Site</h3>
                <p>Here is a link to {project.title}: <a href={project.url} target='_blank' rel='noopner noreferrer'>{project.title}</a></p>
                
            </div>
    
            {project.notePara && (
                <div className="note">
                    <h4>Note: You can log in as an admin with the following credentials:</h4>
                    <ul>
                        <li>{project.email}</li>
                        <li>{project.password}</li>
                    </ul>
                    <p>{project.notePara}</p>
                </div>
            )}
            
            <div className="code-repo info">
                <h3>Code Repository</h3>
                <ul>
                    <li>
                        <span>Front-End :</span> 
                        <a href={project.code.frontEnd} target='_blank' rel='noopner noreferrer'>
                            <img src={gitHubIcon} alt="gitHubIcon" />
                        </a>
                    </li>
                    {project.code.backEnd && (
                        <li>
                            <span>Back-End :</span> 
                            <a href={project.code.backEnd} target='_blank' rel='noopner noreferrer'>
                                <img src={gitHubIcon} alt="gitHubIcon" />
                            </a>
                        </li>
                    )}

                </ul>
            </div>
    
        </section>
        )}
    </>
  )
}

export default Project