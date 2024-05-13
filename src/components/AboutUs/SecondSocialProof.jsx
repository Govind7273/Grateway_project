import Client1 from "./images/client-1.png";
import Client2 from './images/client-2.png';
import Client3 from './images/client-3.png';
import Client4 from './images/client-4.png';
import Client5 from './images/client-5.png';
import Client6 from './images/client-6.png';
import Client7 from './images/client-7.png';
import Client8 from './images/client-8.png';
import React from 'react';
import { motion } from 'framer-motion';
import ScrollTrigger from "react-scroll-trigger";
import { useState } from "react";

export const SecondSocialProof=()=>{

    const[motionOn, setMotionOn]= useState(false);
    const imgLinks=[{
        id:1,
        links:Client1,
    },
    {
        id:2,
        links:Client2,
    }
    ,
    {
        id:3,
        links:Client3,
    },
    {
        id:4,
        links:Client4,
    },
    {
        id:5,
        links:Client5,
    }
    ,
    {
        id:6,
        links:Client6,
    } ,
    {
        id:7,
        links:Client7,
    }
    ,
    {
        id:8,
        links:Client8,
    }

]

    return(
        <div className="w-[100vw] flex bg-gradient-to-br from-violet-700 via-pink-700 to-purple-700 flex-col border-t-[1px] justify-center items-center">
           <h3 className="text-[2rem] pt-5 text-slate-200 font-headingFont text-center cursor-pointer">Our Happy Customers</h3>
            <ScrollTrigger onEnter={()=>setMotionOn(true)} onExit={()=>setMotionOn(false)}>
            <div className="relative h-full overflow-hidden py-6 bg-transparent mx-auto" >
                {motionOn &&
                <motion.div
                    className="flex py-3"
                    animate={{
                        x: ['0%', '-100%'],
                        transition: {
                            ease: 'linear',
                            duration: 15,
                            repeat: Infinity,
                        }
                    }}
                >
                    {imgLinks.map((image) => (
                        <div key={image.id} className="flex-shrink-0" >
                            <div className="flex px-2 md:px-4 items-center justify-center h-full">
                                <img className="w-[100px] sm:w-[120px] md:w-[150px] lg:w-[170px] bg-transparent cursor-pointer bg-white rounded-3xl p-2" src={image.links} alt="" />
                            </div>
                        </div>
                    ))}
                    {imgLinks.map((image) => (
                        <div key={image.id} className="flex-shrink-0" >
                            <div className="flex px-2 md:px-4 items-center justify-center h-full">
                                <img className="w-[100px] sm:w-[120px] md:w-[150px] lg:w-[170px] bg-transparent cursor-pointer bg-white rounded-3xl p-2" src={image.links} alt="" />
                            </div>
                        </div>
                    ))}
                    {imgLinks.map((image) => (
                        <div key={image.id} className="flex-shrink-0" >
                            <div className="flex px-2 md:px-4 items-center justify-center h-full">
                                <img className="w-[100px] sm:w-[120px] md:w-[150px] lg:w-[170px] bg-transparent cursor-pointer bg-white rounded-3xl p-2" src={image.links} alt="" />
                            </div>
                        </div>
                    ))}
                </motion.div>}
                {motionOn &&
                <motion.div
                    className="flex md:hidden py-3"
                    animate={{
                        x: ['-100%', '0%'],
                        transition: {
                            ease: 'linear',
                            duration: 15,
                            repeat: Infinity,
                        }
                    }}
                >
                    {imgLinks.map((image) => (
                        <div key={image.id} className="flex-shrink-0" >
                            <div className="flex px-2 md:px-4 items-center justify-center h-full">
                                <img className="w-[100px] sm:w-[120px] md:w-[150px] bg-transparent cursor-pointer bg-white rounded-3xl p-2" src={image.links} alt="" />
                            </div>
                        </div>
                    ))}
                    {imgLinks.map((image) => (
                        <div key={image.id} className="flex-shrink-0" >
                            <div className="flex px-2 md:px-4 items-center justify-center h-full">
                                <img className="w-[100px] sm:w-[120px] md:w-[150px] bg-transparent cursor-pointer bg-white rounded-3xl p-2" src={image.links} alt="" />
                            </div>
                        </div>
                    ))}
                </motion.div>}
            </div>
            </ScrollTrigger>
        </div>
    )
}