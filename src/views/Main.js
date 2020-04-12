import React from 'react';
import Contact from '../components/contact';
import linkedin from '../static/svg/linkedin.svg';

const Main = (props) => {
    return(
        <div id="main">
            <h1 className="navy">michael mazur</h1>
            <h3 className="navy">software engineer</h3>
            <p>i'm a software developer with experience in react/node, python, and c#. i studied software development at kent state university and, after developing software for a health-tech startup in chicago, attended coding dojo, a coding bootcamp in chicago. being a developer, i strive to collaborate effectively and put out clean and efficient code. i aim to put my high energy into learning from more senior developers and elevating my knowledge and experience as a developer. </p>
        
            <br/>

            <div id="contact-list">
                <Contact
                    src={"M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"}
                    link="https://www.linkedin.com/in/mazur-michael/"
                />
                <Contact
                    src={"M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"}
                    link="https://github.com/mazurasdf"
                />
                <Contact
                    src={"M 0 3 v 18 h 24 v -18 h -24 Z m 6.623 7.929 l -4.623 5.712 v -9.458 l 4.623 3.746 Z m -4.141 -5.929 h 19.035 l -9.517 7.713 l -9.518 -7.713 Z m 5.694 7.188 l 3.824 3.099 l 3.83 -3.104 l 5.612 6.817 h -18.779 l 5.513 -6.812 Z m 9.208 -1.264 l 4.616 -3.741 v 9.348 l -4.616 -5.607 Z"}
                    link="mailto:mazurasdf@gmail.com"
                />
            </div>
        </div>
    )
}

export default Main;