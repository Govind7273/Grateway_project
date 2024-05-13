"use client";
import Client1 from "./assets/image/clients/client-1.png";
import Client2 from './assets/image/clients/client-2.png';
import Client3 from './assets/image/clients/client-3.png';
import Client4 from './assets/image/clients/client-4.png';
import Client6 from './assets/image/clients/client-6.png';
import Client7 from './assets/image/clients/client-7.png';
import Client8 from './assets/image/clients/client-8.png';
import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "../../components/ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
    return (
        <div className="bg-slate-100 p-6">
            <h1 className="text-5xl text-gray-700 font-extrabold text-center">Our Clients</h1>
            <div className="h-auto py-4 rounded-md flex flex-col antialiased dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
                <InfiniteMovingCards
                    items={testimonials}
                    direction="right"
                    speed="slow"
                />
            </div>
        </div>
    );
}

const testimonials = [
    {
        id:1,
        img: Client1,
    },
    {
        id:2,
        img: Client2,
    },
    {
        id:3,
        img: Client3,
    },
    {
        id:4,
        img: Client4,
    },
    {
        id:6,
        img: Client6,
    },
    {
        id:7,
        img: Client7,
    },
    {
        id:8,
        img: Client8,
    },
];
