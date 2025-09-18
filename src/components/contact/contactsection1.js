import React from 'react'

function Contactsection1() {
    return (
        <div className='constactsec1container' style={{color: "white", backgroundColor: "#0f1937", padding: "40px"}}>
            <div style={{textAlign: "center"}}>
                {/* <p style={{marginBottom: "20px"}}>I'd love to hear from you!</p> */}
            </div>
            <div className='contactsection1con' style={{}}>
                <div style={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", margin: "20px"}}>
                    <div style={{width: "40px", marginBottom: "10px", height: "40px"}}>
                        <img 
                            src="/icons/email_white.svg" 
                            alt="code icon" 
                            style={{width: "40px", height: "40px", }}
                        />
                    </div>
                    <p style={{fontWeight: 600, marginBottom: "10px"}}>Email</p>
                    <p style={{fontWeight: 300, fontSize: "calc(100% - 2px)"}}>akinolavictor50@gmail.com</p>
                </div>

                <div style={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", margin: "20px"}}>
                    <div style={{width: "40px", marginBottom: "10px", height: "40px",}}> 
                        <img 
                            src="/icons/github_white.svg" 
                            alt="code icon" 
                            style={{width: "40px", height: "40px", }}
                        />
                    </div>
                    <p style={{fontWeight: 600, marginBottom: "10px"}}>Github</p>
                    <p style={{fontWeight: 300, fontSize: "calc(100% - 2px)"}}>akinolavictor50@gmail.com</p>
                </div>

                <div style={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", margin: "20px"}}>
                    <div style={{width: "40px", marginBottom: "10px", height: "40px" }}> 
                        <img 
                            src="/icons/linkedin_white.svg" 
                            alt="code icon" 
                            style={{width: "40px", height: "40px", }}
                        />
                    </div>
                    <p style={{fontWeight: 600, marginBottom: "10px"}}>LinkedIn</p>
                    <p style={{fontWeight: 300, fontSize: "calc(100% - 2px)"}}>akinolavictor50@gmail.com</p>
                </div>
            </div>
        </div>
    )
}

export default Contactsection1
