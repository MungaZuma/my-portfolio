import { type SchemaTypeDefinition } from 'sanity'

import blockContent from './schemas/blockContent'
import skills from './schemas/skills'
import experience from './schemas/experience'
import  personal from './schemas/personalInfo'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [experience, personal, skills, blockContent],
}
