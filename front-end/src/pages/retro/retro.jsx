import { DetailBanner } from "../../components/detail_banner/detail_banner";
import { Navbar } from "../../components/navbar/navbar";
import { ItemCard } from "../../components/itemcard/itemcard";
import './retro.css'
import { Footer } from "../../components/footer/footer";

export const Retro = ()=>{

    const card = [1,2,3,4,5,6,7,8,9,0,9,8,7,6,5,]

    return <>
        <Navbar/>
        <DetailBanner/>
        <div className="retro">
        {card.map((index,item)=>{
            return <ItemCard key={index}/>
          })
          }   
        </div>
        <Footer/>
    </>
}