import { Link, useNavigate } from 'react-router-dom';
import './MyCart.css'
import { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
const MyCart = () => {

    const [usercart, setUsercart] = useState([]);
    const [finalPrice, setFinalPrice] = useState();
    const router = useNavigate();

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("CurrentUser"));
        if (user?.email) {
            const allUser = JSON.parse(localStorage.getItem("Users"));
            for (var i = 0; i < allUser.length; i++) {
                if (allUser[i].email == user.email && allUser[i].password == user.password) {
                    setUsercart(allUser[i].cart);
                    break;
                }
            }
        }
        else {
            toast.error("Please Login first to add product");
            router("/login");
        }
    }, [])

    useEffect(() => {
        var totalPrice = 0
        if (usercart?.length) {
            for (var i = 0; i < usercart.length; i++) {
                totalPrice = totalPrice + parseInt(usercart[i].price);
            }
            setFinalPrice(totalPrice);
        }
    }, [usercart])

    const buyProduct = () => {
        const user = JSON.parse(localStorage.getItem("CurrentUser"));
        if (usercart.length) {
            if (user?.email) {
                const allUser = JSON.parse(localStorage.getItem("Users"));
                for (var i = 0; i < allUser.length; i++) {
                    if (allUser[i].email == user.email && allUser[i].password == user.password) {
                        allUser[i].cart = [];
                        localStorage.setItem("Users", JSON.stringify(allUser));
                        break;
                    }
                }
                setFinalPrice(0);
                setUsercart([]);
                router('/')
                return toast.success("Product will delivered Soon!!!")
            }
        }
        else {
            toast.error("please add product first")
            router('/all-products')
        }
    }

    const removeProduct = (id) => {
        const user = JSON.parse(localStorage.getItem("CurrentUser"));
        var removeItem;
        if (user?.email) {
            const allUser = JSON.parse(localStorage.getItem("Users"));
            for (var i = 0; i < allUser.length; i++) {
                if (allUser[i].email == user.email && allUser[i].password == user.password) {
                    removeItem = usercart.filter((item) => item.id !== id);
                    allUser[i].cart = removeItem;
                    localStorage.setItem("Users", JSON.stringify(allUser));
                    break;
                }
            }
        }
        setFinalPrice(0);
        setUsercart(removeItem);
    }

    return (
        <div className='my-cart-body'>
            <div className="my-cart-my-bag-div">
                <div className="my-cart-my-bag">
                    <h1>My Bag</h1>
                </div>
                <div className="my-cart-delhi-pincode">
                    <p>Delhi, 110001</p>
                </div>
                <div className="my-cart-pincode-input-css">
                    <input type="text" placeholder='Change PIN code' />
                </div>
            </div>
            <div className="my-cart-main-product-div">
                <div className="my-cart-inside-product-div">
                    <p>Apply a relevant <span><b>coupon code</b></span> here to avail any additional discount. Applicable <span><b>cashback</b></span> if any will be credited to your account as per T&C.</p>
                    <div className="my-cart-inside-divider-div">
                        <div className="my-cart-inside-left-divider">
                            <div className="my-cart-scroll-div">
                                <p>Congratulations NeuPass User!! Your order is eligible for FREE Shipping!</p>
                            </div>
                            {usercart.map((cartProduct) => (<>
                                <div className="my-cart-product-image-detail">
                                    <div className="my-cart-product-image-left">
                                        <img src={cartProduct.image} alt="" />
                                    </div>

                                    <div className="my-cart-product-detail-right">
                                        <div className="my-cart-product-name-delivery-div">
                                            <div className='my-cart-product-name-price-div'>
                                                <p>{cartProduct.name}</p>
                                                <p><span><b>Rs. {cartProduct.price} </b></span>&nbsp;<span style={{ textDecoration: "line-through", color: "#8d8d8d" }}>Rs.1999</span>&nbsp;<span style={{ color: "#338715" }}>Rs.1290. OFF</span></p>
                                                {/* <div>
                                                    <p className='my-cart-color-black-div'>Color:Black</p>
                                                    <p>Size:M</p>
                                                </div> */}
                                            </div>
                                            <div className='my-cart-product-delivery-div'>
                                                <div>
                                                    <div>
                                                        <img src="https://www.tatacliq.com/src/general/components/img/deliveryIcon.svg" alt="" />
                                                    </div>
                                                    <p>Delivery by 17th Jul | <span style={{ color: "#338715" }}><b>FREE</b></span></p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="my-cart-qty-wishlist-remove-div">
                                            <div>
                                                <p>Quantity:</p>
                                                <select name="qty" id="">
                                                    <option value="1">1</option>
                                                    <option value="1">2</option>
                                                    <option value="1">3</option>
                                                    <option value="1">4</option>
                                                </select>
                                            </div>
                                            <div>
                                                <div>
                                                    <img src="https://www.tatacliq.com/src/general/components/img/WL1.svg" alt="" />
                                                </div>
                                                <p>Save to wishlist</p>
                                            </div>
                                            <div>
                                                <p style={{cursor:"pointer"}} onClick={() => removeProduct(cartProduct.id)}>Remove</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>))}

                            <div className='my-cart-continue-shopping-button'>
                                <button onClick={()=>router("/all-products")}>Continue Shopping</button>
                            </div>
                        </div>

                        <div className="my-cart-inside-right-divider">
                            <div className='my-cart-check-for-coupon'>
                                <div>
                                    <img src="https://www.tatacliq.com/src/general/components/img/coupon.png" alt="" />
                                </div>
                                <p>Check For Coupon</p>
                                <p>&gt;</p>
                            </div>
                            <div className="my-cart-price-discount-bag">
                                <div className='my-cart-price-discount-bag-flex'>
                                    <p className='my-cart-bag-total'>Bag Total</p>
                                    <p>Rs.{finalPrice}</p>
                                </div>
                                <div className='my-cart-price-discount-bag-flex'>
                                    <p className='my-cart-bag-total'>Shipping Charges</p>
                                    <p style={{ color: "#00964d" }}><b>Free</b></p>
                                </div>
                                <div className='my-cart-price-discount-bag-flex'>
                                    <p className='my-cart-bag-total'>Bag Subtotal</p>
                                    <p>Rs.{finalPrice}</p>
                                </div>
                                <div className='my-cart-price-discount-bag-flex'>
                                    <p className='my-cart-bag-total'>Product Discount(50%)</p>
                                    <p>-Rs.{finalPrice}</p>
                                </div>
                                <div>
                                    <p style={{ color: "#417505", fontSize: "14px" }}>You will save ₹{finalPrice}.00 on this order</p>
                                </div>
                            </div>
                            <div className="my-cart-checkout-total">
                                <div>
                                    <p>Total</p>
                                    <p>Rs. {finalPrice}</p>
                                </div>
                                <div>
                                    <button onClick={buyProduct} style={{ color: 'white', textDecoration: 'none' }}>Checkout</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default MyCart;