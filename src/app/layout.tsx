import './globals.css'
import Navbar from "@/components/Navbar/page"
import Footer from "@/components/Footer/page"


export const metadata = {
  title: 'DAVID ZUMA MUNGA',
  description: 'This is my portfolio website.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

      <body>
        <Navbar />
        {children}
        {/* // <Footer /> */}
      </body>

    </html>
  )
}
