// import skills from "./sanity/schemas/skills";

interface sanityBody{
    _createdAt: string,
    _id: string,
    _rev:string,
    updatedAt:string,   

}

export interface Skill extends sanityBody{
    _type: skills,
    skill: string,
    image: image,
    progress: string,
}

export interface Experience extends sanityBody{
    _type: experience,
    jobtitle: string,
    companyname: string,
    
}