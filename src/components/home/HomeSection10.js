import React from 'react'

function HomeSection10() {
    return (
        <div className='homecontainer10' style={{ }}>
            <p style={{marginTop: "50px", fontWeight: "600"}}>
                Process
            </p>
            <p className='home10maintext' style={{}}>
                From Idea to Reality: My Development Journey
            </p>
            <p className='home10text1' style={{}}>
                I transform your vision into a functional product through a structured process. 
                My approach ensures clarity, collaboration and quality at every stage.
            </p>

            <div className='home10container' style={{}}>
                
                <div className='home10eachcontent' style={{}}>
                    <div className='' style={{}}>
                        <img
                            className='home10imageCon'
                            style={{aspectRatio: "auto"}}
                            src='/assets/yr.jpg'
                        />
                    </div>

                    <p style={{fontWeight: "600", fontSize: "25px", marginTop: "30px", }}>Step 1: Understanding Your Requirements</p>
                    <p style={{marginTop: "30px", color: "rgba(255,255,255,0.8)", fontSize: "15px"}}>I start by clarifying your ideas and objectives</p>
                </div>
                
                <div className='home10eachcontent' style={{}}>
                    <div className='' style={{}}>
                        <img
                            className='home10imageCon'
                            style={{aspectRatio: "auto"}}
                            src='/assets/dap.jpg'
                        />
                    </div>

                    <p style={{fontWeight: "600", fontSize: "25px", marginTop: "30px", }}>Step 2: Design and Prototyping</p>
                    <p style={{marginTop: "30px", color: "rgba(255,255,255,0.8)", fontSize: "15px"}}>I create wireframes and prototypes for your review</p>
                </div>
                
                <div className='home10eachcontent' style={{borderBottom: "none"}}>
                    <div className='' style={{}}>
                        <img
                            className='home10imageCon'
                            style={{aspectRatio: "auto"}}
                            src='/assets/dat2.jpg'
                        />
                    </div>

                    <p style={{fontWeight: "600", fontSize: "25px", marginTop: "30px", }}>Step 3: Development and Testing</p>
                    <p style={{marginTop: "30px", color: "rgba(255,255,255,0.8)", fontSize: "15px"}}>I build your project while rigorously testing for quality</p>
                </div>
                
            </div>
        </div>
    )
}

export default HomeSection10
