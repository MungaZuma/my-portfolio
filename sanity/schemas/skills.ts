import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'skills',
  title: 'Skills',
  type: 'document',
  fields: [
    defineField({
      name: 'skill',
      title: 'Skill',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
    }),
    defineField({
      name:'progress',
      title:'Progress',
      type:'number',
      description:'This should range from 0 - 100',
      validation:(Rule) => Rule.min(0).max(100)
    })
  ],
})
