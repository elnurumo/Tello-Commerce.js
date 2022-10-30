import React, { useState, useEffect, useRef } from 'react'
import Logo from "../../../images/Logo-Tello.svg"
import Search from "../../../images/search.svg"
import Account from "../../../images/person.svg"
import Fav from "../../../images/fav-icon.svg"
import sebet from "../../../images/sebet.svg"
import burger from "../../../images/burger.svg"
import exit from "../../../images/exit.svg"
// import Reklam from "../../../images/reklam2.jpg"
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { searchProducts } from "../../../Store/reducers/searchReducers"
import { useNavigate } from 'react-router-dom'
import useClick from "../../../Hooks/useClick"
import useLocalStorage from '../../../Hooks/useLocalStorage'
import loadingCountBasket from "../../../images/loadingCountBasket.gif"
import arrowm from "../../../images/arrowm.svg"


const Header = () => {
    const [open, setOpen] = useState(false)
    const [hover, setHover] = useState(false)
    const [hover2, setHover2] = useState(false)
    const [click, searchActive, searchDeactive] = useClick()
    const [write, setWrite] = useState("")
    const [last1, last2, last3, last4, clearLast] = useLocalStorage()
    const { productsBas, loadingBas } = useSelector((state) => state.Basket)
    const search = useRef()

    window.addEventListener('click', (e) => {
        if (!search.current?.contains(e.target)) {
            searchDeactive()
        }
    })

    const navigate = useNavigate()

    const dispatch = useDispatch()

    const { products, loading } = useSelector((state) => state.search)

    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            dispatch(searchProducts(write))
            if (write.trim() !== "") {
                if (localStorage.getItem("Last search1") === null && localStorage.getItem("Last search1") !== write && localStorage.getItem("Last search2") !== write && localStorage.getItem("Last search3") !== write && localStorage.getItem("Last search4") !== write) {
                    localStorage.setItem("Last search1", write)
                }
                else if (localStorage.getItem("Last search2") === null && localStorage.getItem("Last search1") !== write && localStorage.getItem("Last search2") !== write && localStorage.getItem("Last search3") !== write && localStorage.getItem("Last search4") !== write) {
                    localStorage.setItem("Last search2", write)
                }
                else if (localStorage.getItem("Last search3") === null && localStorage.getItem("Last search1") !== write && localStorage.getItem("Last search2") !== write && localStorage.getItem("Last search3") !== write && localStorage.getItem("Last search4") !== write) {
                    localStorage.setItem("Last search3", write)
                }
                else if (localStorage.getItem("Last search4") === null && localStorage.getItem("Last search1") !== write && localStorage.getItem("Last search2") !== write && localStorage.getItem("Last search3") !== write && localStorage.getItem("Last search4") !== write) {
                    localStorage.setItem("Last search4", write)
                } else if (localStorage.getItem("Last search1") !== null && localStorage.getItem("Last search1") !== write && localStorage.getItem("Last search2") !== write && localStorage.getItem("Last search3") !== write && localStorage.getItem("Last search4") !== write) {
                    localStorage.removeItem("Last search1")
                    localStorage.setItem("Last search1", write)
                }
                else if (localStorage.getItem("Last search2") !== null && localStorage.getItem("Last search1") !== write && localStorage.getItem("Last search2") !== write && localStorage.getItem("Last search3") !== write && localStorage.getItem("Last search4") !== write) {
                    localStorage.removeItem("Last search2")
                    localStorage.setItem("Last search2", write)
                }
                else if (localStorage.getItem("Last search3") !== null && localStorage.getItem("Last search1") !== write && localStorage.getItem("Last search2") !== write && localStorage.getItem("Last search3") !== write && localStorage.getItem("Last search4") !== write) {
                    localStorage.removeItem("Last search3")
                    localStorage.setItem("Last search3", write)
                }
                else if (localStorage.getItem("Last search4") !== null && localStorage.getItem("Last search1") !== write && localStorage.getItem("Last search2") !== write && localStorage.getItem("Last search3") !== write && localStorage.getItem("Last search4") !== write) {
                    localStorage.removeItem("Last search4")
                    localStorage.setItem("Last search4", write)
                }
            }
        }, 800)

        return () => clearTimeout(delayDebounceFn)
    }, [dispatch, write])

    function searchHandler(e) {
        setWrite(e.target.value)

        if (e.target.value.trim() !== "") {
            searchActive()
        } else {
            searchDeactive()
        }
    }

    function clear() {
        setWrite("")
    }

    function clearLocal() {
        clearLast()
    }

    function sidebarHandler() {
        setOpen(true)
    }

    function sidebarHandlerClose() {
        setOpen(false)
    }

    function hoverHandler2() {
        setHover2(true)
    }

    function hoverOut2() {
        setHover2(false)
    }


    function hoverHandler() {
        setHover(true)
    }

    function hoverOut() {
        setHover(false)
    }

    return (
        <div onClick={(e) => {
            e.target.parentElement.className === "search_area" || e.target.parentElement.className === "last_search" || e.target.parentElement.className === "head" || e.target.parentElement.className === "searching_area" ? searchActive() : searchDeactive()
        }} ref={search} className="header_area">
            {open ?
                <div className='left'>
                    <div className="logo_area">
                        <div onClick={sidebarHandlerClose} className='burger'><img src={exit} alt="Menu" /></div>
                        <img src={Logo} alt="Tello Logoo" />
                        <Link to="/" className="name">Tello</Link>
                    </div>
                    <ul className="header_selections2">
                        <li className="selection" onMouseOver={hoverHandler}>
                            <Link to={"/products/mobil-telefonlar"} onClick={() => setOpen(false)}>Mobil Telefonlar</Link>
                        </li>
                        <li className="selection">
                            <div className="selection_arrow_area">
                                <Link to={"/products/aksessuarlar"} onClick={() => setOpen(false)} onMouseOut={hoverOut2}>Aksessuarlar</Link>
                                {hover2 ? <img className='arrowm' onClick={() => hover2 ? setHover2(false) : setHover2(true)} src={arrowm} alt="arrow" /> : <img className='arrowm2' onClick={() => hover2 ? setHover2(false) : setHover2(true)} src={arrowm} alt="arrow" />}
                            </div>
                            {hover2 ? 
                            <div onMouseOver={hoverHandler2} onMouseOut={hoverOut2} className="product_section">
                                <div className="earphone_area">
                                    <Link to={"/products/qulaqliqlar"} onClick={() => setOpen(false)} className="earphone_name_header"><h1>Qulaqlıqlar</h1></Link>
                                </div>

                                <div className="earphone_area">
                                    <Link to={"/products/saatlar"} onClick={() => setOpen(false)} className="earphone_name_header"><h1>Saatlar</h1></Link>
                                </div>

                                <div className="earphone_area">
                                    <Link to={"/products/qolbaqlar"} onClick={() => setOpen(false)} className="earphone_name_header"><h1>Qolbaqlar</h1></Link>
                                </div>
                            </div> : null}
                        </li>
                        <li className="selection">
                            <Link to={"/products/notbuklar"} onClick={() => setOpen(false)}>Notbuklar</Link>
                        </li>
                        <li className="selection">
                            <Link to={"/products/tv"} onClick={() => setOpen(false)}>Tv</Link>
                        </li>
                    </ul>
                    <div className="button_area">
                        <button onClick={() => {
                            navigate("/login")
                            setOpen(false)
                        }} className='sign_in'>Daxil ol</button>
                        <button onClick={() => {
                            navigate("/register")
                            setOpen(false)
                        }} className='register'>Qeydiyyat</button>
                    </div>
                </div> : <div className='sidebar'>
                    <div className="logo_area">
                        <div onClick={sidebarHandlerClose} className='burger'><img src={burger} alt="Menu" /></div>
                        <img src={Logo} alt="Tello Logoo" />
                        <Link to="/" className="name">Tello</Link>
                    </div>
                    <ul className="header_selections2">
                        <li className="selection" onMouseOver={hoverHandler}>
                            <Link to={"/products/mobil-telefonlar"} onClick={() => setOpen(false)}>Mobil Telefonlar</Link>
                        </li>
                        <li className="selection" onMouseOver={hoverHandler2}>
                            <Link to={"/products/aksessuarlar"} onMouseOut={hoverOut2}>Aksessuarlar</Link>
                            {hover2 ? <div onMouseOver={hoverHandler2} onMouseOut={hoverOut2} className="product_section">
                                <div className="earphone_area">
                                    <Link to={"/products/qulaqliqlar"} onClick={() => setOpen(false)} className="earphone_name_header"><h1>Qulaqlıqlar</h1></Link>
                                </div>

                                <div className="earphone_area">
                                    <Link to={"/products/saatlar"} onClick={() => setOpen(false)} className="earphone_name_header"><h1>Saatlar</h1></Link>
                                </div>

                                <div className="earphone_area">
                                    <Link to={"/products/qolbaqlar"} onClick={() => setOpen(false)} className="earphone_name_header"><h1>Qolbaqlar</h1></Link>
                                </div>
                            </div> : null}
                        </li>
                        <li className="selection">
                            <Link to={"/products/notbuklar"} onClick={() => setOpen(false)}>Notbuklar</Link>
                        </li>
                        <li className="selection">
                            <Link to={"/products/tv"} onClick={() => setOpen(false)}>Tv</Link>
                        </li>
                    </ul>
                    <div className="button_area">
                        <button onClick={() => {
                            navigate("/login")
                            setOpen(false)
                        }} className='sign_in'>Daxil ol</button>
                        <button onClick={() => {
                            navigate("/register")
                            setOpen(false)
                        }} className='register'>Qeydiyyat</button>
                    </div>
                </div>}
            <div className="header">
                <div className="logo_area">
                    <div onClick={sidebarHandler} className='burger'><img src={burger} alt="Menu" /></div>
                    <img src={Logo} alt="Tello Logoo" />
                    <Link to="/" className="name">Tello</Link>
                </div>
                <form action='' className="search_area">
                    <button className='search_button'><img className='search_icon' src={Search} alt="Search" /></button>
                    <input onChange={searchHandler} value={write} placeholder='Axtarış...' type="search" className="search_input" />
                    {click ?
                        <div className="searching_area">
                            <div className="head">
                                {write !== "" ? <h1 className="final">Nəticələr</h1> : <h1 className="final">Son axtarışlar</h1>}
                                {write !== "" ? <p onClick={clear} className="clear_button">Təmizlə</p> : <p onClick={clearLocal} className="clear_button">Təmizlə</p>}
                            </div>
                            {write === "" ?
                                <>
                                    {localStorage.getItem("Last search1") ?
                                        <div className="last_searchs_area">
                                            {localStorage.getItem("Last search1") !== null ? <div onClick={() => setWrite(last1)} className="last_search">
                                                <h4 className="last">{last1}</h4>
                                            </div> : null}
                                            {localStorage.getItem("Last search2") !== null ? <div onClick={() => setWrite(last2)} className="last_search">
                                                <h4 className="last">{last2}</h4>
                                            </div> : null}
                                            {localStorage.getItem("Last search3") !== null ? <div onClick={() => setWrite(last3)} className="last_search">
                                                <h4 className="last">{last3}</h4>
                                            </div> : null}
                                            {localStorage.getItem("Last search4") !== null ? <div onClick={() => setWrite(last4)} className="last_search">
                                                <h4 className="last">{last4}</h4>
                                            </div> : null}
                                        </div> : null
                                    }
                                </>
                                :
                                <>
                                    {loading && write !== "" ?
                                        <>
                                            <div className="card is-loading">
                                                <div className="image">

                                                </div>
                                                <div className="content">
                                                    <h2></h2>
                                                    <p></p>
                                                </div>
                                            </div>
                                            <div className="card is-loading">
                                                <div className="image">

                                                </div>
                                                <div className="content">
                                                    <h2></h2>
                                                    <p></p>
                                                </div>
                                            </div>
                                            <div className="card is-loading">
                                                <div className="image">

                                                </div>
                                                <div className="content">
                                                    <h2></h2>
                                                    <p></p>
                                                </div>
                                            </div>
                                            <div className="card is-loading">
                                                <div className="image">

                                                </div>
                                                <div className="content">
                                                    <h2></h2>
                                                    <p></p>
                                                </div>
                                            </div>
                                        </>
                                        : products ?
                                            products?.map((item) => (
                                                <div onClick={() => {
                                                    navigate(`/product/${item?.id}`)
                                                    searchDeactive()
                                                    setWrite("")
                                                }} key={item?.id} id={item?.id} className="main_search">
                                                    <div className="img_product">
                                                        <img src={item?.image?.url} alt="iPhone" className="product_img" />
                                                    </div>
                                                    <div className="product_about">
                                                        <h1 className="product_name">{item?.name}</h1>
                                                        <h1 className="product_value">{item?.price?.raw} azn</h1>
                                                    </div>
                                                </div>
                                            )) :
                                            <div className='neto'>
                                                <h1>Məhsul tapılmadı</h1>
                                            </div>}
                                </>
                            }
                        </div> :
                        null
                    }
                </form>
                <div className="account_fav_product_area">
                    <Link to={"/login"} className="account_icon icon">
                        <img src={Account} alt="Person" />
                    </Link>

                    {/* <div className="fav_icon icon">
                        <img src={Fav} alt="Heart" />
                    </div> */}

                    <Link to={"/basket"} className="product_icon icon">
                        <img src={sebet} alt="Sebet" />
                        <div className="basketCount">{loadingBas ? <img src={loadingCountBasket} alt="" /> : productsBas?.length}</div>
                    </Link>
                </div>
            </div>
            <ul className="header_selections">
                <li className="selection" onMouseOver={hoverHandler}>
                    <Link to={"/products/mobil-telefonlar"}>Mobil Telefonlar</Link>
                </li>
                <li className="selection" onMouseOver={hoverHandler2}>
                    <Link to={"/products/aksessuarlar"} onMouseOut={hoverOut2}>Aksessuarlar</Link>
                    {hover2 ? <div onMouseOver={hoverHandler2} onMouseOut={hoverOut2} className="product_section">
                        <div className="earphone_area">
                            <Link to={"/products/qulaqliqlar"} className="earphone_name_header"><h1>Qulaqlıqlar</h1></Link>
                        </div>

                        <div className="earphone_area">
                            <Link to={"/products/saatlar"} className="earphone_name_header"><h1>Saatlar</h1></Link>
                        </div>

                        <div className="earphone_area">
                            <Link to={"/products/qolbaqlar"} className="earphone_name_header"><h1>Qolbaqlar</h1></Link>
                        </div>
                    </div> : null}
                </li>
                <li className="selection">
                    <Link to={"/products/notbuklar"}>Notbuklar</Link>
                </li>
                <li className="selection">
                    <Link to={"/products/tv"}>Tv</Link>
                </li>
            </ul>
        </div>
    )
}

export default Header