import { Footer } from "../libraries/components/Footer/Footer";
import { getSiteConfiguration } from "../libraries/services/getSiteConfiguration";
import { globalStyles } from "../libraries/styles/globalStyles";
import { Header } from "../libraries/components/Header";
import { ShoppingCartProvider } from "../libraries/context/shoppingCartContext";

export default function App({ Component, pageProps }) {
  globalStyles();
  console.log("pageprops: ", pageProps);
  return (
    <ShoppingCartProvider>
      <Header
        header={pageProps.siteConfiguration.header}
        siteConfiguration={pageProps.siteConfiguration}
      />
      <Component {...pageProps} />
      <Footer
        footer={pageProps.siteConfiguration.footer}
        header={pageProps.siteConfiguration.header}
      />
    </ShoppingCartProvider>
  );
}

App.getInitialProps = async () => {
  let pageProps = {};

  try {
    const siteConfiguration = await getSiteConfiguration();
    pageProps = { siteConfiguration };
  } catch (error) {}

  return { pageProps };
};
