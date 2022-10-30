import React, { useEffect, useState } from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux"
import { getAllProducts2 } from '../../../Store/reducers/allProductsReducer'

const MainProducts = ({ products, loading, searchParams, setSearchParams, setCurrentPage, currentPage }) => {
  const navigatePage = useNavigate()
  const [count, setCount] = useState(Number(searchParams.get('page')))
  const dispatch2 = useDispatch()
  const navigate1 = useNavigate()

  const handleChange = (event, value) => {
    window.scrollTo(0,0)
    const params = Object.fromEntries([...searchParams])
    setSearchParams({ ...params, page: value })
    setCurrentPage(Number(searchParams.get('page')) || 1);
    setCurrentPage(value);
  };

  return (
    <div className='same_product_area'>
      <div className="same_products_parent">
        <div className="same_products">
          <>
            {loading ? <>
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
              :
              products?.data?.length === 0 && loading ?
                null : <>
                  {products?.data?.map((product) => (
                    <div onClick={() => navigate1(`/product/${product?.id}`)} key={product?.id} id={product?.id} className="product">
                      <img src={product?.image?.url} alt="mobile" />
                      <h3>{product?.name}</h3>
                      <h1 className="product_price">{product?.price?.raw}<span>₼</span></h1>
                    </div>
                  ))}
                </>
            }
          </>
        </div>
        <div>
          {products?.meta?.pagination?.total_pages === 1 ? null : <Stack spacing={2} >
            <Pagination page={currentPage} count={products?.meta?.pagination?.total_pages} onChange={handleChange} size="large" color="success" shape='rounded' />
          </Stack>}
        </div>
      </div>
    </div>
  )
}

export default MainProducts;