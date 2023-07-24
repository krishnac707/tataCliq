import './AccessoriesComponent.css';
import { Link } from 'react-router-dom';


const AccessoriesComponent = () => {
    return (
        <div className='mensWearBody'>
            <h1 className='mens-heading-css'>Wearable Devices</h1>
            <p className='mens-wear-para-css'>420 Products</p>
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
                        <p className='mens-clothing-css'>Watches</p>

                        <div className="line-div"></div>

                        <div className="product-type-css">
                            <p className="product-heading-css">Product Type</p>
                            <p className='product-dash-css'>&#8212;</p>
                        </div>

                        <div className="cloth-type-css">
                            <input type="radio" name="" className='radio-css' id="" />
                            <p className='tshirt-name'>Fitness Tracker</p>
                            <p className='tshirt-qty'>446</p>
                        </div>

                        <div className="cloth-type-css">
                            <input type="radio" name="" className='radio-css' id="" />
                            <p className='tshirt-name'>Smart Watch</p>
                            <p className='tshirt-qty'>4</p>
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
                                <img src="https://img.tatacliq.com/images/i7/437Wx649H/MP000000010090459_437Wx649H_202107280743201.jpeg" className='mens-product-img' alt="" />
                                <div className='image-overlay'>
                                    <img src="https://www.tatacliq.com/src/general/components/img/WL1.svg" className='image-overlay' alt="" />
                                </div>

                                <div className='image-overlay-for-same-product'>
                                    <img src="https://www.tatacliq.com/src/general/components/img/similarIconNew.svg" className='image-overlay' alt="" />
                                </div>
                            </div>

                            <div className="product-info">
                                <h3 style={{ marginBottom: "1%" }}>realme</h3>
                                <p style={{ marginBottom: "1%", color: "#4a4a4a" }}>realme Watch 2 Pro (Space Grey)</p>
                                <p>Rs. <span><b>4870</b></span></p>
                                
                            </div>
                        </div>

                        <div className="mens-single-product">
                            <div className="mens-product-image">
                                <Link to="/mens-shirt-detail">
                                    <img src="https://img.tatacliq.com/images/i7/437Wx649H/MP000000010977222_437Wx649H_202110211435591.jpeg" className='mens-product-img' alt="" />
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
                                <h3 style={{ marginBottom: "1%" }}>Samsung</h3>
                                <p style={{ marginBottom: "1%", color: "#4a4a4a" }}>Samsung Galaxy Watch4 SM-R870NZGAINU 44mm Smartwatch (Green)</p>
                                <p>Rs. <span><b>12999</b></span></p>
                                
                            </div>
                        </div>

                        <div className="mens-single-product">

                            <div className="mens-product-image">
                                <img src="https://img.tatacliq.com/images/i9/437Wx649H/MP000000016292274_437Wx649H_202301311418001.jpeg" className='mens-product-img' alt="" />
                                <div className='image-overlay'>
                                    <img src="https://www.tatacliq.com/src/general/components/img/WL1.svg" className='image-overlay' alt="" />
                                </div>

                                <div className='image-overlay-for-same-product'>
                                    <img src="https://www.tatacliq.com/src/general/components/img/similarIconNew.svg" className='image-overlay' alt="" />
                                </div>
                                {/* <img src="https://www.tatacliq.com/src/general/components/img/WL1.svg" className='image-overlay' alt="" /> */}
                            </div>

                            <div className="product-info">
                                <h3 style={{ marginBottom: "1%" }}>Pebble</h3>
                                <p style={{ marginBottom: "1%", color: "#4a4a4a" }}>Pebble Prism Ultra Smartwatch with Call Function - Black</p>
                                <p>Rs. <span><b>2999</b></span></p>
                            </div>
                        </div>

                        <div className="mens-single-product">
                            <div className="mens-product-image">
                                <img src="https://img.tatacliq.com/images/i9/437Wx649H/MP000000016342673_437Wx649H_202302021408491.jpeg" className='mens-product-img' alt="" />
                                <div className='image-overlay'>
                                    <img src="https://www.tatacliq.com/src/general/components/img/WL1.svg" className='image-overlay' alt="" />
                                </div>

                                <div className='image-overlay-for-same-product'>
                                    <img src="https://www.tatacliq.com/src/general/components/img/similarIconNew.svg" className='image-overlay' alt="" />
                                </div>
                                {/* <img src="https://www.tatacliq.com/src/general/components/img/WL1.svg" className='image-overlay' alt="" /> */}
                            </div>

                            <div className="product-info">
                                <h3 style={{ marginBottom: "1%" }}>Pebble</h3>
                                <p style={{ marginBottom: "1%", color: "#4a4a4a" }}>Pebble Orion Max 1.91 inch High Resolution Display with Bluetooth Calling Smartwatch - White Gold</p>
                                <p>Rs. <span><b>3999</b></span></p>
                                
                            </div>
                        </div>

                        <div className="mens-single-product">
                            <div className="mens-product-image">
                                <img src="https://img.tatacliq.com/images/i11/437Wx649H/MP000000015009027_437Wx649H_202306012130541.jpeg" className='mens-product-img' alt="" />
                                <div className='image-overlay'>
                                    <img src="https://www.tatacliq.com/src/general/components/img/WL1.svg" className='image-overlay' alt="" />
                                </div>

                                <div className='image-overlay-for-same-product'>
                                    <img src="https://www.tatacliq.com/src/general/components/img/similarIconNew.svg" className='image-overlay' alt="" />
                                </div>
                                {/* <img src="https://www.tatacliq.com/src/general/components/img/WL1.svg" className='image-overlay' alt="" /> */}
                            </div>

                            <div className="product-info">
                                <h3 style={{ marginBottom: "1%" }}>Fitbit</h3>
                                <p style={{ marginBottom: "1%", color: "#4a4a4a" }}>Fitbit Versa 4 Fitness Watch (Black / Graphite Aluminium)</p>
                                <p>Rs. <span><b>18999</b></span> </p>
                                
                            </div>
                        </div>

                        <div className="mens-single-product">
                            <div className="mens-product-image">
                                <img src="https://img.tatacliq.com/images/i11/437Wx649H/MP000000017581708_437Wx649H_202306082132181.jpeg" className='mens-product-img' alt="" />
                                <div className='image-overlay'>
                                    <img src="https://www.tatacliq.com/src/general/components/img/WL1.svg" className='image-overlay' alt="" />
                                </div>

                                <div className='image-overlay-for-same-product'>
                                    <img src="https://www.tatacliq.com/src/general/components/img/similarIconNew.svg" className='image-overlay' alt="" />
                                </div>
                                {/* <img src="https://www.tatacliq.com/src/general/components/img/WL1.svg" className='image-overlay' alt="" /> */}
                            </div>

                            <div className="product-info">
                                <h3 style={{ marginBottom: "1%" }}>Garmin</h3>
                                <p style={{ marginBottom: "1%", color: "#4a4a4a" }}>Garmin Approach S12 GPS Golf Smartwatch, Battery up to 10 Weeks (Black Band)</p>
                                <p>Rs. <span><b>22490</b></span></p>
                                
                            </div>
                        </div>

                        <div className="mens-single-product">
                            <div className="mens-product-image">
                                <img src="https://img.tatacliq.com/images/i8/437Wx649H/MP000000015535250_437Wx649H_202212020703111.jpeg" className='mens-product-img' alt="" />
                                <div className='image-overlay'>
                                    <img src="https://www.tatacliq.com/src/general/components/img/WL1.svg" className='image-overlay' alt="" />
                                </div>

                                <div className='image-overlay-for-same-product'>
                                    <img src="https://www.tatacliq.com/src/general/components/img/similarIconNew.svg" className='image-overlay' alt="" />
                                </div>
                                {/* <img src="https://www.tatacliq.com/src/general/components/img/WL1.svg" className='image-overlay' alt="" /> */}
                            </div>

                            <div className="product-info">
                                <h3 style={{ marginBottom: "1%" }}>Samsung</h3>
                                <p style={{ marginBottom: "1%", color: "#4a4a4a" }}>Samsung Galaxy Watch 4 LTE Smartwatch (Compatible with Android only) (4.4 cm, Black)</p>
                                <p>Rs. <span><b>14599</b></span></p>
                                
                            </div>
                        </div>

                        <div className="mens-single-product">
                            <div className="mens-product-image">
                                <img src="https://img.tatacliq.com/images/i11/437Wx649H/MP000000015131574_437Wx649H_202306010709431.jpeg" className='mens-product-img' alt="" />
                                <div className='image-overlay'>
                                    <img src="https://www.tatacliq.com/src/general/components/img/WL1.svg" className='image-overlay' alt="" />
                                </div>

                                <div className='image-overlay-for-same-product'>
                                    <img src="https://www.tatacliq.com/src/general/components/img/similarIconNew.svg" className='image-overlay' alt="" />
                                </div>
                                {/* <img src="https://www.tatacliq.com/src/general/components/img/WL1.svg" className='image-overlay' alt="" /> */}
                            </div>

                            <div className="product-info">
                                <h3 style={{ marginBottom: "1%" }}>Fastrack</h3>
                                <p style={{ marginBottom: "1%", color: "#4a4a4a" }}>Fastrack Reflex Hello BT Calling Smart Watch (Black)</p>
                                <p>Rs. <span><b>2995</b></span> </p>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default AccessoriesComponent;