import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './my-component/Home';
import Header from './my-component/Header';
import Footer from './my-component/Footer';

function App() {
    return (
        <>
            <Header></Header>
            <Routes>
                <Route exact path='/' element={<Home />} />
            </Routes>
            <Footer></Footer>
        </>
    );
}

export default App;
