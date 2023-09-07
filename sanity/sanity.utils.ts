import { groq } from "next-sanity";
import { client } from "./lib/client";
import { Skill, Experience } from "../typing";

export async function getSkills(): Promise<Skill[]> {
  return client.fetch(
    groq`
    *[_type == "skills"]{skill, "image": image.asset->url, progress}`
  );
}

export async function getExperience(): Promise<Experience[]> {
  return client.fetch(
    groq`
    *[_type == "experience"]{_id,jobtitle, companyname, date_started, date_ended}`
  );
}
