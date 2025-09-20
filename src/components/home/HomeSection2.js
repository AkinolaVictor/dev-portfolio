import React from 'react'
import {motion} from "framer-motion"

function HomeSection2() {
    return (
        <div className='homesection2' style={{}}>
            <div className='homesection1Texts2' style={{color: "black"}}>
                {/* <p className='home1text1' style={{width: "400px", fontWeight: 600, fontSize: "35px", display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start"}}> */}
                <motion.p 
                    className='home1text1_2' 
                    style={{}}
                    initial={{opacity: 0, x: 200}}
                    whileInView={{opacity: 1, x:0}}
                    transition={{duration: 1.2, delay: 0}}
                >
                    {/* Crafting Innovative Solutions For Tomorrows Challenges */}
                    Meet a passionate developer 
                    dedicated to crafting innovative
                    software solutions.
                </motion.p>
                
                <motion.p 
                    className='home1text2_1' 
                    style={{marginBottom: "30px", fontSize: "15px", color: "rgba(0,0,0,0.9)"}}
                    initial={{opacity: 0, x: 200}}
                    whileInView={{opacity: 1, x:0}}
                    transition={{duration: 1.2, delay: 0.8}}
                >
                    With a degree in computer science and a knack for problem solving,
                    i specialize in web and mobile application development. My interests 
                    include exploring new technologies, contributing to open-source 
                    projects and hiking in nature.
                </motion.p>
                {/* <div style={{padding: "10px 30px", width: "150px", textAlign: "center", fontSize: "14px", marginTop: "20px", backgroundColor: "white", borderRadius: "40px", color: "black"}}>
                    Contact Me
                </div> */}
            </div>

            <div className='homesec1_image'>
                <motion.img
                    className='homesec1_image'
                    style={{aspectRatio: "auto"}}
                    src='/assets/software solutions.jpg'
                    initial={{opacity: 0, scale: 0}}
                    whileInView={{opacity: 1, scale: 1}}
                    transition={{duration: 1.2, delay: 0}}
                />
            </div>

        </div>
    )
}

export default HomeSection2
