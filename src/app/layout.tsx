import './globals.css';
import type { Metadata } from 'next';
import Script from "next/script";



export const metadata: Metadata = { 
    
  title: 'Welcome',
  description:'No Description Right Now', 

    
}


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en"> 
    
     <head>

    </head>
      
     <body id="App" className="" >
      
        {children}
        
      </body>
      

      
    </html>
  )
}
