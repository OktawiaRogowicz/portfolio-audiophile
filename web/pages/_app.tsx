import { Header } from "../libs/services/src";
import client from "../client";
import groq from "groq";
import { Container } from "../libs/services/src/lib/Container";
import { globalStyles } from "@portfolio-audiophile/styles";
import { Footer } from "../libs/services/src/lib/Footer/Footer";

export default function App({ Component, pageProps }) {
  console.log(pageProps.header, "data");
  globalStyles();
  return (
    <div>
      <Header header={pageProps.header} version={"withCart"} />
      <Component {...pageProps} />
      <Footer footer={pageProps.footer} header={pageProps.header} />
    </div>
  );
}

App.getInitialProps = async () => {
  let pageProps = {
    footer: {},
    header: {},
  };

  try {
    let data = await client.fetch(groq`
      *[_type == "header"][0]{
        logo,
        menu[] {
          ...,
          "link": *[_type == "category" && _id == ^._ref][0] {
            "href": slug.current,
            name,
          }
        }
      }
    `);
    pageProps["header"] = data;
    let data2 = await client.fetch(groq`
      *[_type == "footer"][0]{
        description,
        copyright,
        socialMedia
      }
    `);
    pageProps["footer"] = data2;
  } catch (error) {}

  return { pageProps };
};
