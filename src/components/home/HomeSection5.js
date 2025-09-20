import React from 'react'
import {motion} from "framer-motion"

function HomeSection5() {
    return (
        <div className='homesection1' style={{backgroundColor: "#665600"}}>
            <div className='homesection1Texts'>
                <motion.p 
                    className='home1text1'  
                    style={{ }}
                    initial={{opacity: 0, x: -200}}
                    whileInView={{opacity: 1, x: 0}}
                    transition={{duration: 1.2}}
                >
                    Meet your next software development partner
                </motion.p>
                
                <motion.p 
                    className='home1text2'  
                    style={{ color: "rgba(255, 255, 255, 0.8)", fontSize: "15px"}}
                    initial={{opacity: 0, x: -200}}
                    whileInView={{opacity: 1, x: 0}}
                    transition={{duration: 1.2, delay: 0.5}}
                >
                    I specialize in creating efficient and scalable software solution. My passion for 
                    technology drives me to stay updated with the latest industry trends and best practices.
                </motion.p>
                <motion.div 
                    className='home1button1' 
                    style={{ }}
                    initial={{opacity: 0, x: -100}}
                    whileInView={{opacity: 1, x:0}}
                    transition={{duration: 1.2, delay: 0}}
                >
                    Contact Me
                </motion.div>
            </div>

            <div className=''>
                <motion.img
                    className='homesec1_image'
                    style={{aspectRatio: "auto"}}
                    src='/assets/sdp1.jpg'
                    initial={{opacity: 0, scale: 0}}
                    whileInView={{opacity: 1, scale: 1}}
                    transition={{duration: 1.2, delay: 0}}
                />
            </div>

        </div>
    )
}

export default HomeSection5
