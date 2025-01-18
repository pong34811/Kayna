import "@/styles/globals.css";
import dynamic from 'next/dynamic';

const Config = dynamic(() => import('./routes/config'), { ssr: false });



export default function MyApp({ Component, pageProps }) {
  return <Config />;
}
