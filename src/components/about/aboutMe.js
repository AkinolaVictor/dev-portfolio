import Link from 'next/link'
import React from 'react'
import {motion} from "framer-motion"

function AboutMe() {
    return (
        <div className='homesection1' style={{}}>
            <div className='homesection1Texts'>
                <motion.p 
                    style={{color: "gray", fontWeight: 600, fontSize: "15px", marginBottom: "20px"}}
                    initial={{opacity: 0, x: -200}}
                    whileInView={{opacity: 1, x: 0}}
                    transition={{duration: 1.2}}
                >
                    Fullstack Developer
                </motion.p>

                <motion.p 
                    className='home1text1' 
                    style={{}}
                    initial={{opacity: 0, x: -200}}
                    whileInView={{opacity: 1, x: 0}}
                    transition={{duration: 1.2}}
                >
                    Crafting digital experiences that are fast, accessible, and, reliable.
                </motion.p>
                
                <motion.p 
                    className='home1text2' 
                    style={{ color: "gray",  fontSize: "15px"}}
                    initial={{opacity: 0, x: -200}}
                    whileInView={{opacity: 1, x: 0}}
                    transition={{duration: 1.2}}
                >
                    I design and build end-to-end applications---turning complex ideas into delightful products.
                </motion.p>

                <motion.div 
                    className='home1button1' style={{}}
                    initial={{opacity: 0, x: -100}}
                    whileInView={{opacity: 1, x:0}}
                    transition={{duration: 1.2, delay: 0}}
                >
                    <Link href={"/contact"} style={{textDecoration: "none"}}>
                        Contact Me
                    </Link>
                </motion.div>
            </div>

            <div className=''>
                <motion.img
                    className='homesec1_image'
                    style={{aspectRatio: "auto"}}
                    src='/assets/innovate.jpg'
                    initial={{opacity: 0, scale: 0}}
                    whileInView={{opacity: 1, scale: 1}}
                    transition={{duration: 1, delay: 0}}
                />
            </div>
        </div>
    )
}

export default AboutMe
