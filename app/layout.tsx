import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Roboto } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'
import SiteFooter from './components/Sitefooter'
import Chart from './components/Chart'

const inter = Roboto( { weight:"500", subsets: ['latin'] })

// const tagId = process.env.GTM_TAG;

export const metadata: Metadata = {
  metadataBase: new URL("https://gausiyacoutur.com/"),
  title: 'Bridal Couture Dream Wedding Gowns Design',
  description: 'Elegance Beaded Luxury Wedding Gowns Couture Fabric Dresses Design',
  
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
      <meta name="p:domain_verify" content="73898f71512804d5be90bcf98b7f2cba"/>
      <meta name="google-site-verification" content="KFd32pKKZCRXUCGVUH4ERiog8Q6NqZDim5pV2MXay3E" />
        </head>
      <body className={inter.className}>
        <Navbar/>
        <Chart/>
        <div className="flex-1">{children}</div>
        <Analytics />
        <SpeedInsights />
        <SiteFooter/>
        </body>
    </html>
  )
}
