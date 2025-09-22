import React from 'react'
import {motion} from "framer-motion"

function HomeSection7() {
    return (
        <div className='home6container' style={{backgroundColor: "black",}}>
            <motion.p 
                className='home6text1' 
                style={{ }}
                initial={{opacity: 0, x: -200}}
                whileInView={{opacity: 1, x:0}}
                transition={{duration: 1, delay: 0}}
            >
                Transforming ideas into reality through expert freelance development services.
            </motion.p>
            <motion.div 
                className='home6contentcontainers' 
                style={{ }}
                initial={{opacity: 0, x: -400}}
                whileInView={{opacity: 1, x:0}}
                transition={{duration: 1, delay: 0.5}}
            >
                <div className='eachhome6content' style={{ }}>
                    <div style={{width: "40px", height: "40px", margin: "0px auto 30px auto"}}>
                        <img 
                            src="/icons/collaborative_projects.svg" 
                            alt="code icon" 
                            style={{width: "40px", height: "40px", }}
                        />
                    </div>

                    <p style={{fontWeight: 500, fontSize: "23px", marginBottom: "30px"}}>
                        Collaborative projects that drive innovation and success for your business.
                    </p>

                    <p style={{color: "gray", fontSize: "15px"}}>My services are designed to meet your unique development needs</p>
                </div>

                <div className='eachhome6content' style={{}}>
                    <div style={{width: "40px", height: "40px", margin: "0px auto 30px auto"}}>
                        <img 
                            src="/icons/consultant.svg" 
                            alt="code icon" 
                            style={{width: "40px", height: "40px", }}
                        />
                        
                    </div>

                    <p style={{fontWeight: 500, fontSize: "23px", marginBottom: "30px"}}>
                        Consulting services that empower you to make informed technology decisions.
                    </p>

                    <p style={{color: "gray", fontSize: "15px"}}>
                        Leverage my expertise to navigate the complexities of software development.
                    </p>
                </div>

                <div className='eachhome6content' style={{borderBottom: "none"}}>
                    <div style={{width: "40px", height: "40px", margin: "0px auto 30px auto"}}>
                        <img 
                            src="/icons/freelance.svg" 
                            alt="code icon" 
                            style={{width: "40px", height: "40px", }}
                        />
                    </div>

                    <p style={{fontWeight: 500, fontSize: "23px", marginBottom: "30px"}}>
                        Freelance development tailored to your project requirements and deadlines.
                    </p>

                    <p style={{color: "gray", fontSize: "15px"}}>
                        I provide flexible solutions that adapt to your evelving needs.
                    </p>
                </div>
            </motion.div>
        </div>
    )
}

export default HomeSection7
