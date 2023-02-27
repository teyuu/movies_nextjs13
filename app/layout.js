import './globals.css'
import { Montserrat } from '@next/font/google'
import Navbar from './components/NavBar'
import Footer from './components/Footer'


const montserrat = Montserrat({
  weight:["400", "700"],
  subsets:["latin"]
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className={`${montserrat.className}`}>
      <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
