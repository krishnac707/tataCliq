import './Gadget.css';
import { Link } from 'react-router-dom';


const Gadget = () => {
    return (
        <div className='mensWearBody'>
            <h1 className='mens-heading-css'>Electronics Head Phones</h1>
            <p className='mens-wear-para-css'>810 Products</p>
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
                        <p className='mens-clothing-css'>Electronis</p>

                        <div className="line-div"></div>

                        <p className="department-css">Category</p>
                        <p className='mens-clothing-css'>Headphones <span style={{ fontWeight: 600 }}>X</span></p>

                        <div className="line-div"></div>

                        <div className="product-type-css">
                            <p className="product-heading-css">Product Type</p>
                            <p className='product-dash-css'>&#8212;</p>
                        </div>

                        <div className="cloth-type-css">
                            <input type="radio" name="" className='radio-css' id="" />
                            <p className='tshirt-name'>Earphone</p>
                            <p className='tshirt-qty'>610</p>
                        </div>

                        <div className="cloth-type-css">
                            <input type="radio" name="" className='radio-css' id="" />
                            <p className='tshirt-name'>Headphone</p>
                            <p className='tshirt-qty'>150</p>
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
                                <img src="https://img.tatacliq.com/images/i7/437Wx649H/MP000000010437583_437Wx649H_202108271528281.jpeg" className='mens-product-img' alt="" />
                                <div className='image-overlay'>
                                    <img src="https://www.tatacliq.com/src/general/components/img/WL1.svg" className='image-overlay' alt="" />
                                </div>

                                <div className='image-overlay-for-same-product'>
                                    <img src="https://www.tatacliq.com/src/general/components/img/similarIconNew.svg" className='image-overlay' alt="" />
                                </div>
                            </div>

                            <div className="product-info">
                                <h3 style={{ marginBottom: "1%" }}>Samsung</h3>
                                <p style={{ marginBottom: "1%", color: "#4a4a4a" }}>Samsung Galaxy Buds 2 True Wireless In-Ear Earbuds with Active Noise Cancellation, Mic (Graphite)</p>
                                <p>Rs. <span><b>5359</b></span> <span style={{ textDecoration: "line-through", color: "#979797", fontSize: "12px" }}>Rs.13990</span></p>
                                <div className="product-rating-div">
                                    <p className='rating-div'>4.8 <span style={{ color: "green" }}>&#9733;</span></p>
                                    <p>&nbsp;&nbsp;(18)</p>
                                </div>
                            </div>
                        </div>

                        <div className="mens-single-product">
                            <div className="mens-product-image">
                                <Link to="/mens-shirt-detail">
                                    <img src="https://img.tatacliq.com/images/i9/437Wx649H/MP000000015706506_437Wx649H_202212151054141.jpeg" className='mens-product-img' alt="" />
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
                                <h3 style={{ marginBottom: "1%" }}>PTron</h3>
                                <p style={{ marginBottom: "1%", color: "#4a4a4a" }}>PTron Boom Ultima V2 In-Ear Gaming Wired Earphones with Mic, 3.5 mm Audio Jack (Black)</p>
                                <p>Rs. <span><b>399</b></span></p>
                                
                                {/* <p className='limited-stock'>Limited Stock!</p> */}
                            </div>
                        </div>

                        <div className="mens-single-product">

                            <div className="mens-product-image">
                                <img src="https://img.tatacliq.com/images/i9/437Wx649H/MP000000016239579_437Wx649H_202302071202391.jpeg" className='mens-product-img' alt="" />
                                <div className='image-overlay'>
                                    <img src="https://www.tatacliq.com/src/general/components/img/WL1.svg" className='image-overlay' alt="" />
                                </div>

                                <div className='image-overlay-for-same-product'>
                                    <img src="https://www.tatacliq.com/src/general/components/img/similarIconNew.svg" className='image-overlay' alt="" />
                                </div>
                                {/* <img src="https://www.tatacliq.com/src/general/components/img/WL1.svg" className='image-overlay' alt="" /> */}
                            </div>

                            <div className="product-info">
                                <h3 style={{ marginBottom: "1%" }}>OnePlus</h3>
                                <p style={{ marginBottom: "1%", color: "#4a4a4a" }}>OnePlus Buds Z2 Bluetooth Truly Wireless in Ear Earbuds with mic (Obsidian Black)</p>
                                <p>Rs. <span><b>4499</b></span> <span style={{ textDecoration: "line-through", color: "#979797", fontSize: "12px" }}>Rs.5999</span></p>
                                <div className="product-rating-div">
                                    <p className='rating-div'>4.8 <span style={{ color: "green" }}>&#9733;</span></p>
                                    <p>&nbsp;&nbsp;(18)</p>
                                </div>
                            </div>
                        </div>

                        <div className="mens-single-product">
                            <div className="mens-product-image">
                                <img src="https://img.tatacliq.com/images/i12/437Wx649H/MP000000018168860_437Wx649H_202306300453061.jpeg" className='mens-product-img' alt="" />
                                <div className='image-overlay'>
                                    <img src="https://www.tatacliq.com/src/general/components/img/WL1.svg" className='image-overlay' alt="" />
                                </div>

                                <div className='image-overlay-for-same-product'>
                                    <img src="https://www.tatacliq.com/src/general/components/img/similarIconNew.svg" className='image-overlay' alt="" />
                                </div>
                                {/* <img src="https://www.tatacliq.com/src/general/components/img/WL1.svg" className='image-overlay' alt="" /> */}
                            </div>

                            <div className="product-info">
                                <h3 style={{ marginBottom: "1%" }}>Boat</h3>
                                <p style={{ marginBottom: "1%", color: "#4a4a4a" }}>Boat Nirvana Ion Earbuds with Dual EQ Modes, Quad Mics ENx Technology (Ivory White, True Wireless)</p>
                                <p>Rs. <span><b>2299</b></span> <span style={{ textDecoration: "line-through", color: "#979797", fontSize: "12px" }}>Rs.7990</span></p>
                                
                            </div>
                        </div>

                        <div className="mens-single-product">
                            <div className="mens-product-image">
                                <img src="https://img.tatacliq.com/images/i4/437Wx649H/MP000000004870365_437Wx649H_20190608021630.jpeg" className='mens-product-img' alt="" />
                                <div className='image-overlay'>
                                    <img src="https://www.tatacliq.com/src/general/components/img/WL1.svg" className='image-overlay' alt="" />
                                </div>

                                <div className='image-overlay-for-same-product'>
                                    <img src="https://www.tatacliq.com/src/general/components/img/similarIconNew.svg" className='image-overlay' alt="" />
                                </div>
                                {/* <img src="https://www.tatacliq.com/src/general/components/img/WL1.svg" className='image-overlay' alt="" /> */}
                            </div>

                            <div className="product-info">
                                <h3 style={{ marginBottom: "1%" }}>Apple</h3>
                                <p style={{ marginBottom: "1%", color: "#4a4a4a" }}>Apple AirPods (2nd gen) with Charging Case Bluetooth Headset with Mic  (White, True Wireless)</p>
                                <p>Rs. <span><b>10999</b></span> <span style={{ textDecoration: "line-through", color: "#979797", fontSize: "12px" }}>Rs.14900</span></p>
                                <div className="product-rating-div">
                                    <p className='rating-div'>4.6 <span style={{ color: "green" }}>&#9733;</span></p>
                                    <p>&nbsp;&nbsp;(15)</p>
                                </div>
                            </div>
                        </div>

                        <div className="mens-single-product">
                            <div className="mens-product-image">
                                <img src="https://img.tatacliq.com/images/i10/437Wx649H/MP000000017346210_437Wx649H_202304251122151.jpeg" className='mens-product-img' alt="" />
                                <div className='image-overlay'>
                                    <img src="https://www.tatacliq.com/src/general/components/img/WL1.svg" className='image-overlay' alt="" />
                                </div>

                                <div className='image-overlay-for-same-product'>
                                    <img src="https://www.tatacliq.com/src/general/components/img/similarIconNew.svg" className='image-overlay' alt="" />
                                </div>
                                {/* <img src="https://www.tatacliq.com/src/general/components/img/WL1.svg" className='image-overlay' alt="" /> */}
                            </div>

                            <div className="product-info">
                                <h3 style={{ marginBottom: "1%" }}>Sony</h3>
                                <p style={{ marginBottom: "1%", color: "#4a4a4a" }}>Sony WH-CH720N, Wireless Active Noise Cancellation Headphones With Mic, Upto 50 Hrs Playtime (Blue)</p>
                                <p>Rs. <span><b>8988</b></span> <span style={{ textDecoration: "line-through", color: "#979797", fontSize: "12px" }}>Rs.14999</span></p>
                                <div className="product-rating-div">
                                    <p className='rating-div'>3.3 <span style={{ color: "green" }}>&#9733;</span></p>
                                    <p>&nbsp;&nbsp;(3)</p>
                                </div>
                            </div>
                        </div>

                        <div className="mens-single-product">
                            <div className="mens-product-image">
                                <img src="https://img.tatacliq.com/images/i11/437Wx649H/MP000000017922803_437Wx649H_202306131414311.jpeg" className='mens-product-img' alt="" />
                                <div className='image-overlay'>
                                    <img src="https://www.tatacliq.com/src/general/components/img/WL1.svg" className='image-overlay' alt="" />
                                </div>

                                <div className='image-overlay-for-same-product'>
                                    <img src="https://www.tatacliq.com/src/general/components/img/similarIconNew.svg" className='image-overlay' alt="" />
                                </div>
                                {/* <img src="https://www.tatacliq.com/src/general/components/img/WL1.svg" className='image-overlay' alt="" /> */}
                            </div>

                            <div className="product-info">
                                <h3 style={{ marginBottom: "1%" }}>Mivi</h3>
                                <p style={{ marginBottom: "1%", color: "#4a4a4a" }}>Mivi DuoPods A350 True Wireless in Ear Earbuds Fast Charging with Mic & 50hrs Playtime (Grey)</p>
                                <p>Rs. <span><b>1299</b></span> <span style={{ textDecoration: "line-through", color: "#979797", fontSize: "12px" }}>Rs.2999</span></p>
                                
                            </div>
                        </div>

                        <div className="mens-single-product">
                            <div className="mens-product-image">
                                <img src="https://img.tatacliq.com/images/i11/437Wx649H/MP000000000715985_437Wx649H_202306091508181.jpeg" className='mens-product-img' alt="" />
                                <div className='image-overlay'>
                                    <img src="https://www.tatacliq.com/src/general/components/img/WL1.svg" className='image-overlay' alt="" />
                                </div>

                                <div className='image-overlay-for-same-product'>
                                    <img src="https://www.tatacliq.com/src/general/components/img/similarIconNew.svg" className='image-overlay' alt="" />
                                </div>
                                {/* <img src="https://www.tatacliq.com/src/general/components/img/WL1.svg" className='image-overlay' alt="" /> */}
                            </div>

                            <div className="product-info">
                                <h3 style={{ marginBottom: "1%" }}>Apple</h3>
                                <p style={{ marginBottom: "1%", color: "#4a4a4a" }}>Apple EarPods with Lightning Connector Earphone (MMTN2ZM/A, White)</p>
                                <p>Rs. <span><b>1699</b></span> <span style={{ textDecoration: "line-through", color: "#979797", fontSize: "12px" }}>Rs.1899</span></p>
                                <div className="product-rating-div">
                                    <p className='rating-div'>4.5 <span style={{ color: "green" }}>&#9733;</span></p>
                                    <p>&nbsp;&nbsp;(15)</p>
                                </div>
                            </div>
                        </div>

                        <div className="mens-single-product">
                            <div className="mens-product-image">
                                <img src="https://img.tatacliq.com/images/i9/437Wx649H/MP000000016239613_437Wx649H_202302071201171.jpeg" className='mens-product-img' alt="" />
                                <div className='image-overlay'>
                                    <img src="https://www.tatacliq.com/src/general/components/img/WL1.svg" className='image-overlay' alt="" />
                                </div>

                                <div className='image-overlay-for-same-product'>
                                    <img src="https://www.tatacliq.com/src/general/components/img/similarIconNew.svg" className='image-overlay' alt="" />
                                </div>
                                {/* <img src="https://www.tatacliq.com/src/general/components/img/WL1.svg" className='image-overlay' alt="" /> */}
                            </div>

                            <div className="product-info">
                                <h3 style={{ marginBottom: "1%" }}>Boat</h3>
                                <p style={{ marginBottom: "1%", color: "#4a4a4a" }}>Boat Airdopes 138 Pro True Wireless Earbuds with Up to 45 Hours Playback (Black)</p>
                                <p>Rs. <span><b>1099</b></span> <span style={{ textDecoration: "line-through", color: "#979797", fontSize: "12px" }}>Rs.2399</span></p>

                            </div>
                        </div>

                        <div className="mens-single-product">
                            <div className="mens-product-image">
                                <img src="https://img.tatacliq.com/images/i8/437Wx649H/MP000000011975996_437Wx649H_202202091435431.jpeg" className='mens-product-img' alt="" />
                                <div className='image-overlay'>
                                    <img src="https://www.tatacliq.com/src/general/components/img/WL1.svg" className='image-overlay' alt="" />
                                </div>

                                <div className='image-overlay-for-same-product'>
                                    <img src="https://www.tatacliq.com/src/general/components/img/similarIconNew.svg" className='image-overlay' alt="" />
                                </div>
                                {/* <img src="https://www.tatacliq.com/src/general/components/img/WL1.svg" className='image-overlay' alt="" /> */}
                            </div>

                            <div className="product-info">
                                <h3 style={{ marginBottom: "1%" }}>Boat</h3>
                                <p style={{ marginBottom: "1%", color: "#4a4a4a" }}>boAt Nirvanaa 751ANC T Headset with Hybrid Active Noise Cancellation & 65H Playback (Gunmetal Grey)</p>
                                <p>Rs. <span><b>4499</b></span></p>
                                <div className="product-rating-div">
                                    <p className='rating-div'>4.3 <span style={{ color: "green" }}>&#9733;</span></p>
                                    <p>&nbsp;&nbsp;(18)</p>
                                </div>
                            </div>
                        </div>

                        <div className="mens-single-product">
                            <div className="mens-product-image">
                                <img src="https://img.tatacliq.com/images/i7/437Wx649H/MP000000010358027_437Wx649H_202108201937421.jpeg" className='mens-product-img' alt="" />
                                <div className='image-overlay'>
                                    <img src="https://www.tatacliq.com/src/general/components/img/WL1.svg" className='image-overlay' alt="" />
                                </div>

                                <div className='image-overlay-for-same-product'>
                                    <img src="https://www.tatacliq.com/src/general/components/img/similarIconNew.svg" className='image-overlay' alt="" />
                                </div>
                                {/* <img src="https://www.tatacliq.com/src/general/components/img/WL1.svg" className='image-overlay' alt="" /> */}
                            </div>

                            <div className="product-info">
                                <h3 style={{ marginBottom: "1%" }}>Realme</h3>
                                <p style={{ marginBottom: "1%", color: "#4a4a4a" }}>realme Buds Pro RMA208 Neckband with Mic (Party Yellow)</p>
                                <p>Rs. <span><b>2689</b></span> <span style={{ textDecoration: "line-through", color: "#979797", fontSize: "12px" }}>Rs.5999</span></p>
                                <div className="product-rating-div">
                                    <p className='rating-div'>2.8 <span style={{ color: "green" }}>&#9733;</span></p>
                                    <p>&nbsp;&nbsp;(5)</p>
                                </div>
                            </div>
                        </div>

                        <div className="mens-single-product">
                            <div className="mens-product-image">
                                <img src="https://img.tatacliq.com/images/i10/437Wx649H/MP000000016239568_437Wx649H_202303031237581.jpeg" className='mens-product-img' alt="" />
                                <div className='image-overlay'>
                                    <img src="https://www.tatacliq.com/src/general/components/img/WL1.svg" className='image-overlay' alt="" />
                                </div>

                                <div className='image-overlay-for-same-product'>
                                    <img src="https://www.tatacliq.com/src/general/components/img/similarIconNew.svg" className='image-overlay' alt="" />
                                </div>
                                {/* <img src="https://www.tatacliq.com/src/general/components/img/WL1.svg" className='image-overlay' alt="" /> */}
                            </div>

                            <div className="product-info">
                                <h3 style={{ marginBottom: "1%" }}>Oneplus</h3>
                                <p style={{ marginBottom: "1%", color: "#4a4a4a" }}>OnePlus Buds Z2 Bluetooth Truly Wireless in Ear Earbuds with mic (Pearl White)</p>
                                <p>Rs. <span><b>4499</b></span> <span style={{ textDecoration: "line-through", color: "#979797", fontSize: "12px" }}>Rs.3619</span></p>
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

export default Gadget;