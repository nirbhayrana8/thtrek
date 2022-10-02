import Navbar from "../components/Navigation/Navbar"
import globals from "../styles/globals.css"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
