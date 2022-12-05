import Link from 'next/link'
import groq from 'groq'
import client from '../client'

interface Props {
    products: any;
}


const Home = ({products}: Props) => {
    console.log("data: ", products)
    return (
        <div>
            <h1>Welcome to a blog!</h1>
            {products.length > 0 && products.map((product) => {
                return <Link href={`product/${product.slug.current}`}>{product.name}</Link>
            })}
        </div>
    )
}

export async function getStaticProps() {
    const products = await client.fetch(groq`
      *[_type == "product"] {
        name, 
        slug,
        image {
        ...
        },
        productDescription,
        featuresDescription,
      }
    `)
    return {
        props: {
            products
        }
    }
}

export default Home