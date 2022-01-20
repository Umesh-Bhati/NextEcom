import Link from "next/link";

export default function Footer () {
    return (
        <footer className="flex flex-1 bottom-0  justify-evenly items-center flex-col py-3 bg-slate-400 w-full" >
          <section className="flex flex-row w-full m-0" >
          <nav className="flex flex-1 flex-col items-center justify-evenly " >
                <a className="text-lg text-black font-bold" >ABOUT US</a>
                <Link  className="cursor-pointer" href={"#"}  ><a className="text-base font-semibold text-black py-1 " >Support</a></Link>
                <Link  className="cursor-pointer" href={"#"}  ><a className="text-base font-semibold text-black py-1 " >Return policy</a></Link>
                <Link  className="cursor-pointer" href={"#"}  ><a className="text-base font-semibold text-black py-1 " >Contact us</a></Link>
                <Link  className="cursor-pointer" href={"#"}  ><a className="text-base font-semibold text-black py-1 " >Contact us</a></Link>
            </nav>
            <nav className="flex flex-1 flex-col items-center justify-evenly " >
                <a className="text-base text-black font-bold" >FOLLOW US</a>
                <Link  className="cursor-pointer" href={"https://www.instagram.com/"}  ><a className="text-base font-semibold text-black py-1 " target={"_blank"} >Instagram</a></Link>
                <Link  className="cursor-pointer" href={"https://www.facebook.com/"}  ><a className="text-base font-semibold text-black py-1 " target={"_blank"}  >Facebook</a></Link>
                <Link  className="cursor-pointer" href={"https://www.twitter.com/"}  ><a className="text-base font-semibold text-black py-1 " target={"_blank"} >Twitter</a></Link>
                <Link  className="cursor-pointer" href={"https://www.youtube.com/"}  ><a className="text-base font-semibold text-black py-1 " target={"_blank"}  >Youtube</a></Link>
            </nav>
          </section>
            <p className="  m-0 text-center text-sm   font-semibold " >&copy;Copyright 2022 store/webname.com <br/> Developed by Umesh Bhati</p>
           
        </footer>
    )
}