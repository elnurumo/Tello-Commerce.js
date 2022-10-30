import React, { useEffect, useState } from 'react'
import Main2 from './Main2'
import Reklam from './Reklam'
import Slidermost from "../../Slider/Slidermost"
import Watch_mobil from './Watch_mobil'
import Advantage from './Advantage/Advantage'
import Marka from './Marka/Marka'
import { useSelector, useDispatch } from 'react-redux'
import { getAllProducts, getBestSellers } from '../../../Store/reducers/fetchReducers'
import { getAllAksesuar } from '../../../Store/reducers/aksesuarReducer'
import { getAlliPhone } from '../../../Store/reducers/iphoneReducers'


const Main = () => {
    const { products, loading } = useSelector((state) => state.fetch)
    const dispatch = useDispatch()
    const dispatch1 = useDispatch()
    const dispatch2 = useDispatch()

    const [product, setProducts] = useState([])
    const [load, setLoading] = useState(false)
    useEffect(() => {
        getBestSellers(setLoading, setProducts)
    }, [dispatch])


    const { products1, loading1 } = useSelector((state) => state.aksesuar)


    useEffect(() => {
        dispatch1(getAllAksesuar())
    }, [dispatch1])

    const { products2, loading2 } = useSelector((state) => state.iPhone)

    useEffect(() => {
        dispatch2(getAlliPhone())
    }, [dispatch2])


    return (
        <div className='main_area'>
            <Slidermost />
            <Main2 link={"mobil-telefonlar"} products={product} loading={load} name={"Ən çox satılan məhsullar"} />
            <Main2 link={"mobil-telefonlar"} products={products2} loading={loading2} name={"Yeni gələn məhsullar"} />
            <Reklam />
            <Main2 link={"aksessuarlar"} products={products1} loading={loading1} name={"Yeni gələn aksessuarlar"} />
            <Watch_mobil />
            <Advantage />
            <Marka />
        </div>
    )

}

export default Main;