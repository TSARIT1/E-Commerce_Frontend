import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './App.css'
import Header from './Header'
import Product from "./Product";
import Scrollbar from "./Scrollbar";
import Mensjacketpage from "./Mensjacketpage";
import Frockpage from "./Frockpage";
import Spactaclespage from "./Spactaclespage";
import Earringspage from "./Earringspage";
import Shoespage from "./Shoespage";
import Handbagpage from "./Handbagpage";
import Specialoffer from "./Specialoffer";
import Mostbuy from "./Mostbuy";
import Airpodpage from "./Airpodpage";
import Headphonepage from "./Headphonepage";
import Mixturepage from "./Mixturepage";
import Coffeepage from "./Coffeepage";
import Bike1page from "./Bike1page";
import Firstpage from "./Firstpage";
import CategoryFilter from "./CategoryFilter";



function App() {

  return (
    <>
      
      <CategoryFilter/>
      <Firstpage/>
     
      <Product/>
      <Scrollbar/>
      
      <Specialoffer/>
      <Mostbuy/>
   
    </>
  )
}

export default App
