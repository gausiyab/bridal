import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'
import SiteFooter from './components/Sitefooter'
import Chart from './components/Chart'

const inter = Inter({ subsets: ['latin'] })

// const tagId = process.env.GTM_TAG;

export const metadata: Metadata = {
  metadataBase: new URL("https://gausiyacoutur.com/"),
  title: 'Bridal Couture Dream Wedding Gowns Design',
  description: 'Elegance Bridal Luxury Wedding Gowns Couture Fabric Dresses Design',
  
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* <meta name="p:domain_verify" content="dfc3495cebfd2915a5b3eba5bfd56341"/>
        <meta name="google-site-verification" content="WvpRGEe3bm6tkoYJLtA0MVQngCcgYyUq03F5eZ5mBUU" />
        <meta name="yandex-verification" content="48fbdca9565c4121" /> */}
          {/* <script
          dangerouslySetInnerHTML={{
            __html:`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer',"${tagId}")`
          }}/> */}
        </head>
      <body className={inter.className}>
        <Navbar/>
        <Chart/>
        {children}
        <SiteFooter/>
        </body>
    </html>
  )
}
