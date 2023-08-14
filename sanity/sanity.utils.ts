import { groq } from "next-sanity";
import { client } from "./lib/client";
import { Skill } from "../typing";

export async function getSkills(): Promise<Skill[]> {
  return client.fetch(
    groq`
    *[_type == "skills"]{skill, "image": image.asset->url, progress}`
  );
}
