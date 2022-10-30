import React from 'react'
import Where from './where/Where'
import arrow from "../../../images/arrowpr.svg"

const IsHere = ({ product, loading }) => {
    const Name = product?.categories?.map((item) => (item))
    return (
        loading ? null :
            <div className='ishere_area'>
                <Where link={"/"} arrow={arrow} text={"Ana Səhifə"} />
                {Name?.[0]?.name?.length >= 2 ?
                    <>
                        <Where link={`/products/${Name?.[0]?.slug}`} key={product?.categories?.id} text={Name?.[0]?.name} />
                        {/* <Where key={product?.categories?.id} text={Name?.[1]?.name} /> */}
                    </>
                    :
                    <>
                        <Where key={product?.categories?.id} text={Name} />
                    </>}
            </div >
    )
}

export default IsHere