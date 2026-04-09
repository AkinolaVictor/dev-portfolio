import Image from 'next/image'
import Link from 'next/link'
import {motion} from "framer-motion"
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'
import { useEffect } from 'react'

function HomeSection1() {

    function gsapAnimation(){
        gsap.registerPlugin(ScrollTrigger, SplitText);
        
        
        function animate_text(which){
            gsap.set(`.${which}`, {opacity: 1})
            let splita = SplitText.create(`.${which}`, {
                type: "words",
                aria: "hidden",
            })
    
            const tl = gsap.from(splita.words, {
                opacity: 0,
                duration: 0.5,
                delay: 1,
                ease: "sine.inOut",
                stagger: 0.07
            })
        }

        animate_text("hometextgsap")
        // animate_text("craftinn")
    }

    useEffect(()=>{
        gsapAnimation()
    }, [])
    
    return (
        <motion.div 
            // ref={container} 
            className='homesection1' 
            // style={{minHeight: "100vh"}}
        >
            <div className='homesection1Texts'>
                <motion.p
                    className='home1text1 craftinn' 
                    style={{}}
                    initial={{opacity: 0, x: -200}}
                    whileInView={{opacity: 1, x: 0}}
                    transition={{duration: 1.7}}
                >
                    Crafting innovative solutions for tomorrow's challenges
                </motion.p>
                
                <p 
                    className='home1text2 hometextgsap' 
                    style={{ color: "gray",  fontSize: "15px"}}
                    initial={{opacity: 0, x: -200}}
                    whileInView={{opacity: 1, x: 0}}
                    transition={{duration: 1.7, delay: 0}}
                >
                    As a passionate fullstack developer, is pecialize in creating dynamic
                    web applications that elevate user experience. Let's collaborate to
                    bring your idea to life with cutting-edge technology.
                </p>
                <motion.div 
                    className='home1button1' 
                    style={{}}
                    initial={{opacity: 0, x: -100}}
                    whileInView={{opacity: 1, x:0}}
                    transition={{duration: 1.7, delay: 0}}
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
                    transition={{duration: 1.7, delay: 0}}
                />
            </div>
        </motion.div>
    )
}

export default HomeSection1
