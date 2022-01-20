import Navbar from "./Navbar"
import Footer from "./Footer"
import CartContextProvider from "../context/CartContext"
export default function Layout({ children }) {
  return (
    <CartContextProvider>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </CartContextProvider>
  )
}