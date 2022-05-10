import { createClient } from 'next-sanity'

export const config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  apiVersion: '2-21-03025',
  useCdn: process.env.MODE_ENV === 'production',
}

// set up the client for fetching data in the get props page functions
export const sanityClient = createClient(config)
