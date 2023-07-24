import React, { useState } from 'react';
import './Checkout.css'

const Checkout = () => {
    const [phoneNo, setPhoneNo] = useState("+91");
    return (
        <div className='checkout-body'>
            <div className="checkout-inside-body">
                <div className="checkout-left-div">
                    <div className='left-main-checkout-div'>
                        <div className="checkout-adding-address-div">
                            <div>
                                <p><b>1</b></p>
                            </div>
                            <div>
                                <h2>Add Shipping Address</h2>
                            </div>
                            <div>
                                <p>Clear All</p>
                            </div>
                        </div>
                        <div className="checkout-full-address-div">
                            <div className="checkout-full-address-left-div">
                                <div className="full-name-checkout">
                                    <input type="text" placeholder='First Name(Required)*' />
                                    <input type="text" placeholder='Last Name (Required)*' />
                                </div>
                                <div className='checkout-city-input'>
                                    <input type="text" placeholder='City/District(required)*' />
                                </div>

                                <div className='checkout-city-input'>
                                    <input type="text" placeholder='State(required)*' />
                                </div>

                                <div className='checkout-city-input'>
                                    <select className='checkkout-landmark-input' name="" id="">
                                        <option value="landmark" >Landmark</option>
                                    </select>
                                </div>

                                <div className='checkout-home-office-radio'>
                                    <div>
                                        <input type="radio" id='Home' value='Home' /><label for="Home">&nbsp;&nbsp;&nbsp;Home</label>
                                    </div>
                                    <div>
                                        <input type="radio" /><label>&nbsp;&nbsp;&nbsp;Office</label>
                                    </div>
                                </div>

                            </div>
                            <div className="checkout-full-address-right-div">
                                <div className='checkout-city-input'>
                                    <input type="text" placeholder='Enter Your Pincode(required)*' />
                                </div>

                                <div className='checkout-city-input'>
                                    <textarea name="" className='checkout-text-area' id="" cols="30" rows="4"
                                        placeholder='Flat/House No., Floor, Building/Company/Apartment Name, Road/Street Name, Area, Colony,Sector, Village (Required)*'></textarea>
                                    <p>Character Limit:120</p>
                                </div>

                                <div className='checkout-phone-no-input'>
                                    <span><b>{phoneNo}</b></span>
                                    <input type="text" name="" id="" placeholder='Phone/Mobile Number (Required)*' />
                                </div>
                            </div>
                        </div>
                        <div className='checkout-save-cancel-countinue'>
                            <p>Cancel</p>
                            <button>Save & Continue</button>

                        </div>
                    </div>
                </div>
                <div className="checkout-right-div">
                    <div className="my-cart-price-discount-bag">
                        <div className='my-cart-price-discount-bag-flex'>
                            <p className='my-cart-bag-total'>Bag Total</p>
                            <p>Rs.1990</p>
                        </div>
                        <div className='my-cart-price-discount-bag-flex'>
                            <p className='my-cart-bag-total'>Shipping Charges</p>
                            <p style={{ color: "#00964d" }}><b>Free</b></p>
                        </div>
                        <div className='my-cart-price-discount-bag-flex'>
                            <p className='my-cart-bag-total'>Bag Subtotal</p>
                            <p>Rs.1990</p>
                        </div>
                        <div className='my-cart-price-discount-bag-flex'>
                            <p className='my-cart-bag-total'>Product Discount(s)</p>
                            <p>-Rs.1260</p>
                        </div>
                        <div>
                            <p style={{ color: "#417505", fontSize: "14px" }}>You will save ₹1260.00 on this order</p>
                        </div>
                    </div>
                    <div className="my-cart-checkout-total">
                        <div style={{display:'flex',width:'100%',justifyContent:'space-between'}}>
                            <p>Total Payable</p>
                            <p>Rs.1000</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Checkout