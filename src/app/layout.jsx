import { Inter } from "next/font/google"
import "./globals.css"
import Script from "next/script"
import Header from "../../Components/HeaderFooter/Header"
import Footer from "../../Components/HeaderFooter/Footer"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.css"
        rel="stylesheet"
      />

      <body className={inter.className}>
        
        <Header />
        {children}
        <Footer />
        <Script src="../path/to/flowbite/dist/flowbite.min.js" />
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.js" />
      </body>
    </html>
  )
}