import React from 'react'

function HomeSection6() {
    return (
        <div className='home6container' style={{}}>
            <p className='home6text1' style={{}}>
                Core Skills and Technologies That Drive My Development Journey
            </p>

            <div className='home6contentcontainers' style={{ }}>
                <div className='eachhome6content' style={{ }}>
                    <div style={{width: "40px", height: "40px", borderRadius: "20px", marginBottom: "30px"}}>
                        <img 
                            src="/icons/expert_code_white.svg" 
                            alt="code icon" 
                            style={{width: "40px", height: "40px", borderRadius: "30px"}}
                        />
                    </div>

                    <p style={{fontWeight: 500, fontSize: "20px", marginBottom: "30px"}}>
                        Expertise in Modern Web Development and Programming Languages
                    </p>

                    <p style={{color: "rgba(255,255,255,0.8)", fontSize: "15px"}}>Proficient in HTML, CSS, and, Javascript for dynamic web applications.</p>
                </div>
                <div className='eachhome6content' style={{ }}>
                    <div style={{width: "40px", height: "40px", borderRadius: "20px", marginBottom: "30px"}}>
                        <img 
                            src="/icons/framework_white.svg" 
                            alt="code icon" 
                            style={{width: "40px", height: "40px", borderRadius: "30px"}}
                        />
                    </div>

                    <p style={{fontWeight: 500, fontSize: "20px", marginBottom: "30px"}}>
                        Frameworks That Enhance My Development Efficiency and Creativity
                    </p>

                    <p style={{color: "rgba(255,255,255,0.8)", fontSize: "15px"}}>Skilled in React and Next for building responsive user interface.</p>
                </div>
                <div className='eachhome6content' style={{ borderBottom: "none" }}>
                    <div style={{width: "40px", height: "40px", borderRadius: "20px", marginBottom: "30px"}}>
                        <img 
                            src="/icons/database_white.svg" 
                            alt="code icon" 
                            style={{width: "40px", height: "40px", borderRadius: "30px"}}
                        />
                    </div>

                    <p style={{fontWeight: 500, fontSize: "20px", marginBottom: "30px"}}>
                        Database Management Skills for Robust Data Handling and Storage
                    </p>

                    <p style={{color: "rgba(255,255,255,0.8)", fontSize: "15px"}}>Experienced with MongoDB and Firebase for effective data management</p>
                </div>
            </div>
        </div>
    )
}

export default HomeSection6
