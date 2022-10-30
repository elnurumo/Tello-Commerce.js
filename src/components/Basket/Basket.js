import React, { useEffect } from 'react'
import BasketCount from './BasketCount/BasketCount'
import BasketMain from './BasketMain/BasketMain'
import { getBasket } from '../../Store/reducers/BasketReducer'
import { useSelector, useDispatch } from 'react-redux'
import spinner from "../../images/loadingPage.gif"
import { commerce } from '../../Commerce'


const Basket = () => {
  const { productsBas, loadingBas } = useSelector((state) => state.Basket)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getBasket())
  }, [dispatch])

  return (loadingBas ?
    <div className="spinner_area">
      <img className='spinner' src={spinner} alt="" />
    </div> :
    <div className='basket_area'>
      <BasketCount products={productsBas} />
      <BasketMain products={productsBas} />
    </div>
  )
}

export default Basket