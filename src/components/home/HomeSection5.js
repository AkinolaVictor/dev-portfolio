import React from 'react'

function HomeSection5() {
    return (
        <div className='homesection1' style={{backgroundColor: "#665600"}}>
            <div className='homesection1Texts'>
                <p className='home1text1'  style={{ }}>
                    {/* Crafting Innovative Solutions For Tomorrows Challenges */}
                    Meet your next software development partner
                </p>
                
                <p className='home1text2'  style={{ }}>
                    I specialize in creating efficient and scalable software solution. My passion for 
                    technology drives me to stay updated with the latest industry trends and best practices.
                </p>
                <div className='home1button1' style={{ }}>
                    Contact Me
                </div>
            </div>

            <div className=''>
                <img
                    className='homesec1_image'
                    style={{aspectRatio: "auto"}}
                    src='/assets/sdp1.jpg'
                />
            </div>

        </div>
    )
}

export default HomeSection5
