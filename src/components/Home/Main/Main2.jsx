import React from 'react'
// import { useSelector, useDispatch } from 'react-redux'
import Arrow from "../../../images/arrow-same_product.svg"
// import { getAllProducts } from '../../../Store/reducers/fetchReducers'
import { useNavigate } from 'react-router-dom'

const Main2 = ({ name, products, loading, link }) => {

    const navigate = useNavigate()

    const card = loading ? <>
        <div className="card is-loading">
            <div className="image"></div>
            <div className="content">
                <h2></h2>
                <p></p>
            </div>
        </div>
        <div className="card is-loading">
            <div className="image"></div>
            <div className="content">
                <h2></h2>
                <p></p>
            </div>
        </div>
        <div className="card is-loading">
            <div className="image"></div>
            <div className="content">
                <h2></h2>
                <p></p>
            </div>
        </div>
        <div className="card is-loading">
            <div className="image"></div>
            <div className="content">
                <h2></h2>
                <p></p>
            </div>
        </div>
    </>
        : products?.slice(0, 8)?.map((product) => (
            <div onClick={() => navigate(`/product/${product?.id}`)} key={product?.id} id={product?.id} className="product">
                <img src={product?.image?.url} alt="mobile" />
                <h3>{product?.name}</h3>
                <h1 className="product_price">{product?.price?.raw}<span>₼</span></h1>
            </div>
        ))
    return (
        <div className='same_product_area'>
            <div className="same_products_name">
                <h1>{name}</h1>
                <h3 onClick={() => navigate(`/products/${link}`)} className='desk'>Hamısına bax <img src={Arrow} alt="arrow-same_product" /></h3>
            </div>

            <div className="same_products_parent">
                <div className="same_products">
                    {card}
                </div>
            </div>

            <div onClick={() => navigate(`/products/${link}`)} className="same_products_name mob">
                <h3>Hamısına bax <img src={Arrow} alt="arrow-same_product mob" /></h3>
            </div>
        </div>
    )
}

export default Main2