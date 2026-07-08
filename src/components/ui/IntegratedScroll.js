import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import React, { useEffect, useRef, useState } from 'react';


// interface Props {}
gsap.registerPlugin(SplitText, ScrollTrigger)

export default function IntegratedScroll({
    scrollingElement
}) {
    const containerRef = useRef()
    const [ready, setReady] = useState(false)
    const [height, setHeight] = useState(0)

    function performCalculations(){
        if(ready) return
        setHeight((prev)=>{
            let curr = prev
            const children = document.querySelector(".integrated_scroll_container").children
            for(let i=0; i<children.length; i++){
                const eachChild = children[i]
                const each_height = eachChild.getBoundingClientRect().height
                curr+=each_height
            }
            return curr
        })
        setReady(true)
    }

    // console.log({height})
    function initialize_animation(){
        const el = containerRef.current;
        if(!el || !ready) return;
        function findScrollingElement(elem){
            let parent = document.querySelector(elem)
            
            while(parent) {
                const {overflowY} = getComputedStyle(parent)
                if((overflowY === "auto" || overflowY === "scroll") && (parent.scrollHeight > parent.clientHeight)){
                    return parent
                }
                parent = parent.parentElement
            }

            return document.scrollingElement
        }
        const scroller = scrollingElement?document.querySelector(`${scrollingElement}`):findScrollingElement(".integrated_scroll_container");
    
        const tl = gsap.timeline()
        tl.set(".content_number_1", {
            // height: "auto"
            width: "0%"
        });

        // tl.to(".integrated_scroll_container", {
        tl.to(".content_number_1", {
            // duration: 10,
            width: "100%",
            // scrollTrigger: {
            //     trigger: ".content_number_2",
            //     start: "top 90%",
            //     end: "bottom 30%",
            //     scroller,
            //     invalidateOnRefresh: true,
            //     scrub: true,
            //     onEnter: ()=>{console.log("Just Entered")},
            //     onUpdate: ()=>{console.log("Just Updated...")}
            // }
        })

        ScrollTrigger.create({
            trigger: ".content_number_2",
            start: "top 90%",
            end: "top 30%",
            scroller,
            animation: tl,
            scrub: true,
            onEnter: ()=>{console.log("Just Entered")},
            onUpdate: ()=>{console.log("Just Updated...")}
        })

        return ()=>{

        }
    }

    useEffect(()=>{
        performCalculations()
    }, [])

    useEffect(()=>{
        const anim = initialize_animation()
        return anim
    }, [ready])

    return (
        <div 
            ref={containerRef} 
            style={{height}}
            className='w-full integrated_scroll_container h-auto bg-amber-400l'
        >
            <div className='w-full h-20 bg-gray-800 fillerz'>
                <p>Header</p>
            </div>

            {
                ["blue","red","green","brown","#333","purple","orange"].map((item, index)=>{
                    return (
                        <div 
                            key={index} 
                            className={`content_number_${index} h-60`}
                            style={{background: item}}
                        >
                            <p>Header {item} {index}</p>
                        </div>
                    )
                })
            }
            <div className='w-full h-20 bg-gray-600'>
                <p>Bottom</p>
            </div>
        </div>
    )
}

