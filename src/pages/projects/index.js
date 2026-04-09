import Stairs from '@/components/Stairs'
import React from 'react'
import {motion} from "framer-motion"
import Link from 'next/link'

function Index() {
    return (
        <div className='project_container'>
            <Stairs>
                <motion.p 
                    style={{color: "white", fontWeight: "600"}}
                    initial={{opacity: 0, x: -200}}
                    whileInView={{opacity: 1, x:0}}
                    transition={{duration: 1, delay: 0}}
                >
                    My Projects
                </motion.p>

                <motion.p 
                    style={{color: "gray", opacity: .7, fontWeight: 400, fontSize: "calc(100% - 2px)", marginTop: "10px"}}
                    initial={{opacity: 0, x: -200}}
                    whileInView={{opacity: 1, x:0}}
                    transition={{duration: 1, delay: 0}}
                >
                    Projects i have worked upon
                </motion.p>

                <div className='eachprojcon'>
                    <motion.div 
                        className='each_project_container'
                        initial={{opacity: 0, x: -200}}
                        whileInView={{opacity: 1, x:0}}
                        transition={{duration: 1, delay: 0}}
                    >
                        <div className='eachprojtextcon w-full'>
                            <p style={{fontWeight: 600, fontSize: "calc(100% + 10px)", marginBottom: "20px"}}>
                                Health Enlight Initiative
                            </p>
                            
                            <p style={{opacity: .7, fontSize: "15px"}}>
                                I created a website for an NGO to help them showcase their activites, blog posts and engagements in making the world a better place
                            </p>

                            <Link href={"https://www.thehealthenlightinitiative.org/"} style={{width: "100px", cursor: "pointer", textDecoration: "none", height: "30px", marginTop: "20px", borderRadius: "50px", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "transparent", border: "1px solid black"}}>
                                <p style={{fontSize: "calc(100% - 3px)", opacity: .7, fontWeight: 600}}>View Project</p>
                            </Link>
                        </div>

                        <div className='eachprojimgconx w-full'>
                            {/* <p>dd</p> */}
                            <img 
                                src="/assets/hlinitiative.jpg" 
                                alt="code icon" 
                                style={{aspectRatio: "auto", minHeight: "350px", width: "100%",margin: 0, padding: 0, }}
                                className='eachprojimgcon object-cover object-center'
                            />
                        </div>
                    </motion.div>

                    <motion.div 
                        className='each_project_container eachProjectSecond'
                        initial={{opacity: 0, x: -200}}
                        whileInView={{opacity: 1, x:0}}
                        transition={{duration: 1, delay: 0}}
                    >
                        
                        <div className='eachprojtextcon'>
                            <p style={{fontWeight: 600, fontSize: "calc(100% + 10px)", marginBottom: "20px"}}>
                                Baynt
                            </p>
                            
                            <p style={{opacity: .7, fontSize: "15px"}}>
                                I created this personal project in order to showcase
                                some of the stuffs i can do. This is a SaaS project.
                            </p>

                            <div onClick={()=>{window.open('https://baynt.vercel.app', "_self")}} style={{width: "100px", cursor: "pointer", height: "30px", marginTop: "20px", borderRadius: "50px", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "transparent", border: "1px solid black"}}>
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
                    </motion.div>
                    
                    <motion.div 
                        className='each_project_container'
                        initial={{opacity: 0, x: -200}}
                        whileInView={{opacity: 1, x:0}}
                        transition={{duration: 1, delay: 0}}
                    >
                        <div className='eachprojtextcon'>
                            <p style={{fontWeight: 600, fontSize: "calc(100% + 10px)", marginBottom: "20px"}}>
                                Portfolio
                            </p>
                            
                            <p style={{opacity: .7, fontSize: "15px"}}>
                                I created this personal project in order to showcase
                                some of the stuffs i can do. This is my portfolio website.
                            </p>

                            <Link href={"/"} style={{width: "100px", cursor: "pointer", textDecoration: "none", height: "30px", marginTop: "20px", borderRadius: "50px", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "transparent", border: "1px solid black"}}>
                                <p style={{fontSize: "calc(100% - 3px)", opacity: .7, fontWeight: 600}}>View Project</p>
                            </Link>
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
                    </motion.div>
                </div>
            </Stairs>
        </div>
    )
}

export default Index
