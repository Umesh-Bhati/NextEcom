import React, { useContext, useState } from "react";
import Link from "next/link";
import { HiOutlineMenuAlt2, HiOutlineMenuAlt3 } from "react-icons/hi";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { CartContext } from "../context/CartContext";

export default function NavBar() {
  const [showNav, setShowNav] = useState(true);
  const { cartData } = useContext(CartContext);

  return (
    <header className="flex justify-between px-10 items-center sticky top-0 z-30 bg-white">
      {showNav ? (
        <HiOutlineMenuAlt3
          className="text-black md:hidden w-8 h-8 "
          onClick={() => setShowNav(!showNav)}
        />
      ) : (
        <HiOutlineMenuAlt2
          className="text-black md:hidden w-8 h-8 "
          onClick={() => setShowNav(!showNav)}
        />
      )}
      <Link href={"/"} className="text-center ml-4 bg-black self-center ">
        <a className="text-center text-xl font-bold text-blue-500 self-center ">
          LOGO
        </a>
      </Link>

      <section className="md:flex items-center justify-between space-x-16 hidden ">
        <NavItem content={"Home"} href={"/"} />
        <NavItem content={"Cart"} href={"/"} />
        <NavItem content={"Profile"} href={"/"} />
        <NavItem content={"Blog"} href={"/"} />
      </section>
      <Link href={"/cart"}>
        <a>
          <CartNavigatorIcon count={cartData.length} />
        </a>
      </Link>

      <section
        className={
          (showNav ? "translate-x-full" : "translate-x-40") +
          " md:hidden fixed h-full flex flex-col top-12 items-start px-5 pt-5   m-0 bg-gray-500 bg-opacity-90 w-full  text-white  space-y-5  transition-transform"
        }
      >
        <h1>Home</h1>
        <h1>Cart</h1>
        <h1>Profile</h1>
        <h1>Blog</h1>
      </section>
    </header>
  );
}

function NavItem({ content, href }) {
  return (
    <li className="text-lg font-semibold list-none">
      <Link
        className={({ isActive }) =>
          isActive ? "text-blue-500" : "text-gray-500"
        }
        href={href}
      >
        {content}
      </Link>
    </li>
  );
}

function CartNavigatorIcon({ count, className }) {
  return (
    <button className="  relative p-2  text-black text-center m-0">
      <HiOutlineShoppingCart className="w-8 h-8 m-0 text-black" />
      <p
        className={
          " bottom-6 left-6 absolute px-2 py-0.5 rounded-full bg-blue-500 text-xs font-semibold"
        }
      >
        {count <= 9 ? count : "9+"}
      </p>
    </button>
  );
}
