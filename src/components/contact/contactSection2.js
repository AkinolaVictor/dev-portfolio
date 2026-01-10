import React, { useState } from 'react'
import {motion} from "framer-motion"
import { isBlank } from '@/exportable'

function ContactSection2() {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")
    const [data, setData] = useState({
        name: "",
        email: "",
        message: ""
    })
    const {name, email, message} = data
    
    function update(key, value){
        setData((prev)=>{
            const curr = {...prev}
            curr[key] = value
            return curr
        })
    }
    async function sendMsg(){
        if(loading) return

        if(isBlank(name)){
            setError("Please ensure your name is not empty")
            return
        }
        
        if(!email.split('').includes('.') || !email.split('').includes('@') || email.length<5 || isBlank(email)) {
            setError("Invalid email address, please ensure to use a valid email address")
            return
        }

        if(isBlank(message)){
            setError("Please ensure messgae is not blank")
            return
        }


        
        setLoading(true)

        await user_message()
        await report_message({last: true})


        async function user_message() {
            const html_2 = `
                <div>
                    <h4>Hello ${name}, Thank you for reaching out to us</h4>
                    <p>Your message has reached our end, and we'll do our best to respond accordingly.</p>
                </div>
            `
            const sender_payload = {
                userEmail: `${email}`,
                subject: 'Baynt',
                html: html_2
            }
            await emailSender({data: sender_payload})
        }

        async function report_message({last}) {
            const html_1 = `
                <div>
                    <h4>Message from ${name}</h4>
                    <p>${message}</p>
                    <p>This is the user email: ${email}</p>
                </div>
            `
            const developer_payload = {
                userEmail: `akinolavictor50@gmail.com`,
                subject: 'Baynt Contact Report',
                html: html_1
            }

            await emailSender({data: developer_payload, last})
        }

        async function emailSender({data, last}) {
            return await axios.post("/api/sendEmail", {...data}).then((result)=>{
                const {successful} = result.data
                if(successful){
                    console.log("successful");

                    if(!last) return
                    
                    update("name", "")
                    update("message", "")
                    update("email", "")
                    setError("")
                    
                    alert("Message Sent Successfully.")
                }
                return {done: true}
            }).catch((e)=>{
                console.log("error encountered", e);
                if(last) alert("Unable to send messagae")
                return {done: false}
            })
        }
        setLoading(false)
    }


    return (
        <div className='contactsection2con' style={{}}>
            <motion.div 
                className='contactformcon' 
                style={{marginLeft: "auto", marginRight: "auto",}}
                initial={{opacity: 0, x: 400}}
                whileInView={{opacity: 1, x: 0}}
                // initial={{opacity: 0}}
                // whileInView={{opacity: 1}}
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

                <p className='text-[rosybrown] font-[600] text-[12px] text-center w-full mt-[10px]'>{error}</p>
                <button type="submit" className='contactsubmitbtn'>
                    {
                        loading?
                        <p>Sending...</p>:
                        <p>Submit</p>
                    }
                </button>
            </motion.div>
        </div>
    )
}

export default ContactSection2
