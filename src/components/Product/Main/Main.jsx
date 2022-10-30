import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation'
import 'swiper/css/thumbs'
import sebet from "../../../images/cart.svg"
import spinner from "../../../images/loadingPage.gif"
import { Navigation, Thumbs } from 'swiper';
import { commerce } from "../../../Commerce";
import useBasket from '../../../Hooks/useBasket';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';



const Main = ({ loading, product, id, size, setSize }) => {
    const [count, setCount] = useState(1)
    const [hover, setHover] = useState(false)
    const [activeThumbs, setActiveThumbs] = useState(null)
    const [setCartId] = useBasket()
    const navigate = useNavigate()

    const variantData1 = product?.variant_groups?.[0]?.id

    const variantData2 = product?.variant_groups?.[1]?.id

    const Color = product?.variant_groups?.[0]?.options?.map((color) => color?.name)

    const Size = product?.variant_groups?.[1]?.options?.map((size) => size?.name)

    const sizeId = product?.variant_groups?.[1]?.options?.map((size) => size?.id)
    const colorId0 = product?.variant_groups?.[0]?.options?.map((color) => color?.id)


    const [click, setClick] = useState(sizeId?.[0])
    const [colorId, setColorId] = useState(colorId0?.[0])

    const [gallery, setGallery] = useState([])

    const [photoId, setPhotoId] = useState(gallery)

    const [activeColor, setActiveColor] = useState(null)

    useEffect(() => {
        setClick(sizeId?.[0])
    }, [sizeId?.[0]])

    useEffect(() => {
        setPhotoId(colorId0?.[0])
    }, [colorId0])

    useEffect(() => {
        setColorId(colorId0?.[0])
    }, [colorId0?.[0]])

    function countHandlerMinus() {
        if (count !== 1) {
            setCount(count - 1)
        }
    }

    function mouseHover() {
        setHover(true)
    }

    function countHandlerPlus() {
        setCount(count + 1)
    }

    const Sebet = <img className='sebet' src={sebet} alt="seebet" />

    function changeColor(id) {
        setClick(id);
    }

    const getVariantSize = (price) => {
        setSize(price);
    }

    useEffect(() => {
        setActiveColor(product?.variant_groups?.[0]?.options?.[0])
    }, [product?.variant_groups])

    useEffect(() => {
        const images = product?.assets?.filter(asset => {
            if (activeColor?.assets?.includes(asset?.id)) {
                return asset
            } return false
        })

        setGallery(images)
    }, [activeColor?.assets, product?.assets, setPhotoId, photoId])

    function getId(id) {
        setColorId(id)
    }

    async function AddBasket() {
        const Basket = await commerce.cart.add(id, count, variantData2 && variantData1 ? {
            [variantData1]: activeColor?.id,
            [variantData2]: click,
        } : null)
        notify()
        setCartId(Basket?.id)
        localStorage.setItem("Basket_id", Basket?.id)
        return Basket
    }

    const notify = () => toast.success("Məhsul səbətə əlavə olundu", {
        position: toast.POSITION.BOTTOM_RIGHT
    });

    return (
        <>
            {loading ? <div className="spinner_area">
                <img className='spinner' src={spinner} alt="" />
            </div> :
                <div className='main_section'>
                    <div className="img_area">
                        <div className="center_img">
                            <Swiper
                                loop={true}
                                navigation={true}
                                modules={[Navigation, Thumbs]}
                                spaceBetween={50}
                                thumbs={{ swiper: activeThumbs && !activeThumbs.destroyed ? activeThumbs : null }}
                                slidesPerView={1}
                                className='product-images-slider'
                            >
                                {gallery?.length > 0 ?
                                    gallery?.map((variant) => (
                                        <SwiperSlide key={variant?.id}><img src={variant?.url} alt="product" /></SwiperSlide>
                                    )) : product?.assets?.map((item) => (
                                        <SwiperSlide key={item?.id}><img src={item?.url} alt="product" /></SwiperSlide>
                                    ))}
                            </Swiper>
                        </div>

                        <div>
                            <div className="other_img">
                                <Swiper
                                    onSwiper={setActiveThumbs}
                                    watchSlidesProgress
                                    slidesPerView={product?.assets?.length < 4 ? product?.assets?.length : 4}
                                    modules={[Navigation, Thumbs]}
                                    spaceBetween={10}
                                    className='product-images-slider-thumbs'
                                >
                                    {gallery?.length > 0 ? gallery?.map((variant) => (
                                        <SwiperSlide key={variant?.id}>
                                            <div className='product-images-slider-thumbs-wrapper'>
                                                <img src={variant?.url} alt="product" />
                                            </div>
                                        </SwiperSlide>
                                    )) : product?.assets?.map((item) => (
                                        <SwiperSlide key={item?.id}>
                                            <div className='product-images-slider-thumbs-wrapper'>
                                                <img src={item?.url} alt="product" />
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                        </div>
                    </div>
                    <div className="product_about">
                        <div className="product_name_area area">
                            <h2 className="product_name">{product?.name}</h2>
                        </div>
                        <div className="product_value_area area product_value_area_desk">
                            <h2 className="product_value">{size} <span>₼</span></h2>
                        </div>
                        <hr />
                        {Color ? <div className="product_color_area area">
                            <h2 className="product_colors color">Rəng:</h2>
                            {
                                product?.variant_groups?.[0]?.options?.map(item => {
                                    return (
                                        <div onClick={() => {
                                            getId(item?.id)
                                            // getAssetsId(item?.id)
                                            setActiveColor(item)
                                        }} key={item?.id} className={`${item?.name}`}>
                                            <div className={colorId === item?.id ? `selectColor` : null}></div>
                                        </div>
                                    )
                                })
                            }
                        </div> : null}
                        {Size ? <div className="product_size_area area">
                            <h2 className="product_sizes color">Yaddaş:</h2>
                            <div className="size_area">
                                {
                                    product?.variant_groups?.[1]?.options?.map(item => {
                                        return (
                                            <div onClick={() => {
                                                getVariantSize(item?.price?.raw)
                                                changeColor(item?.id)
                                            }} key={item?.id} className={click === item?.id ? "checked" : "product_size"} >{item?.name} </div>
                                        )
                                    })
                                }
                            </div>
                        </div> : null}
                        <hr />
                        <div className="product_number area">
                            {count === 1 ?
                                <div onMouseOver={mouseHover} onClick={countHandlerMinus} className="product_minus num product_handler not_work">-</div> :
                                <div onMouseOver={mouseHover} onClick={countHandlerMinus} className="product_minus num product_handler">-</div>}
                            <div className="product_count num">{count}</div>
                            <div onClick={countHandlerPlus} className="product_plus num product_handler">+</div>
                        </div>
                        <div className="product_add_button_area area product_add_button_area_desk">
                            <button onClick={AddBasket} className="product_add_button">{Sebet} Səbətə at</button>
                        </div>

                        <div className="product_value_area area product_add_button_area area_mob">
                            <h2 className="product_value">{size} <span>₼</span></h2>
                            <button onClick={AddBasket} className="product_add_button">{Sebet} Səbətə at</button>
                        </div>
                    </div>
                </div >}
            <ToastContainer onClick={() => navigate("/basket")} />
        </>
    )
}

export default Main