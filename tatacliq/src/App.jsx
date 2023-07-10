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
            </Routes>
            <Footer></Footer>
        </>
    );
}

export default App;
