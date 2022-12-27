import { groq } from "next-sanity"
import { sanityClient} from "./getClient";

export const getSanityQuery = async () => {
    const query = groq`*[_type == "product"] {
        ...
    }`

    const data = await sanityClient.fetch(query)

    if (!data.length) {
        return {
            props: {
                data: [],
            },
        }
    } else {
        return {
            props: {
                data,
            },
        }
    }
}


