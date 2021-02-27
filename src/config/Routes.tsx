import React from "react"
import Home from "../components/pages/Home"
import About from "../components/pages/About"
import PageNotFound from "../components/pages/PageNotFound"
import Products, {ProductList} from "../components/pages/Products"
import ProductItem from "../components/pages/ProductItem"
import {BrowserRouter as
    Router,
    Routes,
    Route,
    Link
} from "react-router-dom"



const RouteConfig = () => {
    return (
        <div>
           
            <Router>
                <nav>
                    <Link to="/"> Home </Link>
                    <Link to="/products"> Products </Link>
                    <Link to="/about"> About </Link>
                </nav>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/products" element={<Products />}>
                        <Route path="/" element = {<ProductList />} />
                        <Route path=":slug" element = {<ProductItem />} />
                    </Route>
                    <Route path="*" element={<PageNotFound />} />


                </Routes>
            </Router>
        </div>
    )
}

export default RouteConfig