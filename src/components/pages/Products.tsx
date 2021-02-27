import React from "react"
import { Link, Outlet } from "react-router-dom"
import item from "../../item.json"
import { Basket } from "../basket/basket"
import { Product } from "./ProductNew"

const Products = () => {
    return (
        <div>
            This is products page
            <Outlet />

        </div>)


}

export default Products



export const ProductList = () => {
    return (
        <div >

            {/* <div className="productContainer" >

                {
                    Object.entries(item).map(([slug, { name, img }], ind) => {

                        return (
                            <div key={ind} >

                                <Link to={`/products/${slug}`} >
                                    <h3>{name}</h3>
                                    <img src={img} alt={img} height={200} />
                                </Link>

                            </div>
                        )
                    }

                    )
                }

            </div> */}
                <hr />
                <Product />

                <Basket />

        </div>
    )
}