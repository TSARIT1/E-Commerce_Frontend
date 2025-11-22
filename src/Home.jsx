import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './App.css'

import Product from "./Product";
import Scrollbar from "./Scrollbar";
import Specialoffer from "./Specialoffer";
import Mostbuy from "./Mostbuy";
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
