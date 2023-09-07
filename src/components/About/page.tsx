import React from 'react'
import SectionHeader from "@/components/SectionHeader/page"



export default async function page() {

  return (
    <div className='flex my-2 flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto item-center'>
      <SectionHeader sectionHeader = "About"/>
    </div>    
  )
}

