import groq from "groq";
import client from "../client";
import { getSiteConfiguration } from "../libraries/services/getSiteConfiguration";
import { Container } from "../libraries/components/Container";
import { SiteConfiguration } from "../libraries/models/site-configuration";
import GoBackButton from "../libraries/components/Buttons/GoBackButton";
import { CheckoutContainer } from "../libraries/components/CheckoutPage/CheckoutContainer";

interface Props {
  products: any;
  siteConfiguration: SiteConfiguration;
}

const Checkout = ({ products, siteConfiguration }: Props) => {
  return (
    <>
      <Container backgroundColor={"gray"}>
        <GoBackButton />
        <CheckoutContainer products={products} />
      </Container>
    </>
  );
};

const query = groq`*[_type == "category"][0]{
    ...
}`;

export async function getStaticProps() {
  const products = await client.fetch(query);
  const siteConfiguration = await getSiteConfiguration();
  return {
    props: {
      products,
      siteConfiguration,
    },
  };
}
export default Checkout;
