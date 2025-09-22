import React, { useState } from 'react'
import {motion} from "framer-motion"

function ContactSection2() {
    const [data, setData] = useState({
        name: "",
        email: "",
        message: ""
    })

    function update(key, value){
        setData((prev)=>{
            const curr = {...prev}
            curr[key] = value
            return curr
        })
    }
    return (
        <div className='contactsection2con' style={{}}>
            <motion.div 
                className='contactformcon' 
                style={{marginLeft: "auto", marginRight: "auto",}}
                initial={{opacity: 0, x: 400}}
                whileInView={{opacity: 1, x: 0}}
                transition={{duration: 1.2}}
            >
                <p style={{fontWeight: 600, marginBottom: "20px"}}>Connect</p>
                <p style={{fontWeight: 600, fontSize: "25px", marginBottom: "20px"}}>Get in Touch</p>
                <p style={{marginBottom: "50px", fontWeight: 600, fontSize: "15px", color: "gray"}}>I'd Love to hear from you</p>
                <p style={{fontWeight: 400, fontSize: "15px", color: "rgba(255, 255, 255, 0.8)"}}>Name</p>
                <input 
                    type="text" 
                    name="clientname" 
                    value={data.name}
                    style={{}}
                    className='contactEachInput'
                    onChange={(e)=>{update("name", e.target.value)}}
                    placeholder='Enter Your Name'
                />
                <p style={{fontWeight: 400, fontSize: "15px", color: "rgba(255, 255, 255, 0.8)"}}>Email</p>
                <input 
                    type="text" 
                    name="clientemail" 
                    value={data.email}
                    style={{}}
                    className='contactEachInput'
                    placeholder='Enter Your Email'
                    onChange={(e)=>{update("email", e.target.value)}}
                />
                <p style={{fontWeight: 400, fontSize: "15px", color: "rgba(255, 255, 255, 0.8)", marginBottom: "15px"}}>Message</p>
                <textarea
                    type="text" 
                    name="clientname" 
                    value={data.message}
                    style={{height: "100px"}}
                    className='contactEachInput'
                    placeholder='Type Your Message...'
                    onChange={(e)=>{update("message", e.target.value)}}
                />

                <button type="submit" className='contactsubmitbtn'>
                    <p>Submit</p>
                </button>
            </motion.div>
        </div>
    )
}

export default ContactSection2
