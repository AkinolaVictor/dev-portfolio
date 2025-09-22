import React from 'react'
import dynamic from 'next/dynamic';
import Link from 'next/link';
import {motion} from "framer-motion"
// import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'

export default function HomeSection4() {
    
    const ResponsiveMasonry = dynamic(
        () => import('react-responsive-masonry').then((mod) => mod.ResponsiveMasonry),
        {
          loading: () => <p>Loading...</p>,
          ssr: false, // This is crucial for components that might not be SSR-friendly
        }
    );
  
    const Masonry = dynamic(
        () => import('react-responsive-masonry').then((mod) => mod.default), // Assuming Masonry is the default export
        {
            loading: () => <p>Loading...</p>,
            ssr: false,
        }
    );
      
    return (
        <div className='homesection4Container' style={{}}>
            <div style={{textAlign: "center", color: "white", marginTop: "70px"}}>
                <motion.p 
                    style={{fontWeight: 600, margin: "20px 0px",}}
                    initial={{opacity: 0, x: -200}}
                    whileInView={{opacity: 1, x:0}}
                    transition={{duration: 1, delay: 0}}
                >
                    Innovate
                </motion.p>

                <motion.p 
                    className='home4txt1'
                    style={{fontWeight: 500, margin: "20px 0px"}}
                    initial={{opacity: 0, x: -200}}
                    whileInView={{opacity: 1, x:0}}
                    transition={{duration: 1, delay: 0.4}}
                >
                    Core Competencies Overview
                </motion.p>

                <motion.p 
                    style={{margin: "20px 0px", color: "rgba(255, 255, 255, 0.8", fontSize: "15px"}}
                    initial={{opacity: 0, x: -200}}
                    whileInView={{opacity: 1, x:0}}
                    transition={{duration: 1, delay: 0.9}}
                >
                    Expertise in modern Software development technologies
                </motion.p>
            </div>

            <div style={{color: "white"}}>
                <ResponsiveMasonry
                    columnsCountBreakPoints={{350: 1, 1000: 2,}}
                    gutterBreakpoints={{350: "12px", 1000: "16px"}}
                    // className=''
                >
                    <Masonry
                        style={{}}
                        className=''
                        columnsCount={2}
                        gutter='40px'
                    >
                        <Content1 />
                        <Content5 />
                        <Content2 />
                        <Content3 />
                        <Content4 />
                    </Masonry>
                </ResponsiveMasonry>
            </div>
        </div>
    )
}

function Content1() {
    return (
        <motion.div 
            className='home4content1' 
            style={{ }}
            initial={{opacity: 0, x: -200}}
            whileInView={{opacity: 1, x:0}}
            transition={{duration: 1, delay: 0}}
        >
            <div style={{color: "white", padding: "30px"}}>
                <p style={{fontWeight: 600, color: "gray"}}>Skills</p>
                <p style={{fontWeight: 600, fontSize: "23px", marginTop: "20px"}}>Programming Languages and Frameworks</p>
                <p style={{fontSize: "15px", marginTop: "20px", color: "gray"}}>
                    Proficient in Javascript, Python, React, Next.js, and Node.js
                    for robust software application development.
                </p>

                <div style={{display: "flex", justifyContent: "center", alignItems: "center", margin: "30px 0px 10px 0px"}}>
                    <div style={{color: "black", fontSize: "calc(100% - 2px)", cursor: "pointer", margin: "0px 10px", padding: "10px 20px", borderRadius: "30px", backgroundColor: "white"}}>
                        <Link href={"/projects"} style={{textDecoration: "none"}}>
                            Explore
                        </Link>
                    </div>
                </div>
            </div>
            <div style={{width: "100%", marginTop: "0px"}}>
                <img 
                    src="/assets/plf1.jpg" 
                    alt=""
                    style={{width: "100%", aspectRatio: "auto", borderRadius: "0px 0px 15px 15px", }}
                />
            </div>
        </motion.div>
    )
}

function Content2(){
    return (
        <motion.div 
            className='home4content2' 
            style={{}}
            initial={{opacity: 0, x: -200}}
            whileInView={{opacity: 1, x:0}}
            transition={{duration: 1, delay: 0.5}}
        >
            {/* <div className='home4imagecontainer' style={{}}>
                
            </div> */}
            <div style={{width: "100%", marginTop: "0px"}}>
                <img 
                    src="/assets/vcc.jpg" 
                    alt=""
                    className='home4imagecontainer'
                    style={{width: "100%", height: "100%", }}
                />
            </div>
            <div className='home4textcon' style={{padding: "50px 20px"}}>
                <p style={{fontWeight: "600", color: "gray", fontSize: "14px"}}>Technologies</p>
                <p style={{fontWeight: "600", fontSize: "20px", margin: "20px 0"}}>Version Control and collaboration</p>
                <p style={{color: "gray", fontSize: "15px"}}>Familiar with git, github and Agile methodologies</p>

                {/* <div style={{cursor: "pointer", fontSize: "calc(100% - 2px)", marginTop: "20px", padding: "0px"}}>
                    <Link href={"/projects"} style={{textDecoration: "none"}}>
                        Explore
                    </Link>
                </div> */}
            </div>
        </motion.div>
    )
}

function Content3(){
    return (
        <motion.div 
            className='home4content2' 
            style={{}}
            initial={{opacity: 0, x: 200}}
            whileInView={{opacity: 1, x:0}}
            transition={{duration: 1, delay: 0.5}}
        >
            {/* <div className='home4imagecontainer' style={{}}>
                
            </div> */}
            <div style={{width: "100%", marginTop: "0px"}}>
                <img 
                    src="/assets/dbm.jpg" 
                    alt=""
                    className='home4imagecontainer'
                    style={{width: "100%", height: "100%", }}
                />
            </div>
            <div className='home4textcon' style={{padding: "40px 20px"}}>
                <p style={{fontWeight: "600", color: "gray", fontSize: "13px"}}>Technologies</p>
                <p style={{fontWeight: "600", fontSize: "20px", margin: "20px 0"}}>Database Management Systems</p>
                <p style={{color: "gray", fontSize: "15px"}}>Experienced with MongoDB and Firebase</p>

                {/* <div style={{cursor: "pointer", marginTop: "20px", padding: "0px"}}>
                    Explore
                </div> */}
            </div>
        </motion.div>
    )
}

function Content4(){
    return (
        <motion.div 
            className='home4content2' 
            style={{}}
            initial={{opacity: 0, x: -200}}
            whileInView={{opacity: 1, x:0}}
            transition={{duration: 1, delay: 1}}
        >
            {/* <div className='home4imagecontainer' style={{}}>
                
            </div> */}
            <div style={{width: "100%", marginTop: "0px"}}>
                <img 
                    src="/assets/csvv.jpg" 
                    alt=""
                    className='home4imagecontainer'
                    style={{width: "100%", height: "100%", }}
                />
            </div>
            <div className='home4textcon' style={{padding: "60px 20px"}}>
                <p style={{fontWeight: "600", fontSize: "13px", color:"gray"}}>Technologies</p>
                <p style={{fontWeight: "600", fontSize: "20px", margin: "20px 0"}}>
                    Cloud Service and Deployment
                </p>
                <p style={{fontSize: "15px", color: "gray"}}>Skilled in AWS, Azure, and Docker Technologies</p>

                {/* <div style={{cursor: "pointer", marginTop: "20px", padding: "0px"}}>
                    Explore
                </div> */}
            </div>
        </motion.div>
    )
}

function Content5() {
    return (
        <motion.div 
            className='home4content1' style={{ }}
            initial={{opacity: 0, x: 200}}
            whileInView={{opacity: 1, x:0}}
            transition={{duration: 1, delay: 0}}
        >
            <div style={{color: "white", padding: "30px"}}>
                <p style={{fontWeight: 600, color: "gray"}}>Frameworks</p>
                <p style={{fontWeight: 600, fontSize: "23px", marginTop: "20px"}}>User Interface Design Skills</p>
                <p style={{fontSize: "15px", marginTop: "20px", color: "gray"}}>
                    Passionate about creating intuitive and engaging user experience through design principles.
                </p>

                <div style={{display: "flex", justifyContent: "center", alignItems: "center", margin: "30px 0px 10px 0px"}}>
                    <div style={{color: "black", cursor: "pointer", fontSize: "calc(100% - 2px)", margin: "0px 10px", padding: "10px 20px", borderRadius: "30px", backgroundColor: "white"}}>
                        <Link href={"/projects"} style={{textDecoration: "none"}}>
                            Explore
                        </Link>
                    </div>
                </div>
            </div>
            <div style={{width: "100%", height: "auto"}}>
                <img 
                    src="/assets/user interface.jpg" 
                    alt=""
                    style={{width: "100%", aspectRatio: "auto", borderRadius: "0px 0px 15px 15px", }}
                />
            </div>
        </motion.div>
    )
}