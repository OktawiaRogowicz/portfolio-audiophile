import { Footer } from "../libraries/components/Footer/Footer";
import { getSiteConfiguration } from "../libraries/services/getSiteConfiguration";
import { globalStyles } from "../libraries/styles/globalStyles";
import { Header } from "../libraries/components/Header";

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
