import './MensWearComponent.css';
import { Link } from 'react-router-dom';


const MensWearComponent = () => {
    return (
        <div className='mensWearBody'>
            <h1 className='mens-heading-css'>Men's winter wear</h1>
            <p className='mens-wear-para-css'>110869 Products</p>
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
                        <p className='mens-clothing-css'>Mens Clothing</p>

                        <div className="line-div"></div>

                        <p className="department-css">Category</p>
                        <p className='mens-clothing-css'>Casual Wear <span style={{ fontWeight: 600 }}>X</span></p>

                        <div className="line-div"></div>

                        <div className="product-type-css">
                            <p className="product-heading-css">Product Type</p>
                            <p className='product-dash-css'>&#8212;</p>
                        </div>

                        <div className="cloth-type-css">
                            <input type="radio" name="" className='radio-css' id="" />
                            <p className='tshirt-name'>T-shirt & polos</p>
                            <p className='tshirt-qty'>948702</p>
                        </div>

                        <div className="cloth-type-css">
                            <input type="radio" name="" className='radio-css' id="" />
                            <p className='tshirt-name'>Shirts</p>
                            <p className='tshirt-qty'>38702</p>
                        </div>

                        <div className="cloth-type-css">
                            <input type="radio" name="" className='radio-css' id="" />
                            <p className='tshirt-name'>Sweat T-shirt</p>
                            <p className='tshirt-qty'>5702</p>
                        </div>

                        <div className="cloth-type-css">
                            <input type="radio" name="" className='radio-css' id="" />
                            <p className='tshirt-name'>Jackets</p>
                            <p className='tshirt-qty'>9283</p>
                        </div>

                        <div className="cloth-type-css1">
                            <input type="radio" name="" className='radio-css' id="" />
                            <p className='tshirt-name'>Jeans</p>
                            <p className='tshirt-qty'>84</p>
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
                                <img src="https://img.tatacliq.com/images/i8/437Wx649H/MP000000012179284_437Wx649H_202202181504421.jpeg" className='mens-product-img' alt="" />
                                <div className='image-overlay'>
                                    <img src="https://www.tatacliq.com/src/general/components/img/WL1.svg" className='image-overlay' alt="" />
                                </div>

                                <div className='image-overlay-for-same-product'>
                                    <img src="https://www.tatacliq.com/src/general/components/img/similarIconNew.svg" className='image-overlay' alt="" />
                                </div>
                            </div>

                            <div className="product-info">
                                <h3 style={{ marginBottom: "1%" }}>Woodland</h3>
                                <p style={{ marginBottom: "1%", color: "#4a4a4a" }}>Woodland Black Short Sleeves Cotton T-Shirt</p>
                                <p>Rs. <span><b>209</b></span> <span style={{ textDecoration: "line-through", color: "#979797", fontSize: "12px" }}>Rs.309</span></p>
                                <div className="product-rating-div">
                                    <p className='rating-div'>2.8 <span style={{ color: "green" }}>&#9733;</span></p>
                                    <p>&nbsp;&nbsp;(18)</p>
                                </div>
                                <p className='limited-stock'>Limited Stock!</p>
                            </div>
                        </div>

                        <div className="mens-single-product">
                            <div className="mens-product-image">
                                <Link to="/mens-shirt-detail">
                                    <img src="https://img.tatacliq.com/images/i8/437Wx649H/MP000000015191655_437Wx649H_202211060047171.jpeg" className='mens-product-img' alt="" />
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
                                <h3 style={{ marginBottom: "1%" }}>U.S. Polo Assn.</h3>
                                <p style={{ marginBottom: "1%", color: "#4a4a4a" }}>U.S. Polo Assn. Dark Green Regular Fit Cotton Shirt</p>
                                <p>Rs. <span><b>2299</b></span></p>
                                <div className="product-rating-div">
                                    <p className='rating-div'>2.8 <span style={{ color: "green" }}>&#9733;</span></p>
                                    <p>&nbsp;&nbsp;(5)</p>
                                </div>
                                {/* <p className='limited-stock'>Limited Stock!</p> */}
                            </div>
                        </div>

                        <div className="mens-single-product">

                            <div className="mens-product-image">
                                <img src="https://img.tatacliq.com/images/i9/437Wx649H/MP000000016373929_437Wx649H_202302042021191.jpeg" className='mens-product-img' alt="" />
                                <div className='image-overlay'>
                                    <img src="https://www.tatacliq.com/src/general/components/img/WL1.svg" className='image-overlay' alt="" />
                                </div>

                                <div className='image-overlay-for-same-product'>
                                    <img src="https://www.tatacliq.com/src/general/components/img/similarIconNew.svg" className='image-overlay' alt="" />
                                </div>
                                {/* <img src="https://www.tatacliq.com/src/general/components/img/WL1.svg" className='image-overlay' alt="" /> */}
                            </div>

                            <div className="product-info">
                                <h3 style={{ marginBottom: "1%" }}>U.S. Polo Assn.</h3>
                                <p style={{ marginBottom: "1%", color: "#4a4a4a" }}>U.S. Polo Assn. Ivory Cotton Regular Fit Polo T-Shirt</p>
                                <p>Rs. <span><b>1899</b></span></p>
                            </div>
                        </div>

                        <div className="mens-single-product">
                            <div className="mens-product-image">
                                <img src="https://img.tatacliq.com/images/i8/437Wx649H/MP000000015298354_437Wx649H_202211152202081.jpeg" className='mens-product-img' alt="" />
                                <div className='image-overlay'>
                                    <img src="https://www.tatacliq.com/src/general/components/img/WL1.svg" className='image-overlay' alt="" />
                                </div>

                                <div className='image-overlay-for-same-product'>
                                    <img src="https://www.tatacliq.com/src/general/components/img/similarIconNew.svg" className='image-overlay' alt="" />
                                </div>
                                {/* <img src="https://www.tatacliq.com/src/general/components/img/WL1.svg" className='image-overlay' alt="" /> */}
                            </div>

                            <div className="product-info">
                                <h3 style={{ marginBottom: "1%" }}>Levi's</h3>
                                <p style={{ marginBottom: "1%", color: "#4a4a4a" }}>Levi's 512 Mid Indigo Slim Fit Jeans</p>
                                <p>Rs. <span><b>1855</b></span> <span style={{ textDecoration: "line-through", color: "#979797", fontSize: "12px" }}>Rs.3199</span></p>
                                <div className="product-rating-div">
                                    <p className='rating-div'>4.3 <span style={{ color: "green" }}>&#9733;</span></p>
                                    <p>&nbsp;&nbsp;(6)</p>
                                </div>
                                <p className='limited-stock'>Limited Stock!</p>
                            </div>
                        </div>

                        <div className="mens-single-product">
                            <div className="mens-product-image">
                                <img src="https://img.tatacliq.com/images/i8/437Wx649H/MP000000015247442_437Wx649H_202211110452311.jpeg" className='mens-product-img' alt="" />
                                <div className='image-overlay'>
                                    <img src="https://www.tatacliq.com/src/general/components/img/WL1.svg" className='image-overlay' alt="" />
                                </div>

                                <div className='image-overlay-for-same-product'>
                                    <img src="https://www.tatacliq.com/src/general/components/img/similarIconNew.svg" className='image-overlay' alt="" />
                                </div>
                                {/* <img src="https://www.tatacliq.com/src/general/components/img/WL1.svg" className='image-overlay' alt="" /> */}
                            </div>

                            <div className="product-info">
                                <h3 style={{ marginBottom: "1%" }}>Jack & Jones</h3>
                                <p style={{ marginBottom: "1%", color: "#4a4a4a" }}>Jack & Jones Navy Blue Cotton Slim Fit Polo T-Shirt</p>
                                <p>Rs. <span><b>764</b></span> <span style={{ textDecoration: "line-through", color: "#979797", fontSize: "12px" }}>Rs.1699</span></p>
                                <div className="product-rating-div">
                                    <p className='rating-div'>4.6 <span style={{ color: "green" }}>&#9733;</span></p>
                                    <p>&nbsp;&nbsp;(15)</p>
                                </div>
                            </div>
                        </div>

                        <div className="mens-single-product">
                            <div className="mens-product-image">
                                <img src="https://img.tatacliq.com/images/i8/437Wx649H/MP000000012737398_437Wx649H_202204070145121.jpeg" className='mens-product-img' alt="" />
                                <div className='image-overlay'>
                                    <img src="https://www.tatacliq.com/src/general/components/img/WL1.svg" className='image-overlay' alt="" />
                                </div>

                                <div className='image-overlay-for-same-product'>
                                    <img src="https://www.tatacliq.com/src/general/components/img/similarIconNew.svg" className='image-overlay' alt="" />
                                </div>
                                {/* <img src="https://www.tatacliq.com/src/general/components/img/WL1.svg" className='image-overlay' alt="" /> */}
                            </div>

                            <div className="product-info">
                                <h3 style={{ marginBottom: "1%" }}>Levi's</h3>
                                <p style={{ marginBottom: "1%", color: "#4a4a4a" }}>Levi's Green Regular Fit Polo T-Shirt</p>
                                <p>Rs. <span><b>1402</b></span> <span style={{ textDecoration: "line-through", color: "#979797", fontSize: "12px" }}>Rs.2599</span></p>
                                <div className="product-rating-div">
                                    <p className='rating-div'>4.7 <span style={{ color: "green" }}>&#9733;</span></p>
                                    <p>&nbsp;&nbsp;(3)</p>
                                </div>
                            </div>
                        </div>

                        <div className="mens-single-product">
                            <div className="mens-product-image">
                                <img src="https://img.tatacliq.com/images/i10/437Wx649H/MP000000016710567_437Wx649H_202303020148201.jpeg" className='mens-product-img' alt="" />
                                <div className='image-overlay'>
                                    <img src="https://www.tatacliq.com/src/general/components/img/WL1.svg" className='image-overlay' alt="" />
                                </div>

                                <div className='image-overlay-for-same-product'>
                                    <img src="https://www.tatacliq.com/src/general/components/img/similarIconNew.svg" className='image-overlay' alt="" />
                                </div>
                                {/* <img src="https://www.tatacliq.com/src/general/components/img/WL1.svg" className='image-overlay' alt="" /> */}
                            </div>

                            <div className="product-info">
                                <h3 style={{ marginBottom: "1%" }}>Jack & Jones</h3>
                                <p style={{ marginBottom: "1%", color: "#4a4a4a" }}>Jack & Jones Jet Black Slim Fit Shirt</p>
                                <p>Rs. <span><b>1499</b></span> <span style={{ textDecoration: "line-through", color: "#979797", fontSize: "12px" }}>Rs.2999</span></p>
                                <div className="product-rating-div">
                                    <p className='rating-div'>4.4 <span style={{ color: "green" }}>&#9733;</span></p>
                                    <p>&nbsp;&nbsp;(8)</p>
                                </div>
                            </div>
                        </div>

                        <div className="mens-single-product">
                            <div className="mens-product-image">
                                <img src="https://img.tatacliq.com/images/i9/437Wx649H/MP000000016362070_437Wx649H_202302040017141.jpeg" className='mens-product-img' alt="" />
                                <div className='image-overlay'>
                                    <img src="https://www.tatacliq.com/src/general/components/img/WL1.svg" className='image-overlay' alt="" />
                                </div>

                                <div className='image-overlay-for-same-product'>
                                    <img src="https://www.tatacliq.com/src/general/components/img/similarIconNew.svg" className='image-overlay' alt="" />
                                </div>
                                {/* <img src="https://www.tatacliq.com/src/general/components/img/WL1.svg" className='image-overlay' alt="" /> */}
                            </div>

                            <div className="product-info">
                                <h3 style={{ marginBottom: "1%" }}>Red Tape</h3>
                                <p style={{ marginBottom: "1%", color: "#4a4a4a" }}>Red Tape White Regular Fit Graphic Print Cotton Crew T-Shirt</p>
                                <p>Rs. <span><b>417</b></span> <span style={{ textDecoration: "line-through", color: "#979797", fontSize: "12px" }}>Rs.1899</span></p>
                                <div className="product-rating-div">
                                    <p className='rating-div'>4.5 <span style={{ color: "green" }}>&#9733;</span></p>
                                    <p>&nbsp;&nbsp;(15)</p>
                                </div>
                            </div>
                        </div>

                        <div className="mens-single-product">
                            <div className="mens-product-image">
                                <img src="https://img.tatacliq.com/images/i9/437Wx649H/MP000000016179430_437Wx649H_202301221935461.jpeg" className='mens-product-img' alt="" />
                                <div className='image-overlay'>
                                    <img src="https://www.tatacliq.com/src/general/components/img/WL1.svg" className='image-overlay' alt="" />
                                </div>

                                <div className='image-overlay-for-same-product'>
                                    <img src="https://www.tatacliq.com/src/general/components/img/similarIconNew.svg" className='image-overlay' alt="" />
                                </div>
                                {/* <img src="https://www.tatacliq.com/src/general/components/img/WL1.svg" className='image-overlay' alt="" /> */}
                            </div>

                            <div className="product-info">
                                <h3 style={{ marginBottom: "1%" }}>U.S. Polo Assn.</h3>
                                <p style={{ marginBottom: "1%", color: "#4a4a4a" }}>U.S. Polo Assn. Orange Cotton Regular Fit Striped Shirt</p>
                                <p>Rs. <span><b>1319</b></span> <span style={{ textDecoration: "line-through", color: "#979797", fontSize: "12px" }}>Rs.2399</span></p>

                            </div>
                        </div>

                        <div className="mens-single-product">
                            <div className="mens-product-image">
                                <img src="https://img.tatacliq.com/images/i10/437Wx649H/MP000000017210419_437Wx649H_202304141358201.jpeg" className='mens-product-img' alt="" />
                                <div className='image-overlay'>
                                    <img src="https://www.tatacliq.com/src/general/components/img/WL1.svg" className='image-overlay' alt="" />
                                </div>

                                <div className='image-overlay-for-same-product'>
                                    <img src="https://www.tatacliq.com/src/general/components/img/similarIconNew.svg" className='image-overlay' alt="" />
                                </div>
                                {/* <img src="https://www.tatacliq.com/src/general/components/img/WL1.svg" className='image-overlay' alt="" /> */}
                            </div>

                            <div className="product-info">
                                <h3 style={{ marginBottom: "1%" }}>WES Casuals</h3>
                                <p style={{ marginBottom: "1%", color: "#4a4a4a" }}>WES Casuals by Westside Wine Slim-Fit Polo T-Shirt</p>
                                <p>Rs. <span><b>499</b></span></p>
                                <div className="product-rating-div">
                                    <p className='rating-div'>4.3 <span style={{ color: "green" }}>&#9733;</span></p>
                                    <p>&nbsp;&nbsp;(18)</p>
                                </div>
                            </div>
                        </div>

                        <div className="mens-single-product">
                            <div className="mens-product-image">
                                <img src="https://img.tatacliq.com/images/i11/437Wx649H/MP000000017261620_437Wx649H_202305161201101.jpeg" className='mens-product-img' alt="" />
                                <div className='image-overlay'>
                                    <img src="https://www.tatacliq.com/src/general/components/img/WL1.svg" className='image-overlay' alt="" />
                                </div>

                                <div className='image-overlay-for-same-product'>
                                    <img src="https://www.tatacliq.com/src/general/components/img/similarIconNew.svg" className='image-overlay' alt="" />
                                </div>
                                {/* <img src="https://www.tatacliq.com/src/general/components/img/WL1.svg" className='image-overlay' alt="" /> */}
                            </div>

                            <div className="product-info">
                                <h3 style={{ marginBottom: "1%" }}>Red Tape</h3>
                                <p style={{ marginBottom: "1%", color: "#4a4a4a" }}>Red Tape Black Cotton Regular Fit Printed T-Shirt</p>
                                <p>Rs. <span><b>373</b></span> <span style={{ textDecoration: "line-through", color: "#979797", fontSize: "12px" }}>Rs.1599</span></p>
                                <div className="product-rating-div">
                                    <p className='rating-div'>4.0 <span style={{ color: "green" }}>&#9733;</span></p>
                                    <p>&nbsp;&nbsp;(19)</p>
                                </div>
                                <p className='limited-stock'>Limited Stock!</p>
                            </div>
                        </div>

                        <div className="mens-single-product">
                            <div className="mens-product-image">
                                <img src="https://img.tatacliq.com/images/i9/437Wx649H/MP000000016361149_437Wx649H_202302032327011.jpeg" className='mens-product-img' alt="" />
                                <div className='image-overlay'>
                                    <img src="https://www.tatacliq.com/src/general/components/img/WL1.svg" className='image-overlay' alt="" />
                                </div>

                                <div className='image-overlay-for-same-product'>
                                    <img src="https://www.tatacliq.com/src/general/components/img/similarIconNew.svg" className='image-overlay' alt="" />
                                </div>
                                {/* <img src="https://www.tatacliq.com/src/general/components/img/WL1.svg" className='image-overlay' alt="" /> */}
                            </div>

                            <div className="product-info">
                                <h3 style={{ marginBottom: "1%" }}>Red Tape</h3>
                                <p style={{ marginBottom: "1%", color: "#4a4a4a" }}>Red Tape Brown Regular Fit Cotton Shirt</p>
                                <p>Rs. <span><b>813</b></span> <span style={{ textDecoration: "line-through", color: "#979797", fontSize: "12px" }}>Rs.3619</span></p>
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

export default MensWearComponent;