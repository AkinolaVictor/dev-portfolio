import { usePathname } from 'next/navigation'
import React from 'react'
import {motion} from "framer-motion"
import Image from 'next/image'
import { navItems } from '@/exportable'
import Link from 'next/link'

function MenuModal({toggle}) {
    const path = usePathname()
    function openLink(){
        toggle()
    }


    return (
        <motion.div 
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{duration: 1}}
            onClick={toggle} className='home-modal-container'>

            <div onClick={(e)=>e.stopPropagation()} className='menu-list-container'>
                
                <motion.div 
                    initial={{x: `${window.innerWidth}px`}}
                    animate={{x: "0px"}}
                    exit={{x: `${window.innerWidth}px`}}
                    transition={{duration: 0.5}}
                    className='modal-header' onClick={toggle} style={{cursor: "pointer"}}
                >
                    <p>  </p>
                    {/* <p>close</p> */}
                    <Image
                        src={"/close_2.svg"}
                        width={40}
                        height={40}
                        alt='close menu'
                    />
                </motion.div>

                <div style={{paddingTop: "30px"}}>
                {/* <div style={{width: "100%", height: "100%", display: "flex", justifyContent: "flex-start", alignItems: "center", flexDirection: "column"}}> */}
                    {
                        navItems.map((item, index)=>{
                            return (
                                <motion.div 
                                    initial={{x: `${window.innerWidth}px`}}
                                    animate={{x: "0px"}}
                                    exit={{x: `${window.innerWidth}px`}}
                                    transition={{duration: 1, delay: index*0.1}}
                                    key={index} style={{margin: `30px 0px 30px 0px`, textAlign: "center"}}
                                >
                                    <Link href={item.href} style={{textDecoration: "none", color: "white", fontSize: "20px"}} onClick={openLink}>
                                        {item.title}
                                    </Link>
                                    <div style={{width: "100%", height: path===item.href?"3px":"0px", backgroundColor: "white"}}/>
                                </motion.div>
                            )
                        })
                    }
                </div>
            </div>
        </motion.div>
    )
}

export default MenuModal
