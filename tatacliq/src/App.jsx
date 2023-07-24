import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './my-component/Home';
import Header from './my-component/Header';
import Footer from './my-component/Footer';
import Mens from './my-component/mens-component/Mens';
import MensWearComponent from './my-component/mens-wear/MensWearComponent';
import MensShirtDetail from './my-component/mens-shirt-detail/MensShirtDetail';
import MyAccount from './my-component/my-account/MyAccount';
import MyCart from './my-component/my-cart/MyCart';
import WomensComponent from './my-component/womens-component/WomensComponent';
import KidsComponent from './my-component/kids-component/KidsComponent';
import HomeKitchen from './my-component/home-kitchen/HomeKitchen';
import BeautyComponent from './my-component/beauty/BeautyComponent';
import Gadget from './my-component/gadgets/Gadget';
import Jewellery from './my-component/jewellery/Jewellery';
import AccessoriesComponent from './my-component/accessories/AccessoriesComponent';
import { TataCliqWishlist } from './my-component/tata-cliq-wishlist/TataCliqWishlist';
import Checkout from './my-component/checkout/Checkout';


function App() {
    return (
        <>
            <Header></Header>
            <Routes>

                <Route exact path='/' element={<Home />} />
                <Route exact path='/mens' element= {<Mens />} />
                <Route exact path='/mens-wear' element= {<MensWearComponent />} />
                <Route exact path='/mens-shirt-detail' element={<MensShirtDetail />} />
                <Route exact path='/my-account' element={<MyAccount />} />
                <Route exact path='/my-cart' element={<MyCart />} />
                <Route exact path='/womens-wear' element={<WomensComponent />} />
                <Route exact path='/kids-wear' element={<KidsComponent />} />
                <Route exact path='/home-kitchen' element={<HomeKitchen/>} />
                <Route exact path='/beauty-perfume' element={<BeautyComponent />} />
                <Route exact path='/gadget' element={ <Gadget/>} />
                <Route exact path='/jewellery' element={<Jewellery />} />
                <Route exact path='/accessories' element={<AccessoriesComponent/>} />
                <Route exact path='/wishlist' element={<TataCliqWishlist/>} />
                <Route exact path='/checkout' element={<Checkout/>} />

            </Routes>
            <Footer></Footer>
        </>
    );
}

export default App;
