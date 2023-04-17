import { CartProvider } from "@/utils/store"
import "../styles/styles.css"

export default function App({ Component, pageProps }) {
  return <CartProvider><Component {...pageProps} /></CartProvider>
}
