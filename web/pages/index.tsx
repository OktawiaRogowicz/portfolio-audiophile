import {StyledButton} from "../libs/services/src";
import {sanityClient} from "../libs/services/src/lib/getClient";

interface Props {
    data: any;
}

const Home = ({ data }: Props) => {
    console.log('data: ', data)
    return (
        <div>
            blep
            <StyledButton>Button</StyledButton>
        </div>
    )
}

export const getStaticProps = async () => {
    const query = '*[ _type == "product"]'
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

export default Home