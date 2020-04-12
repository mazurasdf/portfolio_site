import React from 'react';

const Contact = (props) => {
    return(
        <div className="contact d-block">
            <a href={props.link}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24">
                    <path d={props.src}/>
                </svg>
            </a>
        </div>
    )
}

export default Contact;