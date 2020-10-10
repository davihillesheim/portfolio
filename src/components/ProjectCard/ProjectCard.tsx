import React from 'react';

const ProjectCard = () => {
    return (
        <div className="project-card">
            <div className="project-content">
                <h3 className="project-title">
                    Projeto1
                </h3>
                <div className="project-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Mauris mollis vitae augue quis sagittis. 
                Donec at metus pharetra, dignissim felis a, ullamcorper felis. 
                </div>
                <ul className="project-tech-list"></ul>
                <div className="project-links"></div>
            </div>
            <div className="project-image">

            </div>
        </div>
    );
}

export default ProjectCard;