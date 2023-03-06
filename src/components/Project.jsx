import React, { useEffect, useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import ImagesPrev from './ImagesPrev';
import gitHubIcon from '../images/icons8-octocat-25.png';
import { nanoid } from 'nanoid';

function Project({projects}) {
    const {projectId} = useParams();
    const [project , setProject] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        if(projects.length > 0){
            const filterdPtoject = projects.filter((proj) => {
                return proj.id === projectId
            })
            if(filterdPtoject.length > 0){
                setProject(...filterdPtoject)
            }else{
                navigate('/page-not-found-404')
            }

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
                <p className='render-limitation'>
                Please note that due to the limitations of the free hosting service used, it might take up to 30 seconds to fully load the first time. I apologize for any inconvenience this may cause and appreciate your patience. Thank you!
                </p>
                
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