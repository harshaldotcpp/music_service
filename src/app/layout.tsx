import './globals.css';
import type { Metadata } from 'next';
import Script from "next/script";
import {inconsolata} from "@/fonts/fonts";
import { AlertContextProvider } from "@/contexts/AlertContext";
import Alert from "@/components/global/Alert";




export const metadata: Metadata = { 
  title: 'Welcome',
  description:'No Description Right Now', 
}


export default function RootLayout(props: { 
    home: React.ReactNode,
    landing: React.ReactNode
}) { 
    const isAuth = false;
  return (
    <html lang="en"> 
    
     <head>

    </head>
      
     <body id="App" className={inconsolata.className} > 
    
       <AlertContextProvider>
        <Alert />
        { isAuth ? props.home : props.landing }
       </AlertContextProvider>
      </body>
      
    </html>
  )
}
