import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './my-component/Home';
import Header from './my-component/Header';
import Footer from './my-component/Footer';
import Mens from './my-component/mens-component/Mens';
import MensWearComponent from './my-component/mens-wear/MensWearComponent';


function App() {
    return (
        <>
            <Header></Header>
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route exact path='/mens' element= {<Mens />} />
                <Route exact path='/mens-wear' element= {<MensWearComponent />} />
            </Routes>
            <Footer></Footer>
        </>
    );
}

export default App;
