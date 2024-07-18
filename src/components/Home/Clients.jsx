"use client";
import Client1 from "./assets/image/clients/client-1.png";
// import Client2 from './assets/image/clients/client-2.png';
// import Client3 from './assets/image/clients/client-3.png';
// import Client4 from './assets/image/clients/client-4.png';
import Client5 from './assets/image/clients/client-5.png';
import Client6 from './assets/image/clients/client-6.png';
import Client7 from './assets/image/clients/client-7.png';
import Client8 from './assets/image/clients/client-8.png';
import Client9 from './assets/image/clients/client-9.png';
import Client10 from './assets/image/clients/client-10.png';
import Client11 from './assets/image/clients/client-11.png';
// import Client12 from './assets/image/clients/client-12.png';
import Client13 from './assets/image/clients/client-13.png';
import Client14 from './assets/image/clients/client-14.png';
// import Client15 from './assets/image/clients/client-15.png';
import Client16 from './assets/image/clients/client-16.png';
import Client17 from './assets/image/clients/client-17.png';
import Client18 from './assets/image/clients/client-18.png';
import Client19 from './assets/image/clients/client-19.png';
import Client20 from './assets/image/clients/client-20.png';
import Client21 from './assets/image/clients/client-21.png';

import { InfiniteMovingCards } from "../../components/ui/infinite-moving-cards";
import { motion } from "framer-motion";

export function InfiniteMovingCardsDemo() {
    return (
        <div className="bg-slate-100 p-6">
            <motion.h1
                initial={{ opacity: 0, y: -100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.2,
                    y: { type: "spring", stiffness: 30 },
                    opacity: { duration: 0.6 },
                    ease: "easeInOut"
                }}
                className="md:text-MainHeading text-MainHeading-sm font-extrabold text-center">Our Clients</motion.h1>
            <div className="h-auto md:py-4 py-2 rounded-md flex flex-col antialiased dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
                <InfiniteMovingCards
                    items={testimonials}
                    direction="right"
                    speed="slow"
                />
            </div>
            <div className="h-auto md:py-4 py-2 rounded-md flex flex-col antialiased dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
                <InfiniteMovingCards
                    items={testimonials1}
                    direction="left"
                    speed="slow"
                />
            </div>
        </div>
    );
}

const testimonials = [
    {
        id: 1,
        img: Client1,
    },
    {
        id: 5,
        img: Client5,
    },
    {
        id: 6,
        img: Client6,
    },
    {
        id: 7,
        img: Client7,
    },
    {
        id: 8,
        img: Client8,
    },
    {
        id: 9,
        img: Client9,
    },
    {
        id: 10,
        img: Client10,
    },
    {
        id: 11,
        img: Client11,
    }
    
];


const testimonials1 = [
    {
        id: 13,
        img: Client13,
    },
    {
        id: 14,
        img: Client14,
    },
    
    {
        id: 16,
        img: Client16,
    },
    {
        id: 17,
        img: Client17,
    },
    {
        id: 18,
        img: Client18,
    },
    {
        id: 21,
        img: Client21,
    },
    {
        id: 20,
        img: Client20,
    },
    {
        id: 19,
        img: Client19,
    }
   
];
