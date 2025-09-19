import React from 'react'

function Aboutsection() {
    return (
        <div className='aboutskills' style={{margin: "0px"}}>
            <div className='aboutline' style={{}}/>
            <p style={{color: "white", padding: "20px 0px"}}>About Me</p>
            <div className='skillsContainer' style={{}}
            >
                <div className='eachskill' style={{}}>
                    <p style={{color: "gray", fontSize: "15px", marginTop: "0px", textAlign: "start"}}>
                        I'm Akinola Victor, a freelance fullstack developer specialized in building performant,
                        maintainable web apps, I partner with startups and teams to ship production-ready products
                        with clear communication and dependable delivery.
                    </p>

                    <p style={{color: "gray", fontSize: "15px", marginTop: "30px", textAlign: "start"}}>
                        My philosophy: ship small, learn fast, iterate with purpose. I value clean architecture, 
                        accessible interfaces, and developer experience that scales with your product. From concept 
                        to deployment, i bring both tecnical rigor and product thinking.
                    </p>
                </div>

                <div className='eachskill' style={{}}>
                    <p style={{color: "gray", fontSize: "15px", marginTop: "0px", textAlign: "start"}}>
                        What i offer: End-to-End development, performance tuning, and team enablement.
                    </p>

                    <p style={{color: "gray", fontSize: "15px", marginTop: "23px", textAlign: "start"}}>
                        Engagements: Fixed-scope builds, ongoing retainers, and codebae rescue projects.
                    </p>

                    <p style={{color: "gray", fontSize: "15px", marginTop: "23px", textAlign: "start"}}>
                        Remote-First: Comfortable collaborating across time zones with async workflows.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Aboutsection
