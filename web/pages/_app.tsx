import { Header } from "../libs/services/src";
import { globalStyles } from "@portfolio-audiophile/styles";
import { Footer } from "../libs/services/src/lib/Footer/Footer";
import { getSiteConfiguration } from "../libs/services/src/lib/getSiteConfiguration";

export default function App({ Component, pageProps }) {
  globalStyles();
  return (
    <div>
      <Header header={pageProps.header} />
      <Component {...pageProps} />
      <Footer footer={pageProps.footer} header={pageProps.header} />
    </div>
  );
}

App.getInitialProps = async () => {
  let pageProps = {};

  try {
    const siteConfiguration = await getSiteConfiguration();
    pageProps = siteConfiguration;
  } catch (error) {}

  return { pageProps };
};
