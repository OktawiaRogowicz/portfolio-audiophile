import { Footer } from "../libraries/components/Footer/Footer";
import { getSiteConfiguration } from "../libraries/services/getSiteConfiguration";
import { globalStyles } from "../libraries/styles/globalStyles";
import { Header } from "../libraries/components/Header";
import { ShoppingCartProvider } from "../libraries/context/shoppingCartContext";

export default function App({ Component, pageProps }) {
  globalStyles();
  return (
    <ShoppingCartProvider>
      <Header header={pageProps.header} />
      <Component {...pageProps} />
      <Footer footer={pageProps.footer} header={pageProps.header} />
    </ShoppingCartProvider>
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
