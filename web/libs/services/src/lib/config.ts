export const SANITY_API_CLIENT_VERSION = '2021-03-25'

export const config = {
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "",
    apiVersion: SANITY_API_CLIENT_VERSION,
    useCdn: true,
}
// export const urlFor = (source: any) => createImageUrlBuilder(config).image(source)
