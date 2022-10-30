import { useEffect, useState } from 'react'
import { getBasket } from '../Store/reducers/BasketReducer'
import { useSelector, useDispatch } from 'react-redux'

const useBasket = () => {
    const [cartId, setCartId] = useState()
    const { productsBas, loadingBas } = useSelector((state) => state.Basket)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getBasket())
    }, [dispatch, cartId])

    return [setCartId, productsBas, loadingBas, cartId]
}  

export default useBasket