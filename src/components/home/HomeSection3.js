import React from 'react'

function HomeSection3() {
    return (
        <div className='homeSectio3Container' style={{ }}>
            <div className='h_sec3text1container' style={{ }}>
                <p className='h_sec3text1'>
                    Crafting Innovative Software Solutions For You
                </p>
                {/* <p style={{fontWeight: "600", fontSize: "50px", textAlign: "center"}}>Crafting Innovative</p>
                <p style={{fontWeight: "600", fontSize: "50px", textAlign: "center"}}>Software Solutions For</p>
                <p style={{fontWeight: "600", fontSize: "50px", textAlign: "center"}}>You</p> */}
                <p style={{margin: "30px 0px 20px 0px", textAlign: "center"}}>
                    Welcome to my portfolio, where creativity meets technology. 
                    Explore my projects and discover how i can help bring your ideas to live
                </p>
            </div>
            
            <div style={{display: "flex", justifyContent: "center", alignItems: "center", margin: "10px 0px"}}>
                <div style={{color: "black", cursor: "pointer", fontSize: "calc(100% - 2px)", margin: "0px 10px", padding: "10px 20px", borderRadius: "30px", backgroundColor: "white"}}>
                    Projects
                </div>
                <div style={{color: "white", cursor: "pointer", fontSize: "calc(100% - 2px)", margin: "0px 10px", padding: "10px 20px", borderRadius: "30px", border: "1px solid white"}}>
                    Contact
                </div>
            </div>

            <div className='' style={{}}>
                <img
                    className='home3imageCon'
                    style={{aspectRatio: "auto"}}
                    src='/assets/innovate3.jpg'
                />
            </div>
        </div>
    )
}

export default HomeSection3
