import React, { useEffect, useState } from 'react'
import MainProducts from './Main/MainProducts'
import IsHere from './isHere/IsHere'
import FilterAndCount from './FilterAndCount/FilterAndCount'
import FilterBrend from './FilterBrend/FilterBrend'
import { optionsOrder, optionsFilter } from './Data';
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import { getAllProducts2 } from '../../Store/reducers/allProductsReducer'
import MobileOptions from './MobileOptions/MobileOptions'

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { products, loading } = useSelector((state) => state.Products)
  const [currentPage, setCurrentPage] = useState(Number(searchParams.get('page')))
  const [filterVisibility, setFilterVisibility] = useState(false)
  const dispatch = useDispatch()
  const slug = useParams().slug
  const [currentOption, setCurrentOption] = useState(Number(searchParams.get('sortBy')) || optionsOrder[0])

  useEffect(() => {
    setCurrentPage(Number(searchParams.get('page')) || 1);
    const values = []
    if (searchParams.get('queries')?.length > 0) {
      optionsFilter.forEach((el) => {
        if (searchParams.get('queries').includes(el.label)) {
          el.checked = true
          values.push(...el.value)
        }
        else {
          el.checked = false
        }
      })
    }
    else {
      optionsFilter.forEach((el) => {
        el.checked = false
      })
    }
    dispatch(getAllProducts2({
      category_slug: [slug],
      query: values.toString() || null,
      limit: 6,
      page: currentPage,
      sortBy: currentOption.actions.sortBy,
      sortDirection: currentOption.actions.sortDirection,
    }))
  }, [slug, dispatch, currentPage, currentOption, searchParams])

  return (
    <>
      <div className='products_section_area'>
        <IsHere products={products} loading={loading} />
        <MobileOptions
          currentOption={currentOption}
          setCurrentOption={setCurrentOption}
          optionsOrder={optionsOrder}
          setCurrentPage={setCurrentPage}
          searchParams={searchParams}
          setSearchParams={setSearchParams}
          optionsFilter={optionsFilter}
          filterVisibility={filterVisibility}
          setFilterVisibility={setFilterVisibility}
        />
        <div className="product_and_filter">
          <div className="filter_brend_area">
            <FilterBrend
              loading={loading}
              products={products}
              searchParams={searchParams}
              setSearchParams={setSearchParams}
              options={optionsFilter}
              filterVisibility={filterVisibility}
              setFilterVisibility={setFilterVisibility}
            />
          </div>
          <div className="product_area">
            <FilterAndCount
              loading={loading}
              products={products}
              currentOption={currentOption}
              setCurrentOption={setCurrentOption}
              options={optionsOrder}
              setCurrentPage={setCurrentPage}
              searchParams={searchParams}
              setSearchParams={setSearchParams}
            />
            <MainProducts
              loading={loading}
              products={products}
              searchParams={searchParams}
              setSearchParams={setSearchParams}
              setCurrentPage={setCurrentPage}
              currentPage={currentPage}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Products