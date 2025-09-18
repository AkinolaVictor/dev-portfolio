import Contactsection1 from '@/components/contact/contactsection1'
import ContactSection2 from '@/components/contact/contactSection2'
import Stairs from '@/components/Stairs'
import React from 'react'

function Index() {
    return (
        <div style={{color: "black", width: "100%"}}>
            <Stairs>
                <ContactSection2 />
                <Contactsection1 />
            </Stairs>
        </div>
    )
}

export default Index
