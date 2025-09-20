import Link from 'next/link'
import React from 'react'
import {motion} from "framer-motion"

function HomeSection9() {
    return (
        <div className='homesection1' style={{}}>
            <div className='homesection1Texts'>
                <p style={{marginBottom: "20px", fontWeight: 600}}>Trust</p>
                <motion.p 
                    className='home9text1' 
                    style={{}}
                    initial={{opacity: 0, x: -200}}
                    whileInView={{opacity: 1, x: 0}}
                    transition={{duration: 1.2}}
                >
                    Why Choose Me as Your Developer
                </motion.p>
                
                <motion.p 
                    className='home1text2' 
                    style={{ color: "rgba(255,255,255,0.8)", fontSize: "15px" }}
                    initial={{opacity: 0, x: -200}}
                    whileInView={{opacity: 1, x: 0}}
                    transition={{duration: 1.2, delay: 0.5}}
                >
                    With a commitment to reliability, I ensure your projects are delivered on time and to the highest standards. 
                    My innovative approach and expertise guarantee solutions that not only meet but exceed your expectations.
                </motion.p>

                <motion.div 
                    className='home1button1' 
                    style={{cursor: "pointer"}}
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
                    src='/assets/chm.jpg'
                    initial={{opacity: 0, scale: 0}}
                    whileInView={{opacity: 1, scale: 1}}
                    transition={{duration: 1.2, delay: 0}}
                />
            </div>

        </div>
    )
}

export default HomeSection9
