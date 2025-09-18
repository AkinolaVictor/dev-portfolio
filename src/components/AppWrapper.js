import React, { useState } from 'react'
import TopHeader from './TopHeader'
import Footer from './Footer'
import MenuModal from './MenuModal'

function AppWrapper({children}) {
    const [openModal, setOpenModal] = useState(false)
    const props = {}

    function toggleModal(e){
        setOpenModal(!openModal)
    }

    return (
        <AnimatePresence>
            <TopHeader toggleModal={toggleModal} key={"fs"}/>
            
            {/* {React.Children.map(children, child => React.cloneElement(child, {...props}))} */}
            {children}

            <Footer key={"ksds"}/>
            {
                openModal?
                <MenuModal toggle={toggleModal} key={"sah"}/>:
                null
            }
        </AnimatePresence>
    )
}

export default AppWrapper
