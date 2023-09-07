import React from 'react'
import Image from 'next/image'
import { getSkills } from '../../../sanity/sanity.utils'
import SectionHeader from "@/components/SectionHeader/page"

type Props = {}

export default async function page() {


    const skills = await getSkills()
    


    return (
        <div className='h-[350] w-full flex flex-col items-center justify-center'>
            <SectionHeader sectionHeader="Skills" />
            {skills.map((skill) => (

                <div key={skill._id} className='grid grid-col-4 gap-5'>
                    <div className="bg-gray-900 opacity-80 w-96 h-96 p-4 ">
                        <div><Image
                            src={skill.image}
                            width={250}
                            height={250}
                            alt={skill.skill} /></div>
                        <div>{skill.skill}</div>
                        <div>{skill.progress}</div>
                    </div>
                </div>
            ))}
        </div>
    )
}
