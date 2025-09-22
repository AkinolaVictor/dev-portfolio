import React from 'react'
import {motion} from "framer-motion"

function HomeSection8() {
    return (
        <div className='homesec8container' style={{}}>
            <motion.p 
                initial={{opacity: 0, x: -200}}
                whileInView={{opacity: 1, x:0}}
                transition={{duration: 1, delay: 0}}
                style={{marginTop: "50px", fontWeight: 600, marginBottom: "30px", fontSize: "30px"}}
            >
                Client Feedback
            </motion.p>

            <motion.p
                initial={{opacity: 0, x: -200}}
                whileInView={{opacity: 1, x:0}}
                transition={{duration: 1, delay: 0}}
            >
                A true professional with exceptional coding skills.
            </motion.p>
            <motion.div 
                className='home8contentcontainer' 
                style={{}}
                initial={{opacity: 0, x: -400}}
                whileInView={{opacity: 1, x:0}}
                transition={{duration: 1, delay: 0.5}}
            >
                <div className='eachhome8item' style={{}}>
                    <div style={{}}>
                        {
                            [1,1,1,1,1].map((item, index)=>{
                                return(
                                    <img 
                                        key={index}
                                        src="/icons/star_white.svg" 
                                        alt="code icon" 
                                        style={{width: "20px", height: "20px", }}
                                    />
                                )
                            })
                        }
                    </div>

                    <p style={{marginTop: "30px", fontWeight: 600, fontSize: "20px"}}>
                        "His attention to detail is unmatched in the industry."
                    </p>

                    <div style={{width: "50px", height: "50px", display:"flex", justifyContent: "center", alignItems: "center", borderRadius: "25px", border: "1px solid rgba(255,255,255,0.5)", marginTop: "25px"}}>
                        <img 
                            src="/icons/user.svg" 
                            alt="code icon" 
                            style={{width: "30px", height: "30px", }}
                        />
                    </div>
                    <p style={{fontWeight: "600", marginTop: "20px"}}>John Doe</p>
                    <p style={{marginTop: "10px"}}>Project Manager, TechCorp</p>
                </div>
                <div className='eachhome8item' style={{}}>
                    <div style={{}}>
                        {
                            [1,1,1].map((item, index)=>{
                                return(
                                    <img 
                                        src="/icons/star_white.svg" 
                                        alt="code icon" 
                                        key={index}
                                        style={{width: "20px", height: "20px", }}
                                    />
                                )
                            })
                        }
                    </div>

                    <p style={{marginTop: "30px", fontWeight: 600, fontSize: "20px"}}>
                        "His attention to detail is unmatched in the industry."
                    </p>

                    <div style={{width: "50px", height: "50px", display:"flex", justifyContent: "center", alignItems: "center", borderRadius: "25px", border: "1px solid rgba(255,255,255,0.5)", marginTop: "25px"}}>
                        <img 
                            src="/icons/user.svg" 
                            alt="code icon" 
                            style={{width: "30px", height: "30px", }}
                        />
                    </div>
                    <p style={{fontWeight: "600", marginTop: "20px"}}>John Doe</p>
                    <p style={{marginTop: "10px"}}>Project Manager, TechCorp</p>
                </div>
                <div className='eachhome8item' style={{borderBottom: "none"}}>
                    <div style={{}}>
                        {
                            [1,1,1,1].map((item, index)=>{
                                return(
                                    <img 
                                        src="/icons/star_white.svg" 
                                        alt="code icon" 
                                        key={index}
                                        style={{width: "20px", height: "20px", }}
                                    />
                                )
                            })
                        }
                    </div>

                    <p style={{marginTop: "30px", fontWeight: 600, fontSize: "20px"}}>
                        "His attention to detail is unmatched in the industry."
                    </p>

                    <div style={{width: "50px", height: "50px", display:"flex", justifyContent: "center", alignItems: "center", borderRadius: "25px", border: "1px solid rgba(255,255,255,0.5)", marginTop: "25px"}}>
                        <img 
                            src="/icons/user.svg" 
                            alt="code icon" 
                            style={{width: "30px", height: "30px", }}
                        />
                    </div>
                    <p style={{fontWeight: "600", marginTop: "20px"}}>John Doe</p>
                    <p style={{marginTop: "10px"}}>Project Manager, TechCorp</p>
                </div>
            </motion.div>
        </div>
    )
}

export default HomeSection8
