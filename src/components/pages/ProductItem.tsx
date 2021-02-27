import React from "react"
import { useParams } from "react-router-dom"
import item from "../../item.json"

const ProductItem = () => {

    const {slug} = useParams()
    const product = item[slug]

    if(!product){
        return(
            <h2>
                Product not foun
            </h2>
        )
    }

    const {name,img} = product

    return (
        <div className='productItem'>

        {<h2>{name}</h2>}
        <img src={img} alt={name} height={500} ></img>
  
      </div>
        
        )


}

export default ProductItem