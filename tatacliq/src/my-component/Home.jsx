import './Home.css';
import sliderImage from './images/slider.jpg';
import midDay from './images/midday.jpg';
import superSix from './images/super.jpg';
import HomeImg from './images/homeImage.jpg';
import Sofa from './images/sofa.jpg';
import Accessories from './images/accessories.jpg';
import { Link } from 'react-router-dom';


const Home = () => {
    return (
        <div className='home-body'>
            <div className='slider-image'>
                <Link to="/mens"><img src={sliderImage} alt="" className='home-slider-image-css' /></Link>
            </div>
            <div className="allItems">
                <img className='image-size' src="https://assets.tatacliq.com/medias/sys_master/images/47599336652830.jpg" alt="" />
                <img className='image-size' src="https://assets.tatacliq.com/medias/sys_master/images/47599336587294.jpg" alt="" />
                <img className='image-size' src="https://assets.tatacliq.com/medias/sys_master/images/47599336521758.jpg" alt="" />
                <img className='image-size' src="https://assets.tatacliq.com/medias/sys_master/images/47599336783902.jpg" alt="" />
                <img className='image-size' src="https://assets.tatacliq.com/medias/sys_master/images/47599336914974.jpg" alt="" />
                <img className='image-size' src="https://assets.tatacliq.com/medias/sys_master/images/47599337046046.jpg" alt="" />
                <img className='image-size' src="https://assets.tatacliq.com/medias/sys_master/images/47599337111582.jpg" alt="" />
                <img className='image-size' src="https://assets.tatacliq.com/medias/sys_master/images/47599337308190.jpg" alt="" />
                <img className='image-size' src="https://assets.tatacliq.com/medias/sys_master/images/47599337439262.jpg" alt="" />
                <img className='image-size' src="https://assets.tatacliq.com/medias/sys_master/images/47599337570334.jpg" alt="" />
            </div>
            <div className="bank-card-offer">
                <div className='diff-bank-offer'>
                    <div className='icici-offer-div'>
                        <img className='icici-offer' src="https://assets.tatacliq.com/medias/sys_master/images/47600155066398.jpg" alt="" />
                    </div>
                    <div className='hdfc-offer-div'>
                        <img className='hdfc-offer' src="https://assets.tatacliq.com/medias/sys_master/images/47600155131934.jpg" alt="" />
                    </div>
                </div>
            </div>
            <div className="mid-day">
                <img src={midDay} alt="" />
            </div>
            <div className="mens-product">
                <div className="miday-product-all">
                    <img src="https://assets.tatacliq.com/medias/sys_master/images/47599338618910.jpg" alt="" className="miday-images" />
                    <img src="https://assets.tatacliq.com/medias/sys_master/images/47599338848286.jpg" alt="" className="miday-images" />
                    <img src="https://assets.tatacliq.com/medias/sys_master/images/47596860407838.jpg" alt="" className="miday-images" />
                    <img src="https://assets.tatacliq.com/medias/sys_master/images/47599339372574.jpg" alt="" className="miday-images" />
                </div>
            </div>
            <div className="mid-day1">
                <img src={superSix} alt="" />
            </div>
            <div className="mens-product1">
                <div className="miday-product-all">
                    <img src="https://assets.tatacliq.com/medias/sys_master/images/47596858834974.jpg" alt="" className="miday-images" />
                    <img src="https://assets.tatacliq.com/medias/sys_master/images/47596858900510.jpg" alt="" className="miday-images" />
                    <img src="https://assets.tatacliq.com/medias/sys_master/images/47599339962398.jpg" alt="" className="miday-images" />
                    <img src="https://assets.tatacliq.com/medias/sys_master/images/47599340027934.jpg" alt="" className="miday-images" />
                </div>
            </div>
            <div className="mid-day1">
                <img src={HomeImg} alt="" />
            </div>
            <div className="mens-product1">
                <img src={Sofa} alt="" />
            </div>
            <div className="mid-day1">
                <img src={Accessories} alt="" />
            </div>
            <div className="mens-product1">
                <div className="miday-product-all">
                    <img src="https://assets.tatacliq.com/medias/sys_master/images/47603264290846.jpg" alt="" className="miday-images" />
                    <img src="https://assets.tatacliq.com/medias/sys_master/images/47314533875742.jpg" alt="" className="miday-images" />
                    <img src="https://assets.tatacliq.com/medias/sys_master/images/46972527738910.jpg" alt="" className="miday-images" />
                    <img src="https://assets.tatacliq.com/medias/sys_master/images/46972527804446.jpg" alt="" className="miday-images" />
                </div>
            </div>
        </div>

    )
}

export default Home;