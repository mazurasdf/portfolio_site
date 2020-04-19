import React from 'react';
import Project from '../components/Project';
import '../static/css/projects.css';
import Picross from '../static/img/picross.png';

const Projects = (props) => {
    return(
        <div id="projects">
            <h3 className="navy">projects</h3>

            <div id="projects-list">
                <Project
                    title="Example"
                    github="google.com"
                    image={Picross}
                />
                <Project
                    title="Example"
                    github="google.com"
                    image={Picross}
                />
                <Project
                    title="Example"
                    github="google.com"
                    image={Picross}
                />
                <Project
                    title="Example"
                    github="google.com"
                    image={Picross}
                />
                <Project
                    title="Example"
                    github="google.com"
                    image={Picross}
                />
            </div>
        </div>
    )
}

export default Projects;