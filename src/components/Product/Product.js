import React, { useEffect, useState } from 'react'
import IsHere from './IsHere/IsHere'
import Main from './Main/Main'
import { getProduct } from '../../Store/reducers/productReducer'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

const Product = () => {
  const params = useParams()
  const id = params
  const dispatch = useDispatch()
  const { product, loading } = useSelector((state) => state.product)
  const [sizeValue, setSizeValue] = useState(product?.price?.raw)

  useEffect(() => {
    dispatch(getProduct(id))
    setSizeValue(product?.price?.raw)
  }, [dispatch, id, product?.price?.raw])

  return (
    <div className='product_area'>
      <IsHere product={product} loading={loading} />
      <Main product={product} loading={loading} id={id} size={sizeValue} setSize={setSizeValue} />
    </div>
  )
}

export default Product