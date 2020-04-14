import React from 'react';
import Skill from '../components/Skill';
import '../static/css/skills.css'
import { ReactComponent as Javascript } from '../static/svg/javascript.svg';
import { ReactComponent as Python } from '../static/svg/python.svg';
import { ReactComponent as DotNetCore } from '../static/svg/dot_net_core.svg';
import { ReactComponent as Node } from '../static/svg/node.svg';
import { ReactComponent as Django } from '../static/svg/django.svg';
import { ReactComponent as ReactLogo } from '../static/svg/react.svg';
import { ReactComponent as HTML5Logo } from '../static/svg/html.svg';
import { ReactComponent as CSSLogo } from '../static/svg/css.svg';
import { ReactComponent as MySQLLogo } from '../static/svg/mysql.svg';


const Skills = (props) => {
    return(
        <div id="skills">
            <h3 className="navy">skills</h3>

            <div id="skills-list">
                {/* TODO update with proper SVGs */}
                <Skill
                    text="javascript">
                    <Javascript />
                </Skill>
                <Skill
                    text="python">
                    <Python />
                </Skill>
                <Skill
                    text=".net core">
                    <DotNetCore />
                </Skill>
                <Skill
                    text="node.js">
                    <Node />
                </Skill>
                <Skill
                    text="django">
                    <Django />
                </Skill>
                <Skill
                    text="react.js">
                    <ReactLogo />
                </Skill>
                <Skill
                    text="html">
                    <HTML5Logo />
                </Skill>
                <Skill
                    text="css">
                    <CSSLogo />
                </Skill>
                <Skill
                    text="mysql">
                    <MySQLLogo />
                </Skill>
            </div>
        </div>
    )
}

export default Skills;