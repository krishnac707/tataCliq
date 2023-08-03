import React, { useEffect, useState } from 'react';
import './AllProducts.css';
import { useNavigate } from 'react-router-dom';

const AllProducts = () => {

    const [allProducts, setAllProducts] = useState();
    const [isProductPresent, setProductPresent] = useState(false)
    const router = useNavigate();

    useEffect(() => {
        const product = JSON.parse(localStorage.getItem("Products"));
        if (product) {
            setAllProducts(product);
            setProductPresent(true);

        }
        else {
            setProductPresent(false);
        }
    }, [])

    const redirect = (id) => {
        router(`/single-product/${id}`)
    }

    return (
        <div className='all-product-body'>
            {
                !isProductPresent ?
                    <div className='no-product-div-show'>
                        <h1>No Products</h1>
                    </div>
                    :
                    <>
                        <h1 className='all-product-heading'>All Products</h1>
                        <p className='mens-wear-para-css'>({allProducts?.length}) Products</p>
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

                                <div className='mens-product-section'>
                                    {allProducts && allProducts.map((pro) => (
                                        <div key={pro.id} className='mens-single-product' onClick={() => redirect(pro.id)}>
                                            <div className="mens-product-image">
                                                <img src={pro.image} className='mens-product-img' alt="" />
                                                <div className='image-overlay'>
                                                    <img src="https://www.tatacliq.com/src/general/components/img/WL1.svg" className='image-overlay' alt="" />
                                                </div>

                                                <div className='image-overlay-for-same-product'>
                                                    <img src="https://www.tatacliq.com/src/general/components/img/similarIconNew.svg" className='image-overlay' alt="" />
                                                </div>
                                            </div>
                                            <div className='product-info'>
                                                <h3>{pro.name} {pro.category} </h3>
                                                <h3>{pro.price} Rs</h3>
                                                <div className="product-rating-div">
                                                    <p className='rating-div'>2.8 <span style={{ color: "green" }}>&#9733;</span></p>
                                                    <p>&nbsp;&nbsp;(18)</p>
                                                </div>
                                                <p className='limited-stock'>Limited Stock!</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </>
            }
        </div>
    )
}

export default AllProducts