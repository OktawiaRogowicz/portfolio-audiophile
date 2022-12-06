import groq from 'groq'
import client from '../../client'

interface Props {
    category: {
        name: string,
        products: {
            name: string
        }[]
    }
}

const Category = ({category}: Props) => {
    return (
        <div>
            <span>By {category.name}</span>
            {category.products && category.products.length > 0 && category.products.map((product) => {
                return <p>{product.name}</p>
            })}
        </div>
    )
}

const query = groq`*[_type == "category" && slug.current == $slug][0]{
    name, 
    slug,
    _id,
    "products": *[_type == 'product' && references(^._id)] {
        name,
        slug,
        image {
            ...
        },
    }
}`

export async function getStaticPaths() {
    const paths = await client.fetch(
        groq`*[_type == "category" && defined(slug.current)][].slug.current`
    )
    console.log('paths: ', paths)

    return {
        paths: paths.map((slug) => ({params: {slug}})),
        fallback: false,
    }
}

export async function getStaticProps(context) {
    const { slug = "" } = context.params
    const category = await client.fetch(query, { slug })
    return {
        props: {
            category
        }
    }
}
export default Category