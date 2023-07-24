import './KidsComponent.css';
import { Link } from 'react-router-dom';

const KidsComponent = () => {
    return (
        <div className='mensWearBody'>
            <h1 className='mens-heading-css'>Kids</h1>
            <p className='mens-wear-para-css'>64991 Products</p>
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
                        <p className='mens-clothing-css'>Kids</p>

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
                            <p className='tshirt-name'>Boys Clothing</p>
                            <p className='tshirt-qty'>27980</p>
                        </div>

                        <div className="cloth-type-css">
                            <input type="radio" name="" className='radio-css' id="" />
                            <p className='tshirt-name'>Girls Clothing</p>
                            <p className='tshirt-qty'>30604</p>
                        </div>

                        <div className="cloth-type-css">
                            <input type="radio" name="" className='radio-css' id="" />
                            <p className='tshirt-name'>Infants</p>
                            <p className='tshirt-qty'>5702</p>
                        </div>

                        <div className="cloth-type-css">
                            <input type="radio" name="" className='radio-css' id="" />
                            <p className='tshirt-name'>Accessories</p>
                            <p className='tshirt-qty'>703</p>
                        </div>

                        <div className="cloth-type-css1">
                            <input type="radio" name="" className='radio-css' id="" />
                            <p className='tshirt-name'>Kids Toys</p>
                            <p className='tshirt-qty'>102</p>
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
                                <img src="https://img.tatacliq.com/images/i10/437Wx649H/MP000000017293095_437Wx649H_202304201606061.jpeg" className='mens-product-img' alt="" />
                                <div className='image-overlay'>
                                    <img src="https://www.tatacliq.com/src/general/components/img/WL1.svg" className='image-overlay' alt="" />
                                </div>

                                <div className='image-overlay-for-same-product'>
                                    <img src="https://www.tatacliq.com/src/general/components/img/similarIconNew.svg" className='image-overlay' alt="" />
                                </div>
                            </div>

                            <div className="product-info">
                                <h3 style={{ marginBottom: "1%" }}>Pantaloons Junior</h3>
                                <p style={{ marginBottom: "1%", color: "#4a4a4a" }}>Pantaloons Junior Blue Floral Print Dress</p>
                                <p>Rs. <span><b>600</b></span> <span style={{ textDecoration: "line-through", color: "#979797", fontSize: "12px" }}>Rs.1199</span></p>
                                <p className='limited-stock'>Limited Stock!</p>
                            </div>
                        </div>

                        <div className="mens-single-product">
                            <div className="mens-product-image">
                                <Link to="/mens-shirt-detail">
                                    <img src="https://img.tatacliq.com/images/i10/437Wx649H/MP000000016694130_437Wx649H_202303010934521.jpeg" className='mens-product-img' alt="" />
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
                                <h3 style={{ marginBottom: "1%" }}>Ed-a-Mamma</h3>
                                <p style={{ marginBottom: "1%", color: "#4a4a4a" }}>Ed-a-Mamma Kids Coral Solid Shirt</p>
                                <p>Rs. <span><b>659</b></span></p>
                                <div className="product-rating-div">
                                    <p className='rating-div'>4.0 <span style={{ color: "green" }}>&#9733;</span></p>
                                    <p>&nbsp;&nbsp;(4)</p>
                                </div>
                                <p className='limited-stock'>Limited Stock!</p>
                            </div>
                        </div>

                        <div className="mens-single-product">

                            <div className="mens-product-image">
                                <img src="https://img.tatacliq.com/images/i8/437Wx649H/MP000000014379962_437Wx649H_202209090328391.jpeg" className='mens-product-img' alt="" />
                                <div className='image-overlay'>
                                    <img src="https://www.tatacliq.com/src/general/components/img/WL1.svg" className='image-overlay' alt="" />
                                </div>

                                <div className='image-overlay-for-same-product'>
                                    <img src="https://www.tatacliq.com/src/general/components/img/similarIconNew.svg" className='image-overlay' alt="" />
                                </div>
                                {/* <img src="https://www.tatacliq.com/src/general/components/img/WL1.svg" className='image-overlay' alt="" /> */}
                            </div>

                            <div className="product-info">
                                <h3 style={{ marginBottom: "1%" }}>United Colors of Benetton</h3>
                                <p style={{ marginBottom: "1%", color: "#4a4a4a" }}>United Colors of Benetton Kids Green & White Cotton Chequered Shirt</p>
                                <p>Rs. <span><b>764</b></span></p>
                            </div>
                        </div>

                        <div className="mens-single-product">
                            <div className="mens-product-image">
                                <img src="https://img.tatacliq.com/images/i10/437Wx649H/MP000000016696346_437Wx649H_202303011127581.jpeg" className='mens-product-img' alt="" />
                                <div className='image-overlay'>
                                    <img src="https://www.tatacliq.com/src/general/components/img/WL1.svg" className='image-overlay' alt="" />
                                </div>

                                <div className='image-overlay-for-same-product'>
                                    <img src="https://www.tatacliq.com/src/general/components/img/similarIconNew.svg" className='image-overlay' alt="" />
                                </div>
                                {/* <img src="https://www.tatacliq.com/src/general/components/img/WL1.svg" className='image-overlay' alt="" /> */}
                            </div>

                            <div className="product-info">
                                <h3 style={{ marginBottom: "1%" }}>Ed-a-Mamma</h3>
                                <p style={{ marginBottom: "1%", color: "#4a4a4a" }}>Ed-a-Mamma Kids Light Green Floral Print Top</p>
                                <p>Rs. <span><b>549</b></span> <span style={{ textDecoration: "line-through", color: "#979797", fontSize: "12px" }}>Rs.999</span></p>
                                
                            </div>
                        </div>

                        <div className="mens-single-product">
                            <div className="mens-product-image">
                                <img src="https://img.tatacliq.com/images/i11/437Wx649H/MP000000018078443_437Wx649H_202306230455341.jpeg" className='mens-product-img' alt="" />
                                <div className='image-overlay'>
                                    <img src="https://www.tatacliq.com/src/general/components/img/WL1.svg" className='image-overlay' alt="" />
                                </div>

                                <div className='image-overlay-for-same-product'>
                                    <img src="https://www.tatacliq.com/src/general/components/img/similarIconNew.svg" className='image-overlay' alt="" />
                                </div>
                                {/* <img src="https://www.tatacliq.com/src/general/components/img/WL1.svg" className='image-overlay' alt="" /> */}
                            </div>

                            <div className="product-info">
                                <h3 style={{ marginBottom: "1%" }}>HOP</h3>
                                <p style={{ marginBottom: "1%", color: "#4a4a4a" }}>HOP Kids by Westside Printed Multi-Colored T-Shirt</p>
                                <p>Rs. <span><b>399</b></span></p>
                                <div className="product-rating-div">
                                    <p className='rating-div'>5.0 <span style={{ color: "green" }}>&#9733;</span></p>
                                    <p>&nbsp;&nbsp;(1)</p>
                                </div>
                            </div>
                        </div>

                        <div className="mens-single-product">
                            <div className="mens-product-image">
                                <img src="https://img.tatacliq.com/images/i11/437Wx649H/MP000000018078453_437Wx649H_202306230456091.jpeg" className='mens-product-img' alt="" />
                                <div className='image-overlay'>
                                    <img src="https://www.tatacliq.com/src/general/components/img/WL1.svg" className='image-overlay' alt="" />
                                </div>

                                <div className='image-overlay-for-same-product'>
                                    <img src="https://www.tatacliq.com/src/general/components/img/similarIconNew.svg" className='image-overlay' alt="" />
                                </div>
                                {/* <img src="https://www.tatacliq.com/src/general/components/img/WL1.svg" className='image-overlay' alt="" /> */}
                            </div>

                            <div className="product-info">
                                <h3 style={{ marginBottom: "1%" }}>HOP</h3>
                                <p style={{ marginBottom: "1%", color: "#4a4a4a" }}>HOP Kids by Westside Printed Multi-Colored T-Shirt</p>
                                <p>Rs. <span><b>399</b></span> </p>
                                <div className="product-rating-div">
                                    <p className='rating-div'>4.7 <span style={{ color: "green" }}>&#9733;</span></p>
                                    <p>&nbsp;&nbsp;(1)</p>
                                </div>
                            </div>
                        </div>

                        <div className="mens-single-product">
                            <div className="mens-product-image">
                                <img src="https://img.tatacliq.com/images/i11/437Wx649H/MP000000018112177_437Wx649H_202306252117451.jpeg" className='mens-product-img' alt="" />
                                <div className='image-overlay'>
                                    <img src="https://www.tatacliq.com/src/general/components/img/WL1.svg" className='image-overlay' alt="" />
                                </div>

                                <div className='image-overlay-for-same-product'>
                                    <img src="https://www.tatacliq.com/src/general/components/img/similarIconNew.svg" className='image-overlay' alt="" />
                                </div>
                                {/* <img src="https://www.tatacliq.com/src/general/components/img/WL1.svg" className='image-overlay' alt="" /> */}
                            </div>

                            <div className="product-info">
                                <h3 style={{ marginBottom: "1%" }}>HOP</h3>
                                <p style={{ marginBottom: "1%", color: "#4a4a4a" }}>HOP Kids by Westside Multi Striped T-Shirt</p>
                                <p>Rs. <span><b>399</b></span></p>
                                
                            </div>
                        </div>

                        <div className="mens-single-product">
                            <div className="mens-product-image">
                                <img src="https://img.tatacliq.com/images/i11/437Wx649H/MP000000018038041_437Wx649H_202306212037121.jpeg" className='mens-product-img' alt="" />
                                <div className='image-overlay'>
                                    <img src="https://www.tatacliq.com/src/general/components/img/WL1.svg" className='image-overlay' alt="" />
                                </div>

                                <div className='image-overlay-for-same-product'>
                                    <img src="https://www.tatacliq.com/src/general/components/img/similarIconNew.svg" className='image-overlay' alt="" />
                                </div>
                                {/* <img src="https://www.tatacliq.com/src/general/components/img/WL1.svg" className='image-overlay' alt="" /> */}
                            </div>

                            <div className="product-info">
                                <h3 style={{ marginBottom: "1%" }}>United Colors of Benetton</h3>
                                <p style={{ marginBottom: "1%", color: "#4a4a4a" }}>United Colors of Benetton Kids Multicolor Color Block Polo T-Shirt</p>
                                <p>Rs. <span><b>1299</b></span> <span style={{ textDecoration: "line-through", color: "#979797", fontSize: "12px" }}>Rs.1999</span></p>
                                
                            </div>
                        </div>

                        <div className="mens-single-product">
                            <div className="mens-product-image">
                                <img src="https://img.tatacliq.com/images/i8/437Wx649H/MP000000013651469_437Wx649H_202207011156541.jpeg" className='mens-product-img' alt="" />
                                <div className='image-overlay'>
                                    <img src="https://www.tatacliq.com/src/general/components/img/WL1.svg" className='image-overlay' alt="" />
                                </div>

                                <div className='image-overlay-for-same-product'>
                                    <img src="https://www.tatacliq.com/src/general/components/img/similarIconNew.svg" className='image-overlay' alt="" />
                                </div>
                                {/* <img src="https://www.tatacliq.com/src/general/components/img/WL1.svg" className='image-overlay' alt="" /> */}
                            </div>

                            <div className="product-info">
                                <h3 style={{ marginBottom: "1%" }}>Allen Solly Junior</h3>
                                <p style={{ marginBottom: "1%", color: "#4a4a4a" }}>Allen Solly Junior Navy Floral Print Playsuit</p>
                                <p>Rs. <span><b>934</b></span> <span style={{ textDecoration: "line-through", color: "#979797", fontSize: "12px" }}>Rs.2399</span></p>

                            </div>
                        </div>

                        <div className="mens-single-product">
                            <div className="mens-product-image">
                                <img src="https://img.tatacliq.com/images/i8/437Wx649H/MP000000014557494_437Wx649H_202209201827371.jpeg" className='mens-product-img' alt="" />
                                <div className='image-overlay'>
                                    <img src="https://www.tatacliq.com/src/general/components/img/WL1.svg" className='image-overlay' alt="" />
                                </div>

                                <div className='image-overlay-for-same-product'>
                                    <img src="https://www.tatacliq.com/src/general/components/img/similarIconNew.svg" className='image-overlay' alt="" />
                                </div>
                                {/* <img src="https://www.tatacliq.com/src/general/components/img/WL1.svg" className='image-overlay' alt="" /> */}
                            </div>

                            <div className="product-info">
                                <h3 style={{ marginBottom: "1%" }}>AND girl</h3>
                                <p style={{ marginBottom: "1%", color: "#4a4a4a" }}>AND girl Purple Solid Dress</p>
                                <p>Rs. <span><b>839</b></span></p>
                                <div className="product-rating-div">
                                    <p className='rating-div'>5.0 <span style={{ color: "green" }}>&#9733;</span></p>
                                    <p>&nbsp;&nbsp;(1)</p>
                                </div>
                            </div>
                        </div>

                        <div className="mens-single-product">
                            <div className="mens-product-image">
                                <img src="https://img.tatacliq.com/images/i11/437Wx649H/MP000000018038511_437Wx649H_202306212056241.jpeg" className='mens-product-img' alt="" />
                                <div className='image-overlay'>
                                    <img src="https://www.tatacliq.com/src/general/components/img/WL1.svg" className='image-overlay' alt="" />
                                </div>

                                <div className='image-overlay-for-same-product'>
                                    <img src="https://www.tatacliq.com/src/general/components/img/similarIconNew.svg" className='image-overlay' alt="" />
                                </div>
                                {/* <img src="https://www.tatacliq.com/src/general/components/img/WL1.svg" className='image-overlay' alt="" /> */}
                            </div>

                            <div className="product-info">
                                <h3 style={{ marginBottom: "1%" }}>United Colors of Benetton</h3>
                                <p style={{ marginBottom: "1%", color: "#4a4a4a" }}>United Colors of Benetton Kids Aqua Blue Embroidered Dress</p>
                                <p>Rs. <span><b>2144</b></span> <span style={{ textDecoration: "line-through", color: "#979797", fontSize: "12px" }}>Rs.3299</span></p>
                                
                                <p className='limited-stock'>Limited Stock!</p>
                            </div>
                        </div>

                        <div className="mens-single-product">
                            <div className="mens-product-image">
                                <img src="https://img.tatacliq.com/images/i8/437Wx649H/MP000000014009729_437Wx649H_202208020852431.jpeg" className='mens-product-img' alt="" />
                                <div className='image-overlay'>
                                    <img src="https://www.tatacliq.com/src/general/components/img/WL1.svg" className='image-overlay' alt="" />
                                </div>

                                <div className='image-overlay-for-same-product'>
                                    <img src="https://www.tatacliq.com/src/general/components/img/similarIconNew.svg" className='image-overlay' alt="" />
                                </div>
                                {/* <img src="https://www.tatacliq.com/src/general/components/img/WL1.svg" className='image-overlay' alt="" /> */}
                            </div>

                            <div className="product-info">
                                <h3 style={{ marginBottom: "1%" }}>Bodycare</h3>
                                <p style={{ marginBottom: "1%", color: "#4a4a4a" }}>Bodycare Kids Red & Navy Mickey & Friends Printed T-Shirt with Shorts</p>
                                <p>Rs. <span><b>425</b></span></p>
                                <div className="product-rating-div">
                                    <p className='rating-div'>1.0 <span style={{ color: "green" }}>&#9733;</span></p>
                                    <p>&nbsp;&nbsp;(1)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default KidsComponent;