import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function HomeSection1() {
    return (
        <div className='homesection1' style={{}}>
            <div className='homesection1Texts'>
                <p className='home1text1' style={{}}>
                    Crafting innovative solutions for tomorrow's challenges
                    {/* <span>Crafting</span>
                    <span>Innovative</span>
                    <span>Solution For</span>
                    <span>Tomorrow's</span>
                    <span>Challenges</span> */}
                </p>
                
                <p className='home1text2' style={{ color: "gray",  fontSize: "15px"}}>
                    As a passionate fullstack developer, is pecialize in creating dynamic
                    web applications that elevate user experience. Let's collaborate to
                    bring your idea to life with cutting-edge technology.
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

export default HomeSection1
