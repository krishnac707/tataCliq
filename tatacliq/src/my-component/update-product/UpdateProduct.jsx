import React, { useEffect, useState } from 'react'
import { toast } from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateProduct = () => {

    const { id } = useParams();
    const [productData, setproductData] = useState({});
    const [singleProduct, setSingleProduct] = useState();
    const router = useNavigate();

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("CurrentUser"));
        if (user) {
            if (user?.role == "Buyer") {
                toast.error("You are not a seller");
                router('/')
            }
        }
        else {
            toast.error("Please login first");
            router('/login')
        }
    }, [])

    const handlingForm = (event) => {
        setSingleProduct({ ...singleProduct, [event.target.name]: event.target.value })
    }

    useEffect(() => {
        const product = JSON.parse(localStorage.getItem("Products"));
        if (product) {
            setproductData(product);
        }
    }, [])

    useEffect(() => {
        if (id && productData.length) {
            const result = productData.find((product) => product.id == id)
            console.log(result, "result");
            setSingleProduct(result);
        }
    }, [productData, id])

    const formValidation = () => {
        const product = JSON.parse(localStorage.getItem("Products"));
        for (var i = 0; i < product.length; i++) {
            if (product[i].id == id) {
                product[i].name = singleProduct.name;
                product[i].price = singleProduct.price;
                product[i].image = singleProduct.image;
            }
        }
        localStorage.setItem("Products", JSON.stringify(product));
        setSingleProduct({});
        router(`/single-product/${id}`);
        toast.success("product updated");
        
    }

    return (
        <div className='add-product-body-main'>
            <div className='add-product-inside-body'>
                <h3>Update Product</h3>
                <form onSubmit={formValidation}>
                    <input className='form-input-css' type="text" value={singleProduct?.name} name='name' onChange={handlingForm} />
                    <input className='form-input-css' type="text" value={singleProduct?.price} name="price" onChange={handlingForm} />
                    <input className='form-input-css' type="text" value={singleProduct?.image} name='image' onChange={handlingForm} />
                    {/* <select className='form-select-css' onChange={selectCategory}>
                        <option value="Others">Others</option>
                        <option value="Mens">Mens</option>
                        <option value="Womens">Women</option>
                        <option value="Kids">Kids</option>
                    </select> */}
                    <input className='login-form-submit-button-css' type="submit" value="update Product" />
                </form>
            </div>
        </div>
    )
}

export default UpdateProduct
