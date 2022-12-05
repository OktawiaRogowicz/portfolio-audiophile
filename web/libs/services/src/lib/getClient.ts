import { createClient } from 'next-sanity'
import { config } from './config'

export const sanityClient = createClient(config)

export const previewClient = createClient({
  ...config,
  token: process.env.NEXT_PUBLIC_SANITY_PREVIEW_TOKEN,
  useCdn: false,
})

// export const getClient = (usePreview: boolean) =>
//   usePreview ? previewClient : sanityClient