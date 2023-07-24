import './Header.css';
import logo from './images/logo.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faHeart, faBagShopping } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const Header = () => {

    return (
        <div id='body'>
            <div className="logo">
            <Link to="/my-account">
                <img src={logo} alt="" />
                </Link>
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

                        <p className='heading-padding1'><Link to="/my-account" style={{ color: "white", textDecoration: "none" }}>My account</Link></p>
                    </div>
                </div>
                <div className="heading-divider2">
                    <div className="search-category-product">
                        <div className='category' >

                            <div className="dropdown">
                                <button className="dropbtn">Category</button>
                                <div className="dropdown-content">
                                    <Link to="/mens-wear">Mens Fashion</Link>
                                    <Link to="/womens-wear">Womens Fashion</Link>
                                    <Link to="/kids-wear">Kids Fashion</Link>
                                    <Link to="/home-kitchen">Home Kitchen</Link>
                                    <Link to="/beauty-perfume">Beauty</Link>
                                    <Link to="/gadget">Gadgets</Link>
                                    <Link to="/jewellery">Jewellery</Link>
                                    <Link to="/accessories">Accessories</Link>
                                </div>
                            </div>
                        </div>
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
                            <Link to='/wishlist'>
                            <FontAwesomeIcon icon={faHeart} size='lg' style={{ color: "white" }} />
                            </Link>
                        </div>
                        <div className="icon-shopping">
                            <Link to="/my-cart">
                                <FontAwesomeIcon icon={faBagShopping} size='lg' style={{ color: "white" }} />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Header;