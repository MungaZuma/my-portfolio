"use client"

import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { easeIn, motion } from 'framer-motion'
import Link from 'next/link'

type Props = {}

const Socialmedia = [
  {
    id: 1,
    platform: "facebook",
    url: "https://www.facebook.com/munga.zuma.5/"

  },
  {
    id: 2,
    platform: "twitter",
    url: ""
  },
  {
    id: 3,
    platform: "github",
    url: ""
  },
  {
    id: 4,
    platform: "linkedin",
    url: ""
  },
  {
    id: 5,
    platform: "discord",
    url: ""
  },
  {
    id: 6,
    platform: "instagram",
    url: ""
  },
]

function page({ }: Props) {
  return (
    <header className='sticky top-0  p-5  max-w-5xl flex items-start justify-between mx-auto z-20 xl:items-center'>
      <motion.div
        initial={{
          x: -500,
          opacity: 0
        }}
        animate={{
          x: 0,
          opacity: 1
        }}
        transition={{
          duration: 1
        }} className='flex flex-row items-center'>
        {Socialmedia.map((socials) => (
          <SocialIcon
            key={socials.id}
            network={socials.platform}
            url={socials.url}
            fgColor='black'
            bgColor='#848484'
            style={{ width: 25, height: 25 }}
            className='mx-3 h-7 w-7' />
        ))}
      </motion.div>
      <motion.div 
      initial={{opacity:0}}
      animate={{opacity:1, scale:[-1,1,2,1]}}
      transition={{duration:3.5}} className='flex flex-row w-8'>
        <div className="Home m-2">
          <Link href="/">
            <img src='https://images.unsplash.com/photo-1570158268183-d296b2892211?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YmxhY2slMjBmYWNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60' alt='Home' className='relative h-5 w-5 rounded-full object-cover mx-auto bg-gray-300 border-3 border-gray-300' />
          </Link>
          <div className="content">
            <Link href="/studio">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
              </svg>
            </Link>
          </div>
        </div>
      </motion.div>
      <motion.div className="flex-row items-center text-gray-300 cursor-pointer"
        initial={{
          x: 500,
          opacity: 0
        }}
        animate={{
          x: 0,
          opacity: 1
        }}
        transition={{
          duration: 1
        }}>
        <SocialIcon
          network='email'
          fgColor='black'
          bgColor='#848484'
          style={{ width: 25, height: 25 }}

          className='mx-3 h-7 w-7 hidden md:inline-flex'
        />
        <p className='text-sm hidden md:inline-flex uppercase text-gray-400'>Get in touch</p>
      </motion.div>
    </header>
  )
}

export default page