// Inside asni-blog/sanity.config.js
import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { schemaTypes } from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'ASNI Blog',
  projectId: 'your-project-id',
  dataset: 'production',
  basePath: '/studio', // <-- Add this line so the studio works at /studio
  plugins: [structureTool()],
  schema: {
    types: schemaTypes,
  },
})