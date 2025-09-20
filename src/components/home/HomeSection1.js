import Image from 'next/image'
import Link from 'next/link'
import {motion} from "framer-motion"

function HomeSection1() {
    
    return (
        <motion.div 
            // ref={container} 
            className='homesection1' 
            style={{}}
        >
            <div className='homesection1Texts'>
                <motion.p 
                    className='home1text1' 
                    style={{}}
                    initial={{opacity: 0, x: -200}}
                    whileInView={{opacity: 1, x: 0}}
                    transition={{duration: 1.2}}
                >
                    Crafting innovative solutions for tomorrow's challenges
                </motion.p>
                
                <motion.p 
                    className='home1text2' 
                    style={{ color: "gray",  fontSize: "15px"}}
                    initial={{opacity: 0, x: -200}}
                    whileInView={{opacity: 1, x: 0}}
                    transition={{duration: 1.2, delay: 0}}
                >
                    As a passionate fullstack developer, is pecialize in creating dynamic
                    web applications that elevate user experience. Let's collaborate to
                    bring your idea to life with cutting-edge technology.
                </motion.p>
                <motion.div 
                    className='home1button1' 
                    style={{}}
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
                    // initial={{opacity: 0, x: 150}}
                    // whileInView={{opacity: 1, x: 0}}
                    // transition={{duration: 1.2, delay: 0}}
                />
            </div>
        </motion.div>
    )
}

export default HomeSection1
