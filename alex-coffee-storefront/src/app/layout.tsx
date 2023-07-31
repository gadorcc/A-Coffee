import Providers from "@modules/providers"
import "styles/globals.css"
import 'bootstrap-icons/font/bootstrap-icons.css'
// import 'bootstrap/dist/css/bootstrap.min.css';



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <main className="relative">{children}</main>
        </Providers>
      </body>
    </html>
  )
}
