import HeroSlider from "../components/HeroSlider";
import FeatureIcon from "../components/Home/FeatureIcon";
import Product from "../components/Home/Product";
import dummyData from "../constants/dummyData";



export default function Home () {
    return(
       <main className="bg-white" >
          <section className="w-full h-full bg-white" >
          <HeroSlider/>
          </section>
          <section className="flex flex-col items-start md:flex-row md:justify-center md:space-x-8 md:my-20 " >
             <FeatureIcon img={"https://flone-react.pages.dev/assets/img/icon-img/support-1.png"} title={"Free Shipping"} des={"Free shipping all order"}  />
             <FeatureIcon img={"https://flone-react.pages.dev/assets/img/icon-img/support-2.png"} title={"Support 24/7"} des={"Free shipping all order"}  />
             <FeatureIcon img={"https://flone-react.pages.dev/assets/img/icon-img/support-3.png"} title={"Money Return"} des={"Free shipping all order"}  />
             <FeatureIcon img={"https://flone-react.pages.dev/assets/img/icon-img/support-4.png"} title={"Order Discount"} des={"Free shipping all order"}  />
          </section>
           <section className="grid m-auto grid-cols-2 md:grid-cols-4 gap-4  xl:px-0 px-2 pb-10 " >
             {dummyData.map((i,k)=>(
                <Product title={i.title} price={i.price} id={i.id} key={i.id} img={i.img} />
             ))}
           </section>
       </main>
    )
}