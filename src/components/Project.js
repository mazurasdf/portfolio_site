import React from 'react';

const Project = (props) => {
    const style = {
        backgroundImage: `url(${props.image})`
    }

    return(
        <div className="project" style={style}>
            <p>{props.title}</p>
            <a href={props.github}>GitHub</a>
        </div>
    )
}

export default Project;