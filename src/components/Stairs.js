import React, { Fragment } from 'react'
import {motion} from "framer-motion"

function Stairs({children}) {
    const count = 5
    const anim = (variants, custom) => {
        return {
            initial: "initial",
            animate: "enter",
            exit: "exit",
            variants,
            custom
        }
    }

    const expand = {
        initial: {
            top: 0
        },
        enter: (i)=>{
            return {
                top: "100%",
                transition: {
                    duration: 0.8,
                    delay: 0.07*i
                },
                transitionEnd: {
                    height: 0,
                    top: 0
                }
            }
        },
        exit: (i)=>{
            return {
                height: "100%",
                transition: {
                    duration: 0.8,
                    delay: 0.05*i
                },
            }
        },
    }
    const overlay = {
        initial: {
            opacity: 0.5
        },
        enter: {
            opacity: 0,
            // transition: {
            //     duration: 2
            // }
        },
        exit: {
            opacity: 0.5
        }
    }

    function colorSelector(i){
        const pallete = {
            0: "#ddd",
            1: "#414141",
            2: "#ddd",
            3: "#414141",
            4: "#ddd",
            5: "#414141"
        }
        return pallete[i]
    }


    return (
        <div onScroll={()=>{console.log("s");}}>
            {children}
            <motion.div style={{height: "100vh", width: "100vw", position: "fixed", top: 0, left: 0, pointerEvents: "none", display: "flex"}}>
                <motion.div 
                    {...anim(overlay)}
                    style={{height: "100vh", width: "100%", position: "fixed", zIndex: 9000000000000, top: 0, left: 0, pointerEvents: "none", backgroundColor: "black"}} 
                />
                {
                    // Array(count).map((item, index)=>{
                    [2,2,2,2,2,2].map((item, index)=>{
                        
                        return (
                            <motion.div 
                                // {...anim(expand, index)}
                                {...anim(expand, 6-index)}
                                key={index}
                                style={{width: "100%", height: "100%", backgroundColor: `#414141`, position: "relative "}}
                            />
                        )
                    })
                }
            </motion.div>
        </div>
    )
}

export default Stairs
