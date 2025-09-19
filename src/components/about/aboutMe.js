import Link from 'next/link'
import React from 'react'

function AboutMe() {
    return (
        <div className='homesection1' style={{}}>
            <div className='homesection1Texts'>
                <p style={{color: "gray", fontWeight: 600, fontSize: "15px", marginBottom: "20px"}}>Fullstack Developer</p>
                <p className='home1text1' style={{}}>
                    Crafting digital experiences that are fast, accessible, and, reliable.
                    {/* <span>Crafting</span>
                    <span>Innovative</span>
                    <span>Solution For</span>
                    <span>Tomorrow's</span>
                    <span>Challenges</span> */}
                </p>
                
                <p className='home1text2' style={{ color: "gray",  fontSize: "15px"}}>
                    I design and build end-to-end applications---turning complex ideas into delightful products.
                </p>
                <div className='home1button1' style={{}}>
                
                    <Link href={"/contact"} style={{textDecoration: "none"}}>
                        Contact Me
                    </Link>
                </div>
            </div>

            <div className=''>
                <img
                    className='homesec1_image'
                    style={{aspectRatio: "auto"}}
                    src='/assets/innovate.jpg'
                />
            </div>
        </div>
    )
}

export default AboutMe
