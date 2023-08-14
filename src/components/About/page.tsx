import React from 'react'
import { getSkills } from '../../../sanity/sanity.utils'


export  default async function page() {

    const skills = await getSkills()
  return (
    <div className='h-screen, w-full'>
        {skills.map((skill) =>(
            <div key={skill._id}>
                <div>{skill.skill}</div>
                <div>{skill.progress}</div>
            </div>
        ))}
    </div>
  )
}

