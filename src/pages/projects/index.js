import Stairs from '@/components/Stairs'
import React from 'react'

function Index() {
    return (
        <div className='project_container'>
            <Stairs>
                <p style={{color: "white", fontWeight: "600"}}>
                    My Projects
                </p>

                <p style={{opacity: .7, fontWeight: 400, fontSize: "calc(100% - 2px)", marginTop: "10px"}}>
                    Projects i have worked upon
                </p>

                <div className='eachprojcon'>
                    <div className='each_project_container'>
                        <div className='eachprojtextcon'>
                            <p style={{fontWeight: 600, fontSize: "calc(100% + 10px)", marginBottom: "20px"}}>
                                Portfolio
                            </p>
                            
                            <p style={{opacity: .7, fontSize: "15px"}}>
                                I created this personal project in order to showcase
                                some of the stuffs i can do. This is my portfolio website.
                            </p>

                            <div style={{width: "100px", cursor: "pointer", height: "30px", marginTop: "20px", borderRadius: "50px", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "transparent", border: "1px solid black"}}>
                                <p style={{fontSize: "calc(100% - 3px)", opacity: .7, fontWeight: 600}}>View Project</p>
                            </div>
                        </div>

                        <div className='eachprojimgconx'>
                            {/* <p>dd</p> */}
                            <img 
                                src="/assets/portfolio1.jpg" 
                                alt="code icon" 
                                style={{aspectRatio: "auto", minHeight: "350px",margin: 0, padding: 0, }}
                                className='eachprojimgcon'
                            />
                        </div>
                    </div>

                    <div className='each_project_container eachProjectSecond'>
                        
                        <div className='eachprojtextcon'>
                            <p style={{fontWeight: 600, fontSize: "calc(100% + 10px)", marginBottom: "20px"}}>
                                Brynt
                            </p>
                            
                            <p style={{opacity: .7, fontSize: "15px"}}>
                                I created this personal project in order to showcase
                                some of the stuffs i can do. This is a SaaS project.
                            </p>

                            <div style={{width: "100px", cursor: "pointer", height: "30px", marginTop: "20px", borderRadius: "50px", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "transparent", border: "1px solid black"}}>
                                <p style={{fontSize: "calc(100% - 3px)", opacity: .7, fontWeight: 600}}>View Project</p>
                            </div>
                        </div>

                        <div className='eachprojimgcon eachprojimgcon2'>
                            <img 
                                src="/assets/portfolio2.jpg" 
                                alt="code icon" 
                                style={{aspectRatio: "auto",margin: 0, padding: 0, }}
                                className='eachprojimgcon eachprojimgcon2  eachprojimgcon3'
                            />
                        </div>
                    </div>
                </div>
            </Stairs>
        </div>
    )
}

export default Index
