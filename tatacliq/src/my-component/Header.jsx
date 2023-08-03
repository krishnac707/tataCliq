import './Header.css';
import logo from './images/logo.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faHeart, faBagShopping } from '@fortawesome/free-solid-svg-icons'
import { Link, useNavigate } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { DataContext } from '../context/Data.context';
import Login from './login/Login';
import Register from './register/Register';
import { AuthContext } from '../context/Auth.context';

const Header = () => {

    const { setLoginButton, setLoginSignup, loginbutton, loginSignup } = useContext(DataContext);
    const { state, logout } = useContext(AuthContext);
    const [dropdownMenu, setDropdownMenu] = useState(false);
    const [user, setUser] = useState();
    const router = useNavigate();

    useEffect(() => {
        if (state?.user) {
            setUser(state?.user)
        }
        else {
            setUser({});
        }
    }, [state])

    const redirectLogin = () => {
        // console.log(user.name,"name");
        if (user?.name) {
            router('/profile-update');
        }
        // else{
        // toast.error("Please login first");
        // router('/login');
        // }
    }

    const handleUser = () => {
        if (user?.email) {
            setDropdownMenu(true)
            setLoginButton(false)
        }
        else {
            setLoginButton(true)
            setDropdownMenu(false)
        }
    }

    return (
        <>
            <div id='body'>
                <div className="logo">
                    <Link to="/">
                        <img src={logo} alt="" />
                    </Link>
                </div>
                <div className="menus">
                    <div className="heading-divider1">
                        <div className="tata-cliq-luxary">
                            <p>Tata CLiQ Luxury</p>
                        </div>
                        <div className="tata-cliq-menu">

                            {user?.role == "Seller" ? <p className='heading-padding' onClick={() => router('/add-product')}>Add Product</p> : <p className='heading-padding'>CLiQ Cash</p>}
                            <p className='heading-padding'>Gift Card</p>
                            <p className='heading-padding'>CLiQ Care</p>
                            <p className='heading-padding'>Track Order</p>
                            <p className='heading-padding1 my-account-heading'>
                                <div className="dropdown">
                                    {user?.email ? <p className="dropbtn1">{user.name}</p> : <p className="dropbtn1">My account</p>}
                                    <div className="dropdown-content1">
                                        {user?.email && <div className='dropdonw-mens-para1'><p onClick={redirectLogin}>My Account</p></div>}
                                        {user?.email ? <div className='dropdonw-mens-para1'><p onClick={logout}>Logout</p></div> : <div className='dropdonw-mens-para1' onClick={handleUser}><button className='login-register-button-css-navbar'>login/register</button></div>}
                                    </div>
                                </div>
                                {/* <div onClick={handleUser} style={{ color: "white", textDecoration: "none" }}>My account</div> */}
                            </p>
                        </div>
                    </div>
                    <div className="heading-divider2">
                        <div className="search-category-product">
                            <div className='category' >
                                <div className="dropdown">
                                    <button className="dropbtn">Category</button>
                                    <div className="dropdown-content">
                                        <div className='dropdonw-mens-para' onClick={() => router('/all-products')}><p>All Products</p></div>
                                        <div className='dropdonw-mens-para' onClick={() => router('/mens-wear')}><p>Mens Fashion</p></div>
                                        <div className='dropdonw-mens-para' onClick={() => router('/womens-wear')}><p>Womens Fashion</p></div>
                                        <div className='dropdonw-mens-para' onClick={() => router('/kids-wear')}><p>Kids Fashion</p></div>
                                        <div className='dropdonw-mens-para' onClick={() => router('/home-kitchen')}><p>Home Kitchen</p></div>
                                        <div className='dropdonw-mens-para' onClick={() => router('/beauty-perfume')}><p>Beauty</p></div>
                                        <div className='dropdonw-mens-para' onClick={() => router('/gadget')}><p>Gadgets</p></div>
                                        <div className='dropdonw-mens-para' onClick={() => router('/jewellery')}><p>Jewellery</p></div>
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
            <Login />
            <Register />
        </>
    )
}

export default Header;