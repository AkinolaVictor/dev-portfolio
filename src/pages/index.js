"use client"
import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import AppWrapper from "@/components/AppWrapper";
import Stairs from "@/components/Stairs";
import HomeSection1 from "@/components/home/HomeSection1";
import HomeSection2 from "@/components/home/HomeSection2";
import HomeSection3 from "@/components/home/HomeSection3";
import HomeSection4 from "@/components/home/HomeSection4";
import HomeSection5 from "@/components/home/HomeSection5";
import HomeSection6 from "@/components/home/HomeSection6";
import HomeSection7 from "@/components/home/HomeSection7";
import HomeSection8 from "@/components/home/HomeSection8";
import HomeSection9 from "@/components/home/HomeSection9";
import HomeSection10 from "@/components/home/HomeSection10";

export default function Home({test, bg}) {
  // console.log({test});
  
  const listOfServices = [
      {
          title: "Build a project from scratch",
          description: "Give me the idea, and i'll birth it to life for you."
      },
      {
          title: "Build a project from scratch",
          description: "Give me the idea, and i'll birth it to life for you."
      },
  ]
  
  return (
    // <div onScroll={()=>{console.log("sx");}} style={{overflowY: "auto", width: "100vw", height: "100vh"}}>
    <div>
      <Head>
        <title>Portfolio || Akinola Victor</title>
        <meta name="description" content="Portfolio of Akinola Victor Olalekan" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div style={{backgroundColor: "white"}}>
        {/* <AppWrapper>

        </AppWrapper> */}
        <Stairs>
          
          <div className='home-main' style={{backgroundColor: bg}}>
            <HomeSection1 />
            <HomeSection2 />
            <HomeSection3 />
            <HomeSection4 />
            <HomeSection5 />
            <HomeSection6 />
            <HomeSection7 />
            <HomeSection8 />
            <HomeSection9 />
            <HomeSection10 />
          </div>
        </Stairs>
      </div>
    </div>
  );
}
