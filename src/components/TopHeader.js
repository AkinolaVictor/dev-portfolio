import { navItems } from '@/exportable'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function TopHeader({toggleModal, backgroundColor, route}) {
    // console.log({window});
    
    return (
        <div className='home-headerx' style={{backgroundColor}}>

            <div className='headerLogo'>
                
            </div>
            <div className='headerLinkOptions'>
                {
                    navItems.map((item, index)=>{
                        return (
                            <div key={index} className='eachHeaderLink'>
                                <Link href={item.href} style={{textDecoration: "none", color: "white", fontSize: "14px",}} onClick={()=>{}}>
                                    {item.title}
                                </Link>
                                <div style={{width: "100%", height: "4px", marginTop: "5px", opacity: .5, backgroundColor: route===item.href?"white":"black", borderRadius: "20px"}}></div>
                            </div>
                        )
                    })
                }
                
                <div className='mobilemenuicon' onClick={toggleModal} style={{marginLeft: "auto", justifyContent: "center", alignItems: 'center', cursor: "pointer"}}>
                    <Image
                        width={"32"}
                        height={"32"}
                        alt='menu-icon'
                        src={"/icons/menu_icon.png"}
                    />
                </div>
            </div>
        </div>
    )
}

export default TopHeader
