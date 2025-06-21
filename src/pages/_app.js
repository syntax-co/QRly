import AnimatedGrid from "@/components/misc/animate-grid";
import NavBar from "@/components/navbar/navbar";
import "@/styles/globals.css";
import { useEffect, useRef } from "react";




export default function App({ Component, pageProps }) {
  return (
    <div className='w-full h-screen relative'
    >
      <AnimatedGrid />
      <div className='relative w-full h-full'
      >
        <NavBar />
        <Component {...pageProps} />
      </div>
    </div>
  );
}
