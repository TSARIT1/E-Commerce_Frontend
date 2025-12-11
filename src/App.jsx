import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Routes, Route } from 'react-router-dom'
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
import Home from "./Home";
import Airpodpage from "./Airpodpage";
import Headphonepage from "./Headphonepage";
import Mixturepage from "./Mixturepage";
import Coffeepage from "./Coffeepage";
import Bike1page from "./Bike1page";
import Footer from "./Footer";
import Bike2page from "./Bike2page";
import Bike3page from "./Bike3page";
import Bike4page from "./Bike4page";
import Bike5page from "./Bike5page";
import Scootypage from "./Scootypage";
import Login from "./Login";
import Register from "./Register";
import ShippingInfo from "./ShippingInfo";
import ReturnPolicy from "./ReturnPolicy";
import HelpCenter from "./HelpCenter";
import ReportIssue from "./ReportIssue";
import TrackOrder from "./TrackOrder";
import MyOrder from "./MyOrder";
import PaymentSupport from "./PaymentSupport";
import AccountSupport from "./AccountSupport";
import ProfilePage from "./ProfilePage";
import Cart from "./Cart";



function App() {

  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/mensjacketpage' element={<Mensjacketpage />} />
        <Route path='/frockpage' element={<Frockpage />} />
        <Route path='/spactaclespage' element={<Spactaclespage />} />
        <Route path='/earringspage' element={<Earringspage />} />
        <Route path='/shoespage' element={<Shoespage />} />
        <Route path='/handbagpage' element={<Handbagpage />} />
        <Route path='/mixturepage' element={<Mixturepage />} />
        <Route path='/airpodspage' element={<Airpodpage />} />
        <Route path='/headphonepage' element={<Headphonepage />} />
        <Route path="/coffeepage" element={<Coffeepage />} />
        <Route path="/bike1" element={<Bike1page />} />
        <Route path="/bike2" element={<Bike2page />} />
        <Route path="/bike3" element={<Bike3page />} />
        <Route path="/bike4" element={<Bike4page />} />
        <Route path="/bike5" element={<Bike5page />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/scootypage" element={<Scootypage />} />
        <Route path="/shippinginfo" element={<ShippingInfo />} />
        <Route path="/returnpolicy" element={<ReturnPolicy />} />
        <Route path="/helpcenter" element={<HelpCenter />} />
        <Route path="/reportissue" element={<ReportIssue />} />
        <Route path="/trackorder" element={<TrackOrder />} />
        <Route path="/product" element={<Product />} />
        <Route path="/myorder" element={<MyOrder />} />
        <Route path="/paymentsupport" element={<PaymentSupport />} />
        <Route path="/accountsupport" element={<AccountSupport />} />
        <Route path="/profilepage" element={<ProfilePage />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
