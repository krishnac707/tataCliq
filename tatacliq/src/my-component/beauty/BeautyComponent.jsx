import './BeautyComponent.css';
import { Link } from 'react-router-dom';


const BeautyComponent = () => {
    return (
        <div className='mensWearBody'>
            <h1 className='mens-heading-css'>Beauty & grooming</h1>
            <p className='mens-wear-para-css'>537 Products</p>
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
                        <p className='mens-clothing-css'>Beauty & Grooming</p>

                        <div className="line-div"></div>

                        <p className="department-css">Category</p>
                        <p className='mens-clothing-css'>Fragrance and Perfumes <span style={{ fontWeight: 600 }}>X</span></p>

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
                                <img src="https://img.tatacliq.com/images/i8/437Wx649H/MP000000012864598_437Wx649H_202204191756571.jpeg" className='mens-product-img' alt="" />
                                <div className='image-overlay'>
                                    <img src="https://www.tatacliq.com/src/general/components/img/WL1.svg" className='image-overlay' alt="" />
                                </div>

                                <div className='image-overlay-for-same-product'>
                                    <img src="https://www.tatacliq.com/src/general/components/img/similarIconNew.svg" className='image-overlay' alt="" />
                                </div>
                            </div>

                            <div className="product-info">
                                <h3 style={{ marginBottom: "1%" }}>Ajmal</h3>
                                <p style={{ marginBottom: "1%", color: "#4a4a4a" }}>Ajmal Sacred Love, Sacrifice Ii, Nightingale & Distraction Combo Pack</p>
                                <p>Rs. <span><b>527</b></span> <span style={{ textDecoration: "line-through", color: "#979797", fontSize: "12px" }}>Rs.309</span></p>
                                <div className="product-rating-div">
                                    <p className='rating-div'>2.8 <span style={{ color: "green" }}>&#9733;</span></p>
                                    <p>&nbsp;&nbsp;(1)</p>
                                </div>
                            </div>
                        </div>

                        <div className="mens-single-product">
                            <div className="mens-product-image">
                                <Link to="/mens-shirt-detail">
                                    <img src="https://img.tatacliq.com/images/i8/437Wx649H/MP000000009751478_437Wx649H_202207121350451.jpeg" className='mens-product-img' alt="" />
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
                                <h3 style={{ marginBottom: "1%" }}>Ajmal</h3>
                                <p style={{ marginBottom: "1%", color: "#4a4a4a" }}>Ajmal Prose Eau De Parfum for Men & Distraction Parfum Deodorant for Unisex Combo</p>
                                <p>Rs. <span><b>2299</b></span></p>
                                <div className="product-rating-div">
                                    <p className='rating-div'>4.5 <span style={{ color: "green" }}>&#9733;</span></p>
                                    <p>&nbsp;&nbsp;(2)</p>
                                </div>
                                {/* <p className='limited-stock'>Limited Stock!</p> */}
                            </div>
                        </div>

                        <div className="mens-single-product">

                            <div className="mens-product-image">
                                <img src="https://img.tatacliq.com/images/i8/437Wx649H/MP000000007907114_437Wx649H_202205180759521.jpeg" className='mens-product-img' alt="" />
                                <div className='image-overlay'>
                                    <img src="https://www.tatacliq.com/src/general/components/img/WL1.svg" className='image-overlay' alt="" />
                                </div>

                                <div className='image-overlay-for-same-product'>
                                    <img src="https://www.tatacliq.com/src/general/components/img/similarIconNew.svg" className='image-overlay' alt="" />
                                </div>
                                {/* <img src="https://www.tatacliq.com/src/general/components/img/WL1.svg" className='image-overlay' alt="" /> */}
                            </div>

                            <div className="product-info">
                                <h3 style={{ marginBottom: "1%" }}>Skinn by Titan</h3>
                                <p style={{ marginBottom: "1%", color: "#4a4a4a" }}>Skinn by Titan Celeste + Sheer Eau de Parfum Combo Set</p>
                                <p>Rs. <span><b>1995</b></span></p>
                            </div>
                        </div>

                        <div className="mens-single-product">
                            <div className="mens-product-image">
                                <img src="https://img.tatacliq.com/images/i8/437Wx649H/MP000000009751440_437Wx649H_202207121350471.jpeg" className='mens-product-img' alt="" />
                                <div className='image-overlay'>
                                    <img src="https://www.tatacliq.com/src/general/components/img/WL1.svg" className='image-overlay' alt="" />
                                </div>

                                <div className='image-overlay-for-same-product'>
                                    <img src="https://www.tatacliq.com/src/general/components/img/similarIconNew.svg" className='image-overlay' alt="" />
                                </div>
                                {/* <img src="https://www.tatacliq.com/src/general/components/img/WL1.svg" className='image-overlay' alt="" /> */}
                            </div>

                            <div className="product-info">
                                <h3 style={{ marginBottom: "1%" }}>Ajmal</h3>
                                <p style={{ marginBottom: "1%", color: "#4a4a4a" }}>Ajmal Yearn & Prose Eau De Parfum for Men Combo</p>
                                <p>Rs. <span><b>1200</b></span> <span style={{ textDecoration: "line-through", color: "#979797", fontSize: "12px" }}>Rs.3199</span></p>
                                <div className="product-rating-div">
                                    <p className='rating-div'>3.0 <span style={{ color: "green" }}>&#9733;</span></p>
                                    <p>&nbsp;&nbsp;(2)</p>
                                </div>
                                <p className='limited-stock'>Limited Stock!</p>
                            </div>
                        </div>

                        <div className="mens-single-product">
                            <div className="mens-product-image">
                                <img src="https://img.tatacliq.com/images/i7/437Wx649H/MP000000009454643_437Wx649H_202104281116401.jpeg" className='mens-product-img' alt="" />
                                <div className='image-overlay'>
                                    <img src="https://www.tatacliq.com/src/general/components/img/WL1.svg" className='image-overlay' alt="" />
                                </div>

                                <div className='image-overlay-for-same-product'>
                                    <img src="https://www.tatacliq.com/src/general/components/img/similarIconNew.svg" className='image-overlay' alt="" />
                                </div>
                                {/* <img src="https://www.tatacliq.com/src/general/components/img/WL1.svg" className='image-overlay' alt="" /> */}
                            </div>

                            <div className="product-info">
                                <h3 style={{ marginBottom: "1%" }}>Global Desi</h3>
                                <p style={{ marginBottom: "1%", color: "#4a4a4a" }}>Global Desi Dreamy Daze Eau De Parfum & Magical Maze Body Mist</p>
                                <p>Rs. <span><b>730</b></span> <span style={{ textDecoration: "line-through", color: "#979797", fontSize: "12px" }}>Rs.1699</span></p>
                                <div className="product-rating-div">
                                    <p className='rating-div'>5.0 <span style={{ color: "green" }}>&#9733;</span></p>
                                    <p>&nbsp;&nbsp;(1)</p>
                                </div>
                            </div>
                        </div>

                        <div className="mens-single-product">
                            <div className="mens-product-image">
                                <img src="https://img.tatacliq.com/images/i7/437Wx649H/MP000000009988675_437Wx649H_202107140229231.jpeg" className='mens-product-img' alt="" />
                                <div className='image-overlay'>
                                    <img src="https://www.tatacliq.com/src/general/components/img/WL1.svg" className='image-overlay' alt="" />
                                </div>

                                <div className='image-overlay-for-same-product'>
                                    <img src="https://www.tatacliq.com/src/general/components/img/similarIconNew.svg" className='image-overlay' alt="" />
                                </div>
                                {/* <img src="https://www.tatacliq.com/src/general/components/img/WL1.svg" className='image-overlay' alt="" /> */}
                            </div>

                            <div className="product-info">
                                <h3 style={{ marginBottom: "1%" }}>Global Desi</h3>
                                <p style={{ marginBottom: "1%", color: "#4a4a4a" }}>Global Desi Mythical Bloom EDP & Magical Maze Body Mist Pack of 2 Crafted by Ajmal</p>
                                <p>Rs. <span><b>803</b></span> <span style={{ textDecoration: "line-through", color: "#979797", fontSize: "12px" }}>Rs.2599</span></p>
                                
                            </div>
                        </div>

                        <div className="mens-single-product">
                            <div className="mens-product-image">
                                <img src="https://img.tatacliq.com/images/i8/437Wx649H/MP000000009988607_437Wx649H_202207292052301.jpeg" className='mens-product-img' alt="" />
                                <div className='image-overlay'>
                                    <img src="https://www.tatacliq.com/src/general/components/img/WL1.svg" className='image-overlay' alt="" />
                                </div>

                                <div className='image-overlay-for-same-product'>
                                    <img src="https://www.tatacliq.com/src/general/components/img/similarIconNew.svg" className='image-overlay' alt="" />
                                </div>
                                {/* <img src="https://www.tatacliq.com/src/general/components/img/WL1.svg" className='image-overlay' alt="" /> */}
                            </div>

                            <div className="product-info">
                                <h3 style={{ marginBottom: "1%" }}>Global Desi</h3>
                                <p style={{ marginBottom: "1%", color: "#4a4a4a" }}>Global Desi Star Gazer & Cosmic Dreamer Pack of 2 Body Mist Crafted by Ajmal</p>
                                <p>Rs. <span><b>420</b></span> <span style={{ textDecoration: "line-through", color: "#979797", fontSize: "12px" }}>Rs.700</span></p>
                            </div>
                        </div>

                        <div className="mens-single-product">
                            <div className="mens-product-image">
                                <img src="https://img.tatacliq.com/images/i8/437Wx649H/MP000000012563525_437Wx649H_202203242312281.jpeg" className='mens-product-img' alt="" />
                                <div className='image-overlay'>
                                    <img src="https://www.tatacliq.com/src/general/components/img/WL1.svg" className='image-overlay' alt="" />
                                </div>

                                <div className='image-overlay-for-same-product'>
                                    <img src="https://www.tatacliq.com/src/general/components/img/similarIconNew.svg" className='image-overlay' alt="" />
                                </div>
                                {/* <img src="https://www.tatacliq.com/src/general/components/img/WL1.svg" className='image-overlay' alt="" /> */}
                            </div>

                            <div className="product-info">
                                <h3 style={{ marginBottom: "1%" }}>Liberty</h3>
                                <p style={{ marginBottom: "1%", color: "#4a4a4a" }}>Liberty Luxury Legend & Passion Perfume for Men Combo Pack - 200 ml</p>
                                <p>Rs. <span><b>3079</b></span> <span style={{ textDecoration: "line-through", color: "#979797", fontSize: "12px" }}>Rs.4399</span></p>
                                
                            </div>
                        </div>

                        <div className="mens-single-product">
                            <div className="mens-product-image">
                                <img src="https://img.tatacliq.com/images/i8/437Wx649H/MP000000015285431_437Wx649H_202211132025341.jpeg" className='mens-product-img' alt="" />
                                <div className='image-overlay'>
                                    <img src="https://www.tatacliq.com/src/general/components/img/WL1.svg" className='image-overlay' alt="" />
                                </div>

                                <div className='image-overlay-for-same-product'>
                                    <img src="https://www.tatacliq.com/src/general/components/img/similarIconNew.svg" className='image-overlay' alt="" />
                                </div>
                                {/* <img src="https://www.tatacliq.com/src/general/components/img/WL1.svg" className='image-overlay' alt="" /> */}
                            </div>

                            <div className="product-info">
                                <h3 style={{ marginBottom: "1%" }}>MERCEDES-BENZ</h3>
                                <p style={{ marginBottom: "1%", color: "#4a4a4a" }}>MERCEDES-BENZ Eau De Toilette, Shower Gel & After Shave Balm Combo for Men</p>
                                <p>Rs. <span><b>7565</b></span> <span style={{ textDecoration: "line-through", color: "#979797", fontSize: "12px" }}>Rs.8900</span></p>

                            </div>
                        </div>

                        <div className="mens-single-product">
                            <div className="mens-product-image">
                                <img src="https://img.tatacliq.com/images/i8/437Wx649H/MP000000009002851_437Wx649H_202207081519031.jpeg" className='mens-product-img' alt="" />
                                <div className='image-overlay'>
                                    <img src="https://www.tatacliq.com/src/general/components/img/WL1.svg" className='image-overlay' alt="" />
                                </div>

                                <div className='image-overlay-for-same-product'>
                                    <img src="https://www.tatacliq.com/src/general/components/img/similarIconNew.svg" className='image-overlay' alt="" />
                                </div>
                                {/* <img src="https://www.tatacliq.com/src/general/components/img/WL1.svg" className='image-overlay' alt="" /> */}
                            </div>

                            <div className="product-info">
                                <h3 style={{ marginBottom: "1%" }}>wiSDom by Sheetal Desai</h3>
                                <p style={{ marginBottom: "1%", color: "#4a4a4a" }}>wiSDom by Sheetal Desai 3 in 1 Miniature Perfume For Men</p>
                                <p>Rs. <span><b>499</b></span></p>
                                
                            </div>
                        </div>

                        <div className="mens-single-product">
                            <div className="mens-product-image">
                                <img src="https://img.tatacliq.com/images/i8/437Wx649H/MP000000009064797_437Wx649H_202207022112571.jpeg" className='mens-product-img' alt="" />
                                <div className='image-overlay'>
                                    <img src="https://www.tatacliq.com/src/general/components/img/WL1.svg" className='image-overlay' alt="" />
                                </div>

                                <div className='image-overlay-for-same-product'>
                                    <img src="https://www.tatacliq.com/src/general/components/img/similarIconNew.svg" className='image-overlay' alt="" />
                                </div>
                                {/* <img src="https://www.tatacliq.com/src/general/components/img/WL1.svg" className='image-overlay' alt="" /> */}
                            </div>

                            <div className="product-info">
                                <h3 style={{ marginBottom: "1%" }}>India Grooming Club</h3>
                                <p style={{ marginBottom: "1%", color: "#4a4a4a" }}>India Grooming Club Imperial Gift Box</p>
                                <p>Rs. <span><b>2800</b></span> <span style={{ textDecoration: "line-through", color: "#979797", fontSize: "12px" }}>Rs.3600</span></p>
                                
                                <p className='limited-stock'>Limited Stock!</p>
                            </div>
                        </div>

                        <div className="mens-single-product">
                            <div className="mens-product-image">
                                <img src="https://img.tatacliq.com/images/i8/437Wx649H/MP000000010741359_437Wx649H_202207130542001.jpeg" className='mens-product-img' alt="" />
                                <div className='image-overlay'>
                                    <img src="https://www.tatacliq.com/src/general/components/img/WL1.svg" className='image-overlay' alt="" />
                                </div>

                                <div className='image-overlay-for-same-product'>
                                    <img src="https://www.tatacliq.com/src/general/components/img/similarIconNew.svg" className='image-overlay' alt="" />
                                </div>
                                {/* <img src="https://www.tatacliq.com/src/general/components/img/WL1.svg" className='image-overlay' alt="" /> */}
                            </div>

                            <div className="product-info">
                                <h3 style={{ marginBottom: "1%" }}>Ajmal</h3>
                                <p style={{ marginBottom: "1%", color: "#4a4a4a" }}>Ajmal Blu Parfum Deodorant & Yearn Eau de Parfum Combo</p>
                                <p>Rs. <span><b>1050</b></span> <span style={{ textDecoration: "line-through", color: "#979797", fontSize: "12px" }}>Rs.1500</span></p>
                                <div className="product-rating-div">
                                    <p className='rating-div'>4.6 <span style={{ color: "green" }}>&#9733;</span></p>
                                    <p>&nbsp;&nbsp;(18)</p>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div >
    )
}

export default BeautyComponent;