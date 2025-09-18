import Stairs from '@/components/Stairs'
import React from 'react'

function About() {
    return (
        <div style={{padding: "20px", height: "auto", backgroundColor: "white", width: "100%"}}>
            <Stairs>
                
                <div className='about_text_container' style={{ }}>
                    <p className='about_text_1' style={{}}>Hello, i'm Victor</p>
                    <p className='about_text_2' style={{}}>I Enjoy The Art of Building Great Stuffs</p>
                </div>

                <p className='passion_tag' style={{}}>Passion and Drive</p>
                <div className='detail_container' style={{}}>
                    <div className='about_textcontainer_image'>
                        <img 
                            src="/UI.jpg" 
                            alt="picture of myself speaking" 
                            style={{width: "100%", height: "auto"}}
                        />
                    </div>

                    <div className='about_textcontainer_about'>
                        <p style={{color: "black", width: "100%"}}>
                            Join me as we build the future, and make it our reality.
                            This is a placeholder text, its there to hold the place of the original text until its arrival
                            This is a placeholder text, its there to hold the place of the original text until its arrival
                            This is a placeholder text, its there to hold the place of the original text until its arrival
                            This is a placeholder text, its there to hold the place of the original text until its arrival
                        </p>
                    </div>
                </div>

                <div style={{ }}>
                    <p className='passion_tagx' style={{}}>Impactful Events</p>
                    <div className='events_containersz' style={{}}>
                        
                    </div>
                </div>

            </Stairs>
        </div>
    )
}

export default About
