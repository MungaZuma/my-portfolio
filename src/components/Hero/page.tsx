"use client"
import { motion } from 'framer-motion'
import React from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import Bgcircle from "@/components/Bgcircle/page"
import Link from 'next/link'

type Props = {}

function page({ }: Props) {

    const [text, count] = useTypewriter({
        words: [
            "Hi. My name is David.",
            "I am a Software Designer, and Developer.",
            "Lets work Together."
        ],
        loop: true,
        delaySpeed: 2000,
    })



    return (
        <motion.div
         initial={{opacity:0}}
         animate={{opacity:1}}
         transition={{duration: 1.5}}
          className='h-screen flex flex-col items-center justify-center space-y-3 text-center overflow-hidden'>
            {/* bgcirles */}
            <Bgcircle />

            {/* image */}
            <div>
                <img src="https://images.unsplash.com/photo-1570158268183-d296b2892211?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YmxhY2slMjBmYWNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="My Photo"
                    className='relative h-32 w-32 rounded-full object-cover mx-auto bg-gray-300 border-4 border-gray-300' />
            </div>

            {/* tittle */}
            <div>
                <h2 className='py-2 text-gray-400 uppercase tracking-[15px]'>software engineer</h2>
            </div>

            {/* typewritter */}
            <div>
                <h1 className='text-4xl font-semibold'>
                    <span>{text}</span>
                    <Cursor cursorColor='#FF8552' />
                </h1>
            </div>

            {/* buttons */}
            <div className='pt-5 z-20'>
                <Link href="#hero">
                    <button className='heroButton'>Home</button>
                </Link>
                <Link href="#about">
                    <button className='heroButton'>about me</button>
                </Link>
                <Link href="#skill">
                    <button className='heroButton'>skill</button>
                </Link>
                <Link href="#projects">
                    <button className='heroButton'>projects</button>
                </Link>
                <Link href="#contact">
                    <button className='heroButton'>contact me</button>
                </Link>
            </div>
        </motion.div>
    )
}

export default page