import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
        <Head>
          {/* เพิ่มไอคอนใน Head */}
          <link rel="icon" href="/Kayna12.ico" />
          <title>KaynaVtuberTH</title>
          <meta name="description" content="Official website of KaynaVtuberTH. Enjoy gaming, fun content, and promotional videos." />
          <meta name="keywords" content="Kayna, VTuber, gaming, fun content, promotional videos" />
          <meta name="author" content="KaynaVtuberTH" />
        </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
