import './MyAccount.css'
const MyAccount = () => {
    return (
        <div id='my-account-body'>
            <div className="my-account-profile-detail">
                <div className="my-account-menu-list">
                    <ul>
                        <li>Menu</li>
                        <li className='my-account-li-flex'>
                            <div>
                                <img src="https://www.tatacliq.com/src/general/components/img/WL5.svg" alt="" />
                            </div>
                            <p>My Wishlist</p>
                        </li>
                        <li className='my-account-li-flex'>
                            <div>
                                <img src="https://www.tatacliq.com/src/general/components/img/order-history.svg" alt="" />
                            </div>
                            <p>Order History</p>
                        </li>
                        <li className='my-account-li-flex'>
                            <div>
                                <img src="https://www.tatacliq.com/src/account/components/img/Neupass_monochrome.svg" alt="" />
                            </div>
                            <p>NeuPass</p>
                        </li>
                        <li className='my-account-li-flex'>
                            <div>
                                <img src="https://www.tatacliq.com/src/account/components/img/addressbook.svg" alt="" />
                            </div>
                            <p>Address Book</p>
                        </li>
                        <li className='my-account-li-flex'>
                            <div>
                                <img src="https://www.tatacliq.com/src/account/components/img/brand.svg" alt="" />
                            </div>
                            <p>Brands</p>
                        </li>
                        <li className='my-account-li-flex'>
                            <div>
                                <img src="https://www.tatacliq.com/src/account/components/img/card.svg" alt="" />
                            </div>
                            <p>Save Payment</p>
                        </li>
                        <li className='my-account-li-flex'>
                            <div>
                                <img src="https://www.tatacliq.com/src/account/components/img/alert.svg" alt="" />
                            </div>
                            <p>Alert & Coupons</p>
                        </li>
                        <li className='my-account-li-flex'>
                            <div>
                                <img src="https://www.tatacliq.com/src/account/components/img/giftCards.svg" alt="" />
                            </div>
                            <p>Gift Card</p>
                        </li>
                        <li className='my-account-li-flex'>
                            <div>
                                <img src="https://www.tatacliq.com/src/account/components/img/cliqCash.svg" alt="" />
                            </div>
                            <p>Cliq Cash</p>
                        </li>
                        <li className='my-account-li-flex'>
                            <div>
                                <img src="https://www.tatacliq.com/src/account/components/img/addressbook.svg" alt="" />
                            </div>
                            <p>Manage Notifications</p>
                        </li>
                        <li className='my-account-li-flex'>
                            <div>
                                <img src="https://www.tatacliq.com/src/account/components/img/settings.svg" alt="" />
                            </div>
                            <p>Profile</p>
                        </li>
                    </ul>
                </div>
                <div className="my-account-middle-content">
                    <div className="my-account-middile-recent-order-div">
                        <div className="my-account-recent-order-div">
                            <p>Recent Orders</p>
                            <p>My Reviews</p>
                            <p>Useful Links</p>
                            <p>Alerts</p>
                            <p>Coupons</p>
                        </div>
                        <div className="my-account-shopping-last-time">
                            <p>Show orders from:</p>
                            <select name="" id="">
                                <option value="">Last 6 months</option>
                            </select>
                        </div>
                        <p className='order-name-my-account'>You have not made any purchase yet</p>
                        <button className='my-account-continue-shopping-button'>Continue Shopping</button>
                    </div>
                </div>
                <div className="my-account-right-user-data">
                    <div className="my-account-username-gmail-div">
                            <div className='my-account-username-first-letter'>
                                <p>K</p>
                            </div>
                            <h4>KRISHNA CHAUDHARY</h4>
                            <p>krishna@gmail.com</p>
                            <div></div>
                            <p>Default address</p>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio, unde.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyAccount;