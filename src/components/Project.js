import React, { useState } from 'react';

const Project = (props) => {
    //TODO fix displaying on multiple lines for the link boxes
    const [background, setBackground] = useState({
        backgroundImage: `url(${props.image})`,
        height: "100%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
    })
    const [details, setDetails] = useState({
        display: "none"
    })

    const handleDetails = () => {
        setBackground({
            backgroundImage: `url(${props.image})`,
            filter: "grayscale(20%) blur(1px) brightness(65%)",
            height: "100%",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover"
        });
        setDetails({});
    }

    const handleResetDetails = () => {
        setBackground({
            backgroundImage: `url(${props.image})`,
            filter: "grayscale(0%)",
            height: "100%",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover"
        });
        setDetails({
            display: "none"
        });
    }

    return(
        <div
        className="project"
        onMouseOver={handleDetails}
        onMouseOut={handleResetDetails}>
            <div style={background}></div>
            <div className="project-details" style={details}>
                <p className="project-details-text">{props.title}</p>
                {props.github &&
                <a className="detail-box project-details-text" href={props.github}>github</a>}
                {props.publishedDemo &&
                <a className="detail-box project-details-text" href={props.publishedDemo}>published demo</a>}
                {props.videoDemo &&
                <a className="detail-box project-details-text" href={props.videoDemo}>video demo</a>}
            </div>
        </div>
    )
}

export default Project;