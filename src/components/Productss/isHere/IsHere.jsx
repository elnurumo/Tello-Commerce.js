import React from 'react'
import Where from './Where/Where'
import arrow from "../../../images/arrowpr.svg"

const IsHere = ({ products, loading }) => {
    // const [products, loading] = useProducts()
    const Name = products?.data?.[0]?.categories?.map((item) => (item))

    return (
        <div className='ishere_area'>
            <Where link={"/"} arrow={arrow} text={"Ana Səhifə"} />
            {loading ? null :
                <>
                    {Name?.[0]?.name?.length >= 2 ?
                        <>
                            <Where link={`/products/${Name?.[0]?.slug}`} key={products?.categories?.id} text={Name?.[0]?.name} />
                        </>
                        :
                        <>
                            <Where key={products?.categories?.id} text={Name?.[0]} />
                        </>}
                </>}
        </div >
    )
}

export default IsHere