// import "../styles/globals.css";
import Head from 'next/head';
// import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { FixedPlugin, Layout } from "@/components";
import { metadata } from '../utils/metadata';

// import { Navbar, Footer } from "@/components";
import '@fortawesome/fontawesome-free/css/all.min.css';



const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  display: "swap",
});


// export const metadata: Metadata = {
//   title: "Morlabs",
//   description: "Integrating SDK And API into Web3.",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Head>
         <title>{metadata.title}</title>
         <meta name="description" content={metadata.description} />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
          integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <link rel="shortcut icon" href="/favicon.jpg" type="image/jpg" />
        
      </Head>
      <main className={roboto.className}>
        <Layout>
         
          {children}
        
          <FixedPlugin />
        </Layout>
      </main>
    </>
  );
}
