import Link from 'next/link'
import React from 'react'
import {motion} from "framer-motion"

function HomeSection3() {
    return (
        <div className='homeSectio3Container' style={{ }}>
            <div className='h_sec3text1container' style={{ }}>
                <motion.p 
                    className='h_sec3text1'
                    initial={{opacity: 0, x: 200}}
                    whileInView={{opacity: 1, x:0}}
                    transition={{duration: 1.2, delay: 0}}
                >
                    Crafting Innovative Software Solutions For You
                </motion.p>

                <motion.p 
                    initial={{opacity: 0, x: 200}}
                    whileInView={{opacity: 1, x:0}}
                    transition={{duration: 1.2, delay: 0.5}}
                    style={{margin: "30px 0px 20px 0px", textAlign: "center", color: "rgba(255,255,255, 0.8)", fontSize: "15px"}}
                >
                    Welcome to my portfolio, where creativity meets technology. 
                    Explore my projects and discover how i can help bring your ideas to live
                </motion.p>
            </div>
            
            <div style={{display: "flex", justifyContent: "center", alignItems: "center", margin: "10px 0px"}}>
                <div style={{color: "black", cursor: "pointer", fontSize: "calc(100% - 2px)", margin: "0px 10px", padding: "10px 20px", borderRadius: "30px", backgroundColor: "white"}}>
                    <Link href={"/projects"} style={{textDecoration: "none"}}>
                        Projects
                    </Link>
                </div>
                <div style={{color: "white", cursor: "pointer", fontSize: "calc(100% - 2px)", margin: "0px 10px", padding: "10px 20px", borderRadius: "30px", border: "1px solid white"}}>
                    <Link href={"/contact"} style={{textDecoration: "none"}}>
                        Contact
                    </Link>
                </div>
            </div>

            <div className='' style={{}}>
                <motion.img
                    className='home3imageCon'
                    style={{aspectRatio: "auto", }}
                    src='/assets/innovate3.jpg'
                    initial={{opacity: 0, scale: 0}}
                    whileInView={{opacity: 1, scale: 1}}
                    transition={{duration: 1.2, delay: 0}}
                />
            </div>
        </div>
    )
}

export default HomeSection3
