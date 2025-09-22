import React from 'react'
import {motion} from "framer-motion"

function Skills() {
    return (
        <motion.div 
            className='aboutskills' 
            style={{}}
            initial={{opacity: 0, x: 400}}
            whileInView={{opacity: 1, x: 0}}
            transition={{duration: 1.2}}
        >
            <div className='aboutline' style={{}}/>
            <p style={{margin: "20px 0px"}}>Skills</p>

            <div className='skillsContainer' style={{}}>
                <div style={{width: "auto", padding: "50px 100px", margin: "20px 0px", borderRadius: "50px", backgroundColor: "#414141"}}>
                    <div style={{width: "auto", marginBottom: "20px"}}>
                        <p style={{fontWeight: 600}}>Frontend</p>
                        <div style={{width: "65px", marginTop: "5px", height: "1px", backgroundColor: "rgba(255, 255, 255, 0.44)"}}/>
                    </div>
                    <p style={{fontSize: "15px", marginBottom: "7px", }}>HTML</p>
                    <p style={{fontSize: "15px", marginBottom: "7px", }}>CSS</p>
                    <p style={{fontSize: "15px", marginBottom: "7px", }}>JavaScript</p>
                    <p style={{fontSize: "15px", marginBottom: "7px", }}>React</p>
                    <p style={{fontSize: "15px", marginBottom: "0px", }}>Next</p>
                </div>

                <div style={{width: "auto", padding: "50px 100px", margin: "20px 0px", borderRadius: "50px", backgroundColor: "#414141"}}>
                    <div style={{width: "auto", marginBottom: "20px"}}>
                        <p style={{fontWeight: 600}}>Backend</p>
                        <div style={{width: "65px", marginTop: "5px", height: "1px", backgroundColor: "rgba(255, 255, 255, 0.44)"}}/>
                    </div>
                    <p style={{fontSize: "15px", marginBottom: "7px", }}>Node.js</p>
                    <p style={{fontSize: "15px", marginBottom: "7px", }}>Express.js</p>
                    <p style={{fontSize: "15px", marginBottom: "7px", }}>Socket.io</p>
                    <p style={{fontSize: "15px", marginBottom: "7px", }}>Web-push</p>
                    <p style={{fontSize: "15px", marginBottom: "0px", }}>Lots more</p>
                </div>

                <div style={{width: "auto", padding: "50px 100px", margin: "20px 0px", borderRadius: "50px", backgroundColor: "#414141"}}>
                    <div style={{width: "auto", marginBottom: "20px"}}>
                        <p style={{fontWeight: 600}}>Database</p>
                        <div style={{width: "65px", marginTop: "5px", height: "1px", backgroundColor: "rgba(255, 255, 255, 0.44)"}}/>
                    </div>
                    <p style={{fontSize: "15px", marginBottom: "7px", }}>MongoDB</p>
                    <p style={{fontSize: "15px", marginBottom: "7px", }}>Firebase</p>
                    <p style={{fontSize: "15px", marginBottom: "7px", color: "#414141"}}>JavaScript</p>
                    <p style={{fontSize: "15px", marginBottom: "7px", color: "#414141"}}>React</p>
                    <p style={{fontSize: "15px", marginBottom: "0px", color: "#414141"}}>Next</p>
                </div>
            </div>
        </motion.div>
    )
}

export default Skills
