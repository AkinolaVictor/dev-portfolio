import React, { useEffect, useState } from 'react'
import {motion} from "framer-motion"

function HomeSection6() {
    const [mobile, setMobile] = useState(false)
    // if (typeof window === 'undefined') {
    //     global.window = {}
    // }
    // const widthX = window.innerWidth
    // console.log({widthX});
    // useEffect(()=>{
    //     const isMobile = window.innerWidth < 768;
    //     setMobile(isMobile)
    // }, [])
    
    return (
        <div className='home6container' style={{}}>
            <motion.p 
                className='home6text1' style={{}}
                initial={{opacity: 0, x: -200}}
                whileInView={{opacity: 1, x:0}}
                transition={{duration: 1, delay: 0}}
            >
                Core Skills and Technologies That Drive My Development Journey
            </motion.p>

            <div 
                className='home6contentcontainers' 
                style={{ }}
                initial={{opacity: 0, x: mobile?0:-400, y: mobile?200:0}}
                whileInView={{opacity: 1, y:0, x:0}}
                transition={{duration: 1, delay: 0.5}}
            >
                <motion.div 
                    initial={{opacity: 0}}
                    whileInView={{opacity: 1}}
                    transition={{duration: 1, delay: 0.5}}
                    className='eachhome6content' style={{ }}
                >
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
                </motion.div>

                <motion.div 
                    initial={{opacity: 0}}
                    whileInView={{opacity: 1}}
                    transition={{duration: 1, delay: 0.5}}
                    className='eachhome6content' style={{ }}
                >
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
                </motion.div>
                
                <motion.div 
                    initial={{opacity: 0}}
                    whileInView={{opacity: 1}}
                    transition={{duration: 1, delay: 0.5}}
                    className='eachhome6content' style={{ borderBottom: "none" }}
                >
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
                </motion.div>
            </div>
        </div>
    )
}

export default HomeSection6
