import React, { useState } from 'react';

const Skill = (props) => {
    return(
        <div className="skill d-block">
            {props.children}
            <p>{props.text}</p>
        </div>
    )
}

export default Skill;