import React from 'react'

function HomeSection2() {
    return (
        <div className='homesection2' style={{}}>
            <div className='homesection1Texts2' style={{color: "black"}}>
                {/* <p className='home1text1' style={{width: "400px", fontWeight: 600, fontSize: "35px", display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start"}}> */}
                <p className='home1text1_2' style={{}}>
                    {/* Crafting Innovative Solutions For Tomorrows Challenges */}
                    Meet a passionate developer 
                    dedicated to crafting innovative
                    software solutions.
                    {/* <span>Meet a Passionate</span>
                    <span>developer dedicated to</span>
                    <span>Crafting Innovative</span>
                    <span>Softwaer Solutions</span> */}
                </p>
                
                <p className='home1text2_1' style={{marginBottom: "30px", fontSize: "15px", color: "rgba(0,0,0,0.9)"}}>
                    With a degree in computer science and a knack for problem solving,
                    i specialize in web and mobile application development. My interests 
                    include exploring new technologies, contributing to open-source 
                    projects and hiking in nature.
                </p>
                {/* <div style={{padding: "10px 30px", width: "150px", textAlign: "center", fontSize: "14px", marginTop: "20px", backgroundColor: "white", borderRadius: "40px", color: "black"}}>
                    Contact Me
                </div> */}
            </div>

            <div className='homesec1_image'>
                <img
                    className='homesec1_image'
                    style={{aspectRatio: "auto"}}
                    src='/assets/software solutions.jpg'
                />
            </div>

        </div>
    )
}

export default HomeSection2
