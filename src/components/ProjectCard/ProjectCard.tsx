import React from 'react';

type CardProps = {
    img: string,
    title: string,
    description: string,
    tech: [string],
    github: string,
    external: string
}

const ProjectCard = ({ img, title, description, tech, github, external } : CardProps) => {
    return (
        <div className="project-card">
            <div className="project-content">
                <h3 className="project-title">
                    {title}
                </h3>
                <div className="project-description">
                    <p>{description}</p> 
                </div>
                <ul className="project-tech-list">
                    {tech.map((tech, i) => (
                        <li key={i}>{tech}</li>
                    ))}
                </ul>
                <div className="project-links">
                    <a href={github}>svg later</a>
                    <a href={external}>svg later</a>
                </div>
            </div>
            <div className="project-image">
                <img alt="project page" src={img}/>
            </div>
        </div>
    );
}

export default ProjectCard;