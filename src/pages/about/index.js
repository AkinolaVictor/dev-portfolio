import AboutMe from '@/components/about/aboutMe'
import Aboutsection from '@/components/about/aboutsection'
import Experience from '@/components/about/experience'
import Skills from '@/components/about/skills'
import Stairs from '@/components/Stairs'
import React from 'react'

function About() {
    return (
        <div style={{padding: "0px", height: "auto", backgroundColor: "black", width: "100%"}}>
            <Stairs>
                <div className='home-main' style={{}}>
                    <AboutMe />
                    <Aboutsection />
                    <Skills />
                    {/* <Experience /> */}
                </div>
            </Stairs>
        </div>
    )
}

export default About
