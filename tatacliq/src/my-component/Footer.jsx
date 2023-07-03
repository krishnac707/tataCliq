import './Footer.css';

const Footer = () => {
    return (
        <div className='footer-body'>
            <div className='trustDiv'>
                <img src="https://www.tatacliq.com/src/general/components/img/trustFrame.png" alt="" />
            </div>
            <div className="policy-image">
                <img src="https://www.tatacliq.com/src/general/components/img/Frame22222.svg" alt="" />
            </div>
            <div className="footer-div">
                <div className='footer-all-div'>
                    <div className="tata-market-place">
                        <h5 className='margin-between'>Tata MarketPlace</h5>
                        <p className='margin-between font-sizing'>About us</p>
                        <p className='margin-between font-sizing'>career</p>
                        <p className='margin-between font-sizing'>Sell with us</p>
                        <p className='margin-between font-sizing'>Term of use</p>
                        <p className='margin-between font-sizing'>Privacy Policy</p>
                        <p className='margin-between font-sizing'>Afiliates</p>
                    </div>
                    <div className="tata-customer-service">
                        <h5 className='margin-between'>Customer Service</h5>
                        <p className='margin-between font-sizing'>Shopping</p>
                        <p className='margin-between font-sizing'>Offer & promotion</p>
                        <p className='margin-between font-sizing'>Payment</p>
                        <p className='margin-between font-sizing'>Cancellation</p>
                        <p className='margin-between font-sizing'>Return & Refund</p>
                        <p className='margin-between font-sizing'>Cliq & PiQ</p>
                        <p className='margin-between font-sizing'>Return to store</p>
                        <p className='margin-between font-sizing'>Electronic return Policy</p>
                        <p className='margin-between font-sizing'>Replacement Policy</p>
                    </div>
                    <div className="tata-cliq-div">
                        <h5 className='margin-between'>My Order</h5>
                        <p className='margin-between font-sizing'>My Account</p>
                        <p className='margin-between font-sizing'>My Shoppingbag</p>
                        <p className='margin-between font-sizing'>My WishList</p>
                    </div>
                </div>
                <div className="blank-footer-div">

                </div>
            </div>
        </div>
    )
}

export default Footer;