import { CartProvider } from "@/utils/store"

export default function App({ Component, pageProps }) {
  return <CartProvider><Component {...pageProps} /></CartProvider>
}
