import { Head, Html, Main, NextScript } from "next/document";
import { getCssText } from "../libraries/styles/stitches";

export default function MyDocument() {
  return (
    <Html lang="en">
      <Head>
        <style
          id="stitches"
          dangerouslySetInnerHTML={{ __html: getCssText() }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
