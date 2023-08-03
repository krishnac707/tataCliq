import { useEffect, useState } from 'react';
import './MensShirtDetail.css';
import Shirt2Image from './mens-shirt-folder-image/fingure.jpg';
import shopMore from './mens-shirt-folder-image/shop-more.jpg'
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const MensShirtDetail = () => {
    const [addpincode, setpincode] = useState("new delhi,110001")
    const [allProducts, setAllProducts] = useState([]);
    const { id } = useParams();
    const [singleproduct, setSingleProduct] = useState({});
    const [userdata, setUserData] = useState();
    const [isuserLogin, setUserLogin] = useState(false);
    const [currentEmail, setCurrentEmail] = useState("");
    const router = useNavigate();

    useEffect(() => {
        const product = JSON.parse(localStorage.getItem("Products"));
        if (product) {
            for (var i = 0; i < product.length; i++) {
                setAllProducts(product);
            }
        }
    }, [])

    useEffect(() => {
        if (id && allProducts.length) {
            const result = allProducts.find((product) => product.id == id)
            // console.log(result, "result");
            setSingleProduct(result);
        }
    }, [allProducts, id])

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("CurrentUser"));
        if (user) {
            setUserLogin(true);
            setUserData(user);
            setCurrentEmail(user?.email);
        }
    }, [])

    const cartProduct = () => {
        if (isuserLogin) {
            if (userdata?.role == "Buyer") {
                const alluser = JSON.parse(localStorage.getItem("Users"));
                for (var i = 0; i < alluser.length; i++) {
                    if (alluser[i].email == currentEmail) {
                        alluser[i]?.cart.push(singleproduct);
                        localStorage.setItem("Users", JSON.stringify(alluser));
                        toast.success("Product Added Successfully");
                        router("/all-products");
                        break;
                    }
                }
            }
            else {
                toast.error("Sorry!!! You are a seller. you won't be able to buy product")
            }
        }
        else {
            toast.error("please login first");
            router('/login');
        }
    }

    const redirect = (id) => {
        router(`/update-product/${id}`);
    }

    return (
        <div id="mens-shirt-body">
            <div className="men-shirt-main-div">
                <div className='mens-uspolo-inside-div'>
                    {singleproduct && <>
                        <div className="left-uspolo-shirt-images">
                            <div className="uspolo-shirt-images-top">
                                <div className="uspolo-shirt-images-1">
                                    <img src={singleproduct.image} alt="" />
                                </div>
                                <div className="uspolo-shirt-images-2">
                                    <img src={singleproduct.image} alt="" />
                                    <img src="https://www.tatacliq.com/src/general/components/img/similarIconNew.svg" alt="" />
                                    <img src={Shirt2Image} alt="" />
                                </div>
                            </div>
                            <div className="uspolo-shirt-images-bottom">
                                <div className="uspolo-shirt-images-3">
                                    <img src={singleproduct.image} alt="" />
                                </div>
                                <div className="uspolo-shirt-images-4">
                                    <img src={singleproduct.image} alt="" />
                                </div>
                                <div className="uspolo-shirt-images-5">
                                    <img src={singleproduct.image} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="right-uspolo-shirt-detail">
                            <div className="uspolo-popularity-div">
                                <span><img src="https://www.tatacliq.com/src/assets/ProductNudgeIcons/Wishlisted.svg" alt="" /></span>
                                <p>Popular: Recently wishlisted 66 times</p>
                            </div>

                            <h3>{singleproduct.name}</h3>

                            <h3>MRP: {singleproduct.price} ₹</h3>
                            <p>Inclusive of all taxes</p>

                            <p>Use MENSEOSS coupon to get 10% off on cart value 1999/- and above.</p>

                            <div className="uspolo-shirt-rating-div">
                                <div><p>2.8 <span>&#9733;</span></p></div>
                                <p><span><b>5</b></span> Ratings</p>
                            </div>

                            <div className="uspolo-border-right-shirt-detail"></div>


                            <div className='different-color-uspolo-shirt'>
                                <div>
                                    <img src={singleproduct.image} alt="" />
                                </div>
                                <div>
                                    <img src={singleproduct.image} alt="" />
                                </div>
                                <div>
                                    <img src={singleproduct.image} alt="" />
                                </div>
                            </div>

                            <div className="uspolo-border-right-shirt-detail"></div>

                            <div className='select-size-uspolo-shirt'>
                                <p><b>Select Size</b></p>
                                <p><b>Size Guide</b></p>
                            </div>

                            <div className="different-sizes-uspolo-shirt">
                                <div className="uspolo-shirts-for-all-sizes-css">
                                    <p>S</p>
                                </div>
                                <div className="uspolo-shirts-for-all-sizes-css">
                                    <p>M</p>
                                </div>
                                <div className="uspolo-shirts-for-all-sizes-css">
                                    <p>L</p>
                                </div>
                                <div className="uspolo-shirts-for-all-sizes-css">
                                    <p>XL</p>
                                </div>
                                <div className="uspolo-shirts-for-all-sizes-css">
                                    <p>XXL</p>
                                </div>
                            </div>

                            <p className='uspolo-model-cms-info'>Model is 6'0"/185 cms and is wearing an M size
                                100% Cotton, Machine wash</p>

                            <div className="uspolo-border-right-shirt-detail"></div>

                            <h3 className='uspolo-shirt-available-offers'>Available Offers</h3>

                            <div className="uspolo-bank-card-offers-css">
                                <div>
                                    <img src="https://assets.tatacliq.com/medias/sys_master/images/27678831411230.png" alt="" />
                                </div>
                                <div>
                                    <p>10% Instant Discount on Kotak Bank Credit Cards only.</p>
                                    <p>Min Purchase: ₹2500 | Max Discount: ₹1000 <span>more</span></p>
                                </div>
                            </div>

                            <div className="uspolo-bank-card-offers-css">
                                <div>
                                    <img src="https://assets.tatacliq.com/medias/sys_master/images/27678831280158.png" alt="" />
                                </div>
                                <div>
                                    <p>15% off on ICICI Credit Cards</p>
                                    <p>Use Code: ICICIWEEKEND | Min Purchase: ₹1500 <span>more</span></p>
                                </div>
                            </div>

                            <div className="uspolo-bank-card-offers-css">
                                <div>
                                    <img src="https://assets.tatacliq.com/medias/sys_master/images/27678831280158.png" alt="" />
                                </div>
                                <div>
                                    <p>15% off on ICICI Netbanking</p>
                                    <p>Use Code: ICICINB | Min Purchase: ₹2000 <span>more</span></p>
                                </div>
                            </div>

                            <p className='uspolo-see-more-offers-shirt'><b>See 5 More Offers</b></p>
                            <div className="uspolo-border-right-shirt-detail"></div>

                            <h3 className='uspolo-shirt-available-offers'>Ship to</h3>

                            <div className="show-pincode-delhi">
                                <input type="text" value={addpincode} />
                                <p>Change Pincode</p>
                            </div>

                            <div className="delivery-uspolo-shirt--main-div">
                                <div>
                                    <img src="https://www.tatacliq.com/src/general/components/img/deliveryIcon.svg" alt="" />
                                </div>
                                <div>
                                    <p>Delivery by <span><b> 13th Jul</b></span></p>
                                </div>
                            </div>

                            <div className="delivery-uspolo-shirt--main-div">
                                <div>
                                    <img src="https://www.tatacliq.com/src/general/components/img/cod.svg" alt="" />
                                </div>
                                <div>
                                    <p><span><b> Cash on Delivery |</b></span> <span style={{ color: "#338715" }}><b>Available</b></span></p>
                                </div>
                            </div>

                            <div className="delivery-uspolo-shirt--main-div">
                                <div>
                                    <img src="https://www.tatacliq.com/src/general/components/img/returnReplacementIcon.svg" alt="" />
                                </div>
                                <div>
                                    <p><span><b>10 Days Easy Return |</b></span><span style={{ color: "#da1c5c" }}><b> Know More</b></span></p>
                                </div>
                            </div>

                            <div className="uspolo-soldBy-shirt">
                                <p><b>Sold By 1 Arvind Life Style Brands Ltd</b></p>
                                <p>&gt;</p>
                            </div>

                            <div className="uspolo-border-right-shirt-detail"></div>

                            <h3 className='uspolo-shirt-available-offers'>Product Details</h3>

                            <p style={{ color: "#4a4a4a", fontSize: "15px" }}>Refresh your wardrobe this new season with flavors of latest global
                                fashion in this uber stylish dark green shirt from the latest range
                                of the iconic U.S. Polo Assn.</p>

                            <div className="fit-uspolo-shirt-div-css">
                                <div>
                                    <p>Fit</p>
                                </div>
                                <div>
                                    <p>Regular fit</p>
                                </div>
                            </div>

                            <div className="fit-uspolo-shirt-div-css">
                                <div>
                                    <p>Pattern</p>
                                </div>
                                <div>
                                    <p>Solid</p>
                                </div>
                            </div>

                            <div className="more-information-product-uspolo-shirt">
                                <div>
                                    <img src="https://www.tatacliq.com/src/pdp/components/img/moreProduct.svg" alt="" />
                                </div>
                                <div>
                                    <p><b>More Product Information</b></p>
                                    <p>Manufacturing, Packaging & Import info</p>
                                </div>
                                <p>
                                    &gt;
                                </p>
                            </div>

                            <div className="uspolo-border-right-shirt-detail"></div>

                            <h3 className='uspolo-shirt-available-offers'>Customers thought the product's fit was</h3>

                            <div className='same-color-progress-bar-div-uspolo'>
                                <div><p><b>As expected (88%)</b></p></div>
                                <div>
                                    <div className="middle">
                                        <div className="bar-container">
                                            <div className="bar-5"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='same-color-progress-bar-div-uspolo'>
                                <div><p style={{ color: "#4a4a4a" }}>To Tight(7%)</p></div>
                                <div>
                                    <div className="middle">
                                        <div className="bar-container">
                                            <div className="bar-5-1"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='same-color-progress-bar-div-uspolo'>
                                <div><p style={{ color: "#4a4a4a" }}>To loose(5%)</p></div>
                                <div>
                                    <div className="middle">
                                        <div className="bar-container">
                                            <div className="bar-5-2"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* <div className="uspolo-border-right-shirt-detail"></div> */}

                            {/* <h3 className='uspolo-shirt-available-offers'>From the Brand</h3> */}

                            {/* <div className="thigh-div-uspolo-shirt">
                                <div>
                                    <div>
                                        <div>
                                            <img src="https://assets.tatacliq.com/medias/sys_master/images/34838208610334.png" alt="" />
                                        </div>
                                        <div>
                                            <h3>U.S. Polo Assn.</h3>
                                        </div>
                                    </div>
                                    <p>U.S. Polo Assn.</p>
                                    <button>Visit Store</button>
                                </div>
                            </div> */}

                            <div className="uspolo-border-right-shirt-detail"></div>

                            <div className="add-to-cart-button-wishlist-button">
                                <div className="buyNow-wishlist-share">
                                    <div>
                                        <img src="https://www.tatacliq.com/src/pdp/components/img/new-share-icon.svg" alt="" />
                                    </div>
                                    <div>
                                        <div>
                                            <img src="https://www.tatacliq.com/src/general/components/img/WL1.svg" alt="" />
                                        </div>
                                        {userdata?.role == "Seller" && <button className='button-single-product' onClick={()=>redirect(singleproduct.id)}>Update product</button>}
                                    </div>
                                    <button onClick={cartProduct}>Add To Bag</button>
                                </div>
                            </div>
                        </div>
                    </>}
                </div>

                <div className="bottom-style-with-div">
                    <h3>Style It With</h3>

                    <div className="recommended-combo">
                        <p>Recommended Combos</p>
                        <p>Bottom Wear</p>
                        <p>Top Wear</p>
                        <p>Outer Wear</p>
                        <p>Footwear</p>
                    </div>

                    <div className="recommended-combo-div-product">
                        <div className="united-color-benetton-div">
                            <img src="https://img.tatacliq.com/images/i8/252Wx374H/MP000000015504234_252Wx374H_202211301712111.jpeg" alt="" />
                            <h4>United Colors of Benetton</h4>
                            <p>United Colors of Benetton Beige Jogger Fit Jogger Pants</p>
                            <p>Rs. <span><b>1402</b></span> <span style={{ textDecoration: "line-through", color: "#979797", fontSize: "12px" }}>Rs.2599</span> <span style={{ color: "green", fontSize: "12px" }}><b>60 % Off</b></span></p>
                            <div className="product-rating-div-uspolo-shirt">
                                <p className='rating-div-background-color'>4.7 <span style={{ color: "green" }}>&#9733;</span></p>
                                <p style={{ color: "#979797", fontSize: "12px" }}>&nbsp;&nbsp;(3)</p>
                            </div>
                            <button className='Add-to-bag-recommend'>Add To Bag</button>
                        </div>
                        <div className="united-color-benetton-div">
                            <img src="https://img.tatacliq.com/images/i8/252Wx374H/MP000000012845444_252Wx374H_202204151802591.jpeg" alt="" />
                            <h4>Titan</h4>
                            <p>Titan 1805QM01 Neo Splash Analog Watch for Men</p>
                            <p>Rs. <span><b>5595</b></span> <span style={{ textDecoration: "line-through", color: "#979797", fontSize: "12px" }}>Rs.6995</span> <span style={{ color: "green", fontSize: "12px" }}><b>20 % Off</b></span></p>
                            <div className="product-rating-div-uspolo-shirt">
                                <p className='rating-div-background-color'>4.4 <span style={{ color: "green" }}>&#9733;</span></p>
                                <p style={{ color: "#979797", fontSize: "12px" }}>&nbsp;&nbsp;(50)</p>
                            </div>
                            <button className='Add-to-bag-recommend'>Add To Bag</button>
                        </div>
                        <div className="united-color-benetton-div">
                            <img src="https://img.tatacliq.com/images/i8/252Wx374H/MP000000015359169_252Wx374H_202211210256201.jpeg" alt="" />
                            <h4>Aristocrat</h4>
                            <p>Aristocrat 32 Ltrs Green Medium Backpack</p>
                            <p>Rs. <span><b>1575</b></span> <span style={{ textDecoration: "line-through", color: "#979797", fontSize: "12px" }}>Rs.3500</span> <span style={{ color: "green", fontSize: "12px" }}><b>55 % Off</b></span></p>
                            <div className="product-rating-div-uspolo-shirt">
                                <p className='rating-div-background-color'>4.5 <span style={{ color: "green" }}>&#9733;</span></p>
                                <p style={{ color: "#979797", fontSize: "12px" }}>&nbsp;&nbsp;(3)</p>
                            </div>
                            <button className='Add-to-bag-recommend'>Add To Bag</button>
                        </div>
                        <div className="united-color-benetton-div">
                            <img src="https://img.tatacliq.com/images/i7/252Wx374H/MP000000012400449_252Wx374H_202203081755401.jpeg" alt="" />
                            <h4>Ray-Ban</h4>
                            <p>Ray-Ban 0RB3675 Green Casual Classic Aviator - 58 mm</p>
                            <p style={{ marginBottom: "9%" }}>Rs. <span><b>9690</b></span></p>

                            <button className='Add-to-bag-recommend'>Add To Bag</button>
                        </div>
                    </div>

                    <img src={shopMore} alt="" />

                    <h2>Similar Product</h2>

                    <div className="similar-combo-div-product">
                        <div className="ivoc-color-benetton-div">
                            <img src="https://img.tatacliq.com/images/i11/437Wx649H/MP000000018118953_437Wx649H_202306271817171.jpeg" alt="" />
                            <p>VASTRADO Lemon Green Cotton Regular Fit Shirt</p>
                            <p>Rs. <span><b>659</b></span> <span style={{ textDecoration: "line-through", color: "#979797", fontSize: "12px" }}>Rs.1299</span> <span style={{ color: "green", fontSize: "12px" }}><b>45 % Off</b></span></p>
                        </div>
                        <div className="ivoc-color-benetton-div">
                            <img src="https://img.tatacliq.com/images/i11/437Wx649H/MP000000017905422_437Wx649H_202306111723271.jpeg" alt="" />
                            <p>IVOC Lime Green Slim Fit Shirt</p>
                            <p>Rs. <span><b>829</b></span> <span style={{ textDecoration: "line-through", color: "#979797", fontSize: "12px" }}>Rs.1799</span> <span style={{ color: "green", fontSize: "12px" }}><b>53 % Off</b></span></p>
                        </div>
                        <div className="ivoc-color-benetton-div">
                            <img src="https://img.tatacliq.com/images/i11/437Wx649H/MP000000017905398_437Wx649H_202306111722451.jpeg" alt="" />
                            <p>IVOC Beige Slim Fit Shirt</p>
                            <p>Rs. <span><b>933</b></span> <span style={{ textDecoration: "line-through", color: "#979797", fontSize: "12px" }}>Rs.1599</span> <span style={{ color: "green", fontSize: "12px" }}><b>41 % Off</b></span></p>
                        </div>
                        <div className="ivoc-color-benetton-div">
                            <img src="https://img.tatacliq.com/images/i11/437Wx649H/MP000000017861159_437Wx649H_202306080134491.jpeg" alt="" />
                            <p>SHOWOFF Grey Cotton Slim Fit Self Pattern Shirt</p>
                            <p>Rs. <span><b>952</b></span> <span style={{ textDecoration: "line-through", color: "#979797", fontSize: "12px" }}>Rs.2380</span> <span style={{ color: "green", fontSize: "12px" }}><b>60 % Off</b></span></p>
                        </div>
                        <div className="ivoc-color-benetton-div">
                            <img src="https://img.tatacliq.com/images/i11/437Wx649H/MP000000017861177_437Wx649H_202306080135391.jpeg" alt="" />
                            <p>SHOWOFF Olive Green Cotton Slim Fit Shirt</p>
                            <p>Rs. <span><b>952</b></span> <span style={{ textDecoration: "line-through", color: "#979797", fontSize: "12px" }}>Rs.2380</span> <span style={{ color: "green", fontSize: "12px" }}><b>60 % Off</b></span></p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default MensShirtDetail;