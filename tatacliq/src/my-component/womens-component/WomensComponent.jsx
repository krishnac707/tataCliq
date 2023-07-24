import './WomenComponent.css';
import { Link } from 'react-router-dom';


const WomensComponent = () => {
    return (
        <div className='mensWearBody'>
            <h1 className='mens-heading-css'>Women's Clothing</h1>
            <p className='mens-wear-para-css'>285739 Products</p>
            <div className="men-wear-sorting-div">
                <div className="men-wear-sorting">
                    <div className='sorting-all'>
                        <div className="sort">
                            <p>Sort :</p>
                        </div>
                        <div className="selectTag">
                            <select className='sort-select' name="sorts" id="sorts">
                                <option value="popularity">Popularity </option>
                                <option value="priceLowToHigh">Price low to High</option>
                                <option value="priceHighToLow">Price High to Low </option>
                                <option value="newArrivals">New Arrivals</option>
                                <option value="discount">Discount </option>
                            </select>
                        </div>
                        <img src="https://www.tatacliq.com/src/general/components/img/sortIcon.svg" alt="" />
                    </div>
                    <div className='sorting-image-div'>
                        <img src="https://www.tatacliq.com/src/plp/components/img/list.svg" alt="" />
                    </div>
                </div>
            </div>
            <div className="mens-main-section">
                <div className="mens-filter-product">
                    <div className="mens-filter-section">
                        <div className='filter-css'>
                            <p className='filter-para-css'>Filters</p>
                            <p className='filter-clear-css'>Clear All</p>
                        </div>

                        <div className="line-div"></div>

                        <p className="department-css">Department</p>
                        <p className='mens-clothing-css'>Women's Clothing</p>

                        <div className="line-div"></div>

                        <p className="department-css">Category</p>
                        <p className='mens-clothing-css'>Ethnic Wear <span style={{ fontWeight: 600 }}>X</span></p>

                        <div className="line-div"></div>

                        <div className="product-type-css">
                            <p className="product-heading-css">Product Type</p>
                            <p className='product-dash-css'>&#8212;</p>
                        </div>

                        <div className="cloth-type-css">
                            <input type="radio" name="" className='radio-css' id="" />
                            <p className='tshirt-name'>Kurtis & Kurtas</p>
                            <p className='tshirt-qty'>948702</p>
                        </div>

                        <div className="line-div"></div>

                        <div className="product-type-css1">
                            <p className="product-heading-css">Brand</p>
                            <p className='product-dash-css1'>+</p>
                        </div>

                        <div className="line-div"></div>

                        <div className="product-type-css1">
                            <p className="product-heading-css">Size</p>
                            <p className='product-dash-css1'>+</p>
                        </div>

                        <div className="line-div"></div>

                        <div className="product-type-css1">
                            <p className="product-heading-css">Type</p>
                            <p className='product-dash-css1'>+</p>
                        </div>

                        <div className="line-div"></div>

                        <div className="product-type-css1">
                            <p className="product-heading-css">Color</p>
                            <p className='product-dash-css1'>+</p>
                        </div>

                        <div className="line-div"></div>

                        <div className="product-type-css1">
                            <p className="product-heading-css">Price</p>
                            <p className='product-dash-css1'>+</p>
                        </div>

                        <div className="line-div"></div>

                        <div className="product-type-css1">
                            <p className="product-heading-css">Occassion</p>
                            <p className='product-dash-css1'>+</p>
                        </div>

                        <div className="line-div"></div>

                        <div className="product-type-css1">
                            <p className="product-heading-css">Pattern</p>
                            <p className='product-dash-css1'>+</p>
                        </div>

                        <div className="line-div"></div>

                        <div className="product-type-css1">
                            <p className="product-heading-css">All Discount</p>
                            <p className='product-dash-css1'>+</p>
                        </div>
                    </div>
                    <div className="mens-product-section">
                        <div className="mens-single-product">
                            <div className="mens-product-image">
                                <img src="https://img.tatacliq.com/images/i10/437Wx649H/MP000000017340053_437Wx649H_202304222223191.jpeg" className='mens-product-img' alt="" />
                                <div className='image-overlay'>
                                    <img src="https://www.tatacliq.com/src/general/components/img/WL1.svg" className='image-overlay' alt="" />
                                </div>

                                <div className='image-overlay-for-same-product'>
                                    <img src="https://www.tatacliq.com/src/general/components/img/similarIconNew.svg" className='image-overlay' alt="" />
                                </div>
                            </div>

                            <div className="product-info">
                                <h3 style={{ marginBottom: "1%" }}>Utsa</h3>
                                <p style={{ marginBottom: "1%", color: "#4a4a4a" }}>Utsa by Westside Yellow Kurta</p>
                                <p>Rs. <span><b>1299</b></span></p>
                                <div className="product-rating-div">
                                    <p className='rating-div'>4.2 <span style={{ color: "green" }}>&#9733;</span></p>
                                    <p>&nbsp;&nbsp;(26)</p>
                                </div>
                                <p className='limited-stock'>Limited Stock!</p>
                            </div>
                        </div>

                        <div className="mens-single-product">
                            <div className="mens-product-image">
                                <Link to="/mens-shirt-detail">
                                    <img src="https://img.tatacliq.com/images/i11/437Wx649H/MP000000017813986_437Wx649H_202306022359551.jpeg" className='mens-product-img' alt="" />
                                    {/* <img src="https://www.tatacliq.com/src/general/components/img/WL1.svg" className='image-overlay' alt="" /> */}
                                    <div className='image-overlay'>
                                        <img src="https://www.tatacliq.com/src/general/components/img/WL1.svg" className='image-overlay' alt="" />
                                    </div>

                                    <div className='image-overlay-for-same-product'>
                                        <img src="https://www.tatacliq.com/src/general/components/img/similarIconNew.svg" className='image-overlay' alt="" />
                                    </div>
                                </Link>
                            </div>

                            <div className="product-info">
                                <h3 style={{ marginBottom: "1%" }}>Utsa</h3>
                                <p style={{ marginBottom: "1%", color: "#4a4a4a" }}>Utsa by Westside Printed Off-White Kurta</p>
                                <p>Rs. <span><b>1499</b></span></p>
                                <div className="product-rating-div">
                                    <p className='rating-div'>4.9 <span style={{ color: "green" }}>&#9733;</span></p>
                                    <p>&nbsp;&nbsp;(13)</p>
                                </div>
                                {/* <p className='limited-stock'>Limited Stock!</p> */}
                            </div>
                        </div>

                        <div className="mens-single-product">

                            <div className="mens-product-image">
                                <img src="https://img.tatacliq.com/images/i11/437Wx649H/MP000000017764775_437Wx649H_202305311042541.jpeg" className='mens-product-img' alt="" />
                                <div className='image-overlay'>
                                    <img src="https://www.tatacliq.com/src/general/components/img/WL1.svg" className='image-overlay' alt="" />
                                </div>

                                <div className='image-overlay-for-same-product'>
                                    <img src="https://www.tatacliq.com/src/general/components/img/similarIconNew.svg" className='image-overlay' alt="" />
                                </div>
                                {/* <img src="https://www.tatacliq.com/src/general/components/img/WL1.svg" className='image-overlay' alt="" /> */}
                            </div>

                            <div className="product-info">
                                <h3 style={{ marginBottom: "1%" }}>Rangmanch by Pantaloons</h3>
                                <p style={{ marginBottom: "1%", color: "#4a4a4a" }}>Rangmanch by Pantaloons Coral Printed Straight Kurta</p>
                                <p>Rs. <span><b>1299</b></span></p>
                            </div>
                        </div>

                        <div className="mens-single-product">
                            <div className="mens-product-image">
                                <img src="https://img.tatacliq.com/images/i8/437Wx649H/MP000000014192424_437Wx649H_202208210124011.jpeg" className='mens-product-img' alt="" />
                                <div className='image-overlay'>
                                    <img src="https://www.tatacliq.com/src/general/components/img/WL1.svg" className='image-overlay' alt="" />
                                </div>

                                <div className='image-overlay-for-same-product'>
                                    <img src="https://www.tatacliq.com/src/general/components/img/similarIconNew.svg" className='image-overlay' alt="" />
                                </div>
                                {/* <img src="https://www.tatacliq.com/src/general/components/img/WL1.svg" className='image-overlay' alt="" /> */}
                            </div>

                            <div className="product-info">
                                <h3 style={{ marginBottom: "1%" }}>Juniper</h3>
                                <p style={{ marginBottom: "1%", color: "#4a4a4a" }}>Juniper Green Printed Straight Kurta</p>
                                <p>Rs. <span><b>799</b></span> <span style={{ textDecoration: "line-through", color: "#979797", fontSize: "12px" }}>Rs.1699</span></p>
                                <div className="product-rating-div">
                                    <p className='rating-div'>4.1 <span style={{ color: "green" }}>&#9733;</span></p>
                                    <p>&nbsp;&nbsp;(36)</p>
                                </div>
                            </div>
                        </div>

                        <div className="mens-single-product">
                            <div className="mens-product-image">
                                <img src="https://img.tatacliq.com/images/i11/437Wx649H/MP000000017521562_437Wx649H_202305120004041.jpeg" className='mens-product-img' alt="" />
                                <div className='image-overlay'>
                                    <img src="https://www.tatacliq.com/src/general/components/img/WL1.svg" className='image-overlay' alt="" />
                                </div>

                                <div className='image-overlay-for-same-product'>
                                    <img src="https://www.tatacliq.com/src/general/components/img/similarIconNew.svg" className='image-overlay' alt="" />
                                </div>
                                {/* <img src="https://www.tatacliq.com/src/general/components/img/WL1.svg" className='image-overlay' alt="" /> */}
                            </div>

                            <div className="product-info">
                                <h3 style={{ marginBottom: "1%" }}>Diza</h3>
                                <p style={{ marginBottom: "1%", color: "#4a4a4a" }}>Diza by Westside White Kurta</p>
                                <p>Rs. <span><b>1399</b></span> <span style={{ textDecoration: "line-through", color: "#979797", fontSize: "12px" }}>Rs.1299</span></p>
                                <div className="product-rating-div">
                                    <p className='rating-div'>4.6 <span style={{ color: "green" }}>&#9733;</span></p>
                                    <p>&nbsp;&nbsp;(4.2)</p>
                                </div>
                            </div>
                        </div>

                        <div className="mens-single-product">
                            <div className="mens-product-image">
                                <img src="https://img.tatacliq.com/images/i8/437Wx649H/MP000000014724291_437Wx649H_202210010550301.jpeg" className='mens-product-img' alt="" />
                                <div className='image-overlay'>
                                    <img src="https://www.tatacliq.com/src/general/components/img/WL1.svg" className='image-overlay' alt="" />
                                </div>

                                <div className='image-overlay-for-same-product'>
                                    <img src="https://www.tatacliq.com/src/general/components/img/similarIconNew.svg" className='image-overlay' alt="" />
                                </div>
                                {/* <img src="https://www.tatacliq.com/src/general/components/img/WL1.svg" className='image-overlay' alt="" /> */}
                            </div>

                            <div className="product-info">
                                <h3 style={{ marginBottom: "1%" }}>Yufta</h3>
                                <p style={{ marginBottom: "1%", color: "#4a4a4a" }}>Yufta Lavender Rayon Embroidered A Line Kurta</p>
                                <p>Rs. <span><b>699</b></span> <span style={{ textDecoration: "line-through", color: "#979797", fontSize: "12px" }}>Rs.699</span></p>
                                <div className="product-rating-div">
                                    <p className='rating-div'>4.6 <span style={{ color: "green" }}>&#9733;</span></p>
                                    <p>&nbsp;&nbsp;(32)</p>
                                </div>
                            </div>
                        </div>

                        <div className="mens-single-product">
                            <div className="mens-product-image">
                                <img src="https://img.tatacliq.com/images/i11/437Wx649H/MP000000017765298_437Wx649H_202305311103491.jpeg" className='mens-product-img' alt="" />
                                <div className='image-overlay'>
                                    <img src="https://www.tatacliq.com/src/general/components/img/WL1.svg" className='image-overlay' alt="" />
                                </div>

                                <div className='image-overlay-for-same-product'>
                                    <img src="https://www.tatacliq.com/src/general/components/img/similarIconNew.svg" className='image-overlay' alt="" />
                                </div>
                                {/* <img src="https://www.tatacliq.com/src/general/components/img/WL1.svg" className='image-overlay' alt="" /> */}
                            </div>

                            <div className="product-info">
                                <h3 style={{ marginBottom: "1%" }}>Rangmanch by Pantaloons</h3>
                                <p style={{ marginBottom: "1%", color: "#4a4a4a" }}>Rangmanch by Pantaloons White Cotton A Line Kurta</p>
                                <p>Rs. <span><b>1199</b></span> <span style={{ textDecoration: "line-through", color: "#979797", fontSize: "12px" }}>Rs.2999</span></p>
                                
                            </div>
                        </div>

                        <div className="mens-single-product">
                            <div className="mens-product-image">
                                <img src="https://img.tatacliq.com/images/i10/437Wx649H/MP000000017136677_437Wx649H_202304080337131.jpeg" className='mens-product-img' alt="" />
                                <div className='image-overlay'>
                                    <img src="https://www.tatacliq.com/src/general/components/img/WL1.svg" className='image-overlay' alt="" />
                                </div>

                                <div className='image-overlay-for-same-product'>
                                    <img src="https://www.tatacliq.com/src/general/components/img/similarIconNew.svg" className='image-overlay' alt="" />
                                </div>
                                {/* <img src="https://www.tatacliq.com/src/general/components/img/WL1.svg" className='image-overlay' alt="" /> */}
                            </div>

                            <div className="product-info">
                                <h3 style={{ marginBottom: "1%" }}>Juniper</h3>
                                <p style={{ marginBottom: "1%", color: "#4a4a4a" }}>Juniper Blue Cotton Embroidered Straight Kurta</p>
                                <p>Rs. <span><b>977</b></span> <span style={{ textDecoration: "line-through", color: "#979797", fontSize: "12px" }}>Rs.4249</span></p>
                                <div className="product-rating-div">
                                    <p className='rating-div'>4.5 <span style={{ color: "green" }}>&#9733;</span></p>
                                    <p>&nbsp;&nbsp;(5)</p>
                                </div>
                            </div>
                        </div>

                        <div className="mens-single-product">
                            <div className="mens-product-image">
                                <img src="https://img.tatacliq.com/images/i7/437Wx649H/MP000000011534678_437Wx649H_202112212243391.jpeg" className='mens-product-img' alt="" />
                                <div className='image-overlay'>
                                    <img src="https://www.tatacliq.com/src/general/components/img/WL1.svg" className='image-overlay' alt="" />
                                </div>

                                <div className='image-overlay-for-same-product'>
                                    <img src="https://www.tatacliq.com/src/general/components/img/similarIconNew.svg" className='image-overlay' alt="" />
                                </div>
                                {/* <img src="https://www.tatacliq.com/src/general/components/img/WL1.svg" className='image-overlay' alt="" /> */}
                            </div>

                            <div className="product-info">
                                <h3 style={{ marginBottom: "1%" }}>Yufta</h3>
                                <p style={{ marginBottom: "1%", color: "#4a4a4a" }}>Yufta Purple Printed Straight Kurta</p>
                                <p>Rs. <span><b>759</b></span> <span style={{ textDecoration: "line-through", color: "#979797", fontSize: "12px" }}>Rs.1899</span></p>

                            </div>
                        </div>

                        <div className="mens-single-product">
                            <div className="mens-product-image">
                                <img src="https://img.tatacliq.com/images/i11/437Wx649H/MP000000017912068_437Wx649H_202306121424561.jpeg" className='mens-product-img' alt="" />
                                <div className='image-overlay'>
                                    <img src="https://www.tatacliq.com/src/general/components/img/WL1.svg" className='image-overlay' alt="" />
                                </div>

                                <div className='image-overlay-for-same-product'>
                                    <img src="https://www.tatacliq.com/src/general/components/img/similarIconNew.svg" className='image-overlay' alt="" />
                                </div>
                                {/* <img src="https://www.tatacliq.com/src/general/components/img/WL1.svg" className='image-overlay' alt="" /> */}
                            </div>

                            <div className="product-info">
                                <h3 style={{ marginBottom: "1%" }}>Zuba</h3>
                                <p style={{ marginBottom: "1%", color: "#4a4a4a" }}>Zuba by Westside White Floral Printed A-Line Kurta</p>
                                <p>Rs. <span><b>2999</b></span></p>
                                <div className="product-rating-div">
                                    <p className='rating-div'>4.3 <span style={{ color: "green" }}>&#9733;</span></p>
                                    <p>&nbsp;&nbsp;(2)</p>
                                </div>
                            </div>
                        </div>

                        <div className="mens-single-product">
                            <div className="mens-product-image">
                                <img src="https://img.tatacliq.com/images/i11/437Wx649H/MP000000017746702_437Wx649H_202305301112321.jpeg" className='mens-product-img' alt="" />
                                <div className='image-overlay'>
                                    <img src="https://www.tatacliq.com/src/general/components/img/WL1.svg" className='image-overlay' alt="" />
                                </div>

                                <div className='image-overlay-for-same-product'>
                                    <img src="https://www.tatacliq.com/src/general/components/img/similarIconNew.svg" className='image-overlay' alt="" />
                                </div>
                                {/* <img src="https://www.tatacliq.com/src/general/components/img/WL1.svg" className='image-overlay' alt="" /> */}
                            </div>

                            <div className="product-info">
                                <h3 style={{ marginBottom: "1%" }}>Zuba</h3>
                                <p style={{ marginBottom: "1%", color: "#4a4a4a" }}>Zuba by Westside Printed Dusty Pink Kurta</p>
                                <p>Rs. <span><b>2799</b></span></p>
                                
                            </div>
                        </div>

                        <div className="mens-single-product">
                            <div className="mens-product-image">
                                <img src="https://img.tatacliq.com/images/i11/437Wx649H/MP000000018002021_437Wx649H_202306180544521.jpeg" className='mens-product-img' alt="" />
                                <div className='image-overlay'>
                                    <img src="https://www.tatacliq.com/src/general/components/img/WL1.svg" className='image-overlay' alt="" />
                                </div>

                                <div className='image-overlay-for-same-product'>
                                    <img src="https://www.tatacliq.com/src/general/components/img/similarIconNew.svg" className='image-overlay' alt="" />
                                </div>
                                {/* <img src="https://www.tatacliq.com/src/general/components/img/WL1.svg" className='image-overlay' alt="" /> */}
                            </div>

                            <div className="product-info">
                                <h3 style={{ marginBottom: "1%" }}>Diza</h3>
                                <p style={{ marginBottom: "1%", color: "#4a4a4a" }}>Diza by Westside Printed White Kurta</p>
                                <p>Rs. <span><b>813</b></span></p>
                                <div className="product-rating-div">
                                    <p className='rating-div'>4.6 <span style={{ color: "green" }}>&#9733;</span></p>
                                    <p>&nbsp;&nbsp;(2)</p>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div >
    )
}

export default WomensComponent;