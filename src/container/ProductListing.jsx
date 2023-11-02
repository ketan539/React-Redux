import React, { useEffect, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios';
import ProductComponent from './ProductComponent';
import { setProducts } from '../redux/actions/productActions';


const ProductListing = () => {
    const products = useSelector((state) => state);
    const dispatch = useDispatch();


    const fetchProducts = useCallback(async () => {
        const response = await axios.get('https://fakestoreapi.com/products')
            .catch((err) => {
                console.log("Error", err)

            });
        dispatch(setProducts(response.data));
    }, [dispatch])



    useEffect(() => {

        fetchProducts()
    }, [fetchProducts])




    console.log(products)
    return (
        <div>
            <ProductComponent />
        </div>
    )
}

export default ProductListing