import groq from 'groq'
import client from '../../client'

interface Props {
    name: string,
}

const Product = (product: Props) => {
    return (
        <div>
            <span>By {product.name}</span>
        </div>
    )
}

const query = groq`*[_type == "product" && slug.current == $slug][0]{
    name, 
    slug,
    image {
    ...
    },
    productDescription,
    featuresDescription,
}`

export async function getStaticPaths() {
    const paths = await client.fetch(
        groq`*[_type == "product" && defined(slug.current)][].slug.current`
    )

    return {
        paths: paths.map((slug) => ({params: {slug}})),
        fallback: false,
    }
}

export async function getStaticProps(context) {
    const { slug = "" } = context.params
    const product = await client.fetch(query, { slug })
    return {
        props: {
            product
        }
    }
}
export default Product