import React, { Fragment } from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';



const ProductComponent = () => {
    const products = useSelector((state) => state.allProducts.products);
    const renderList =
        <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">Product list</h2>
                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {products.map((product) => (
                        <div key={product.id} className="group relative shadow-xl p-3 rounded-xl">
                            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                />
                            </div>
                            <div className="mt-4 flex justify-between">
                                <div>
                                    <h3 className="text-sm text-gray-700">
                                        <Link to ={`/product-detail/${product.id}`}>
                                            <span aria-hidden="true" className="absolute inset-0" />
                                            {product.title}
                                        </Link>
                                    </h3>

                                </div>
                                <p className="text-sm font-medium text-gray-900">${product.price}</p>
                            </div>
                            <p className="text-sm font-medium text-gray-400 mt-2 capitalize">{product.category}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    return (

        <Fragment>
            {renderList}
        </Fragment>




    )
}

export default ProductComponent