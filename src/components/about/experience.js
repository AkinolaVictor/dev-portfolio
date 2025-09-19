import React from 'react'

function Experience() {
    return (
        <div style={{width: "100%", color: "white", padding: "0px 40px"}}>
            <div style={{width: "100%", height: "1px", backgroundColor: "rgba(255, 255, 255, 0.44)"}}/>
            <p style={{color: "white", padding: "20px 0px"}}>About Me</p>
            <div style={{
                    display: "flex", justifyContent: "space-between", alignItems: "center",
                    // flexWrap: "wrap",
                    width: "100%",
                }}
            >
                <div style={{width: "calc(50% - 40px)", padding: "20px", marginTop: "20px 10px", border: "1px solid rgba(255,255,255,0.5)", borderRadius: "20px"}}>
                    <p style={{color: "gray", fontSize: "15px", marginTop: "0px"}}>
                        I'm Akinola Victor, a freelance fullstack developer specialized in building performant,
                        maintainable web apps, I partner with startups and teams to ship production-ready products
                        with clear communication and dependable delivery.
                    </p>

                    <p style={{color: "gray", fontSize: "15px", marginTop: "30px"}}>
                        My philosophy: ship small, learn fast, iterate with purpose. I value clean architecture, 
                        accessible interfaces, and developer experience that scales with your product. From concept 
                        to deployment, i bring both tecnical rigor and product thinking.
                    </p>
                </div>

                <div style={{width: "calc(50% - 40px)", padding: "20px", marginTop: "20px 10px", border: "1px solid rgba(255,255,255,0.5)", borderRadius: "20px"}}>
                    <p style={{color: "gray", fontSize: "15px", marginTop: "0px"}}>
                        What i offer: End-to-End development, performance tuning, and team enablement.
                    </p>

                    <p style={{color: "gray", fontSize: "15px", marginTop: "23px"}}>
                        Engagements: Fixed-scope builds, ongoing retainers, and codebae rescue projects.
                    </p>

                    <p style={{color: "gray", fontSize: "15px", marginTop: "23px"}}>
                        Remote-First: Comfortable collaborating across time zones with async workflows.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Experience
