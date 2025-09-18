import Footer from "@/components/Footer";
import MenuModal from "@/components/MenuModal";
import TopHeader from "@/components/TopHeader";
import "@/styles/globals.css";
import "@/styles/globals_media.css";
import "@/styles/home.css";
import "@/styles/home_media.css";
import "@/styles/contact.css";
import "@/styles/contact_media.css";
import "@/styles/project.css";
import "@/styles/project_media.css";
import { AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function App({ Component, pageProps, router }) {
  // console.log({router, pp: router.route});
  const [openModal, setOpenModal] = useState(false)
  const [pageScroll, setPageScroll] = useState(false)
  const scrollValue = useRef(0)
  const waiter = useRef(false)
  let timer = useRef(null)
  const container = useRef(null)
  const props = {}

  function toggleModal(e){
    setOpenModal(!openModal)
  }

  // console.log(router.route);
  
  // const backgroundColor = router.route==="/contact"?"#665600":"black"
  const backgroundColor = "black"

  function onScroll(e){
    // if on small screen
    controller()
    function controller(val){
      if(waiter.current) {
        clearInterval(timer.current)
        waiter.current = false
      }
      
      waiter.current = true

      timer.current = setInterval(() => {
        mainfunc()
        waiter.current = false
      }, 1000);
    }

    function mainfunc(){
      if(scrollValue.current<e.target.scrollTop){
          // Scrolling up
          // hide top and bottom nav on mobile
        if(!pageScroll){
          setPageScroll(true)
        }
      }else{
          // Scrolling down
          // show top and bottom nav on mobile
        if(pageScroll){
          setPageScroll(false)
        }
      }
      // setScrollValue(e.target.scrollTop)
      scrollValue.current = e.target.scrollTop
    }
  }

  function scroller(e){
  }
  useEffect(()=>{
    // container.current.scrollTop(0)
    container.current.scrollTo(0, 0)
    // window.scrollTo(0, 0)
  }, [router.route])

  return (
    <div 
      // onScroll={onScroll} 
      ref={container}
      // ref={(e)=>{e.sc}
      style={{overflowY: "auto", overflowX: "hidden", width: "100vw", height: "100vh", backgroundColor}}
    >
      <AnimatePresence mode="wait">
        <TopHeader toggleModal={toggleModal} key={"fs"} route={router.route}/>
        
        {/* {React.Children.map(children, child => React.cloneElement(child, {...props}))} */}
        {/* {children} */}
        <Component {...pageProps} key={router.route} test={"test"}/>

        <Footer key={"ksds"}/>
        {
            openModal?
            <MenuModal toggle={toggleModal} key={"sah"}/>:
            null
        }
      </AnimatePresence>
    </div>
  );
}
