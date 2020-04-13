import React from 'react';
import Skill from '../components/Skill';
import '../static/css/skills.css';
import { ReactComponent as Linkedin } from '../static/svg/linkedin.svg';
import { ReactComponent as Javascript } from '../static/svg/javascript.svg';

const Skills = (props) => {
    return(
        <div id="skills">
            <h3 className="navy">skills</h3>

            <div id="skills-list">
                //TODO update with proper SVGs
                <Skill
                    text="Javascript">
                    <Javascript />
                </Skill>
                <Skill
                    text="Javascript">
                    <Javascript />
                </Skill>
                <Skill
                    text="Javascript">
                    <Javascript />
                </Skill>
                <Skill
                    text="Javascript">
                    <Javascript />
                </Skill>
                <Skill
                    text="Javascript">
                    <Javascript />
                </Skill>
                <Skill
                    text="Javascript">
                    <Javascript />
                </Skill>
                <Skill
                    text="Javascript">
                    <Javascript />
                </Skill>
                <Skill
                    text="Javascript">
                    <Javascript />
                </Skill>
                <Skill
                    text="Javascript">
                    <Javascript />
                </Skill>
            </div>
        </div>
    )
}

export default Skills;