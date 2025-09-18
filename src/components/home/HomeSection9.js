import Link from 'next/link'
import React from 'react'

function HomeSection9() {
    return (
        <div className='homesection1' style={{}}>
            <div className='homesection1Texts'>
                <p style={{marginBottom: "20px", fontWeight: 600}}>Trust</p>
                <p className='home9text1' style={{}}>
                    Why Choose Me as Your Developer
                </p>
                
                <p className='home1text2' style={{ color: "rgba(255,255,255,0.8)", fontSize: "15px" }}>
                    With a commitment to reliability, I ensure your projects are delivered on time and to the highest standards. 
                    My innovative approach and expertise guarantee solutions that not only meet but exceed your expectations.
                </p>

                <div className='home1button1' style={{cursor: "pointer"}}>
                    <Link href={"/contact"} style={{textDecoration: "none"}}>
                        Contact Me
                    </Link>
                </div>
            </div>

            <div className=''>
                <img
                    className='homesec1_image'
                    style={{aspectRatio: "auto"}}
                    src='/assets/chm.jpg'
                />
            </div>

        </div>
    )
}

export default HomeSection9
