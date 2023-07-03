import './Header.css';
import logo from './images/logo.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faHeart,faBagShopping } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    return (
        <div id='body'>
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <div className="menus">
                <div className="heading-divider1">
                    <div className="tata-cliq-luxary">
                        <p>Tata CLiQ Luxury</p>
                    </div>
                    <div className="tata-cliq-menu">
                        <p className='heading-padding'>CLiQ Cash</p>
                        <p className='heading-padding'>Gift Card</p>
                        <p className='heading-padding'>CLiQ Care</p>
                        <p className='heading-padding'>Track Order</p>
                        <p className='heading-padding1'>Sign in/Sign Up</p>
                    </div>
                </div>
                <div className="heading-divider2">
                    <div className="search-category-product">
                        <p className='category'>Categories <i className='arrow down'></i></p>
                        <p className='brands'>Brands <i className='arrow down'></i></p>
                        <div className="searchbar-div">
                            <div className='icon-color'>
                                <FontAwesomeIcon icon={faMagnifyingGlass} size="lg" />
                            </div>
                            <input type="text" name="" id="" placeholder='Search for Products' />
                        </div>
                    </div>
                    <div className="wishlist-cart">
                        <div className="icon-heart">
                            <FontAwesomeIcon icon={faHeart} size='lg' />
                        </div>
                        <div className="icon-shopping">
                        <FontAwesomeIcon icon={faBagShopping} size='lg'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;