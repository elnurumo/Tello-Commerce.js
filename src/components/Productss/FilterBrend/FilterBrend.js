import React, { useState, useEffect } from 'react'
import plus from "../../../images/plus.svg"
import minus from "../../../images/minus.svg"
import { DebounceInput } from 'react-debounce-input';
import "./_Filter.scss"

const FilterBrend = ({ searchParams, setSearchParams, options, filterVisibility, setFilterVisibility }) => {
    const [expanded, setExpanded] = useState(false);
    const [query, setQuery] = useState([])

    const onClickHandler = () => {
        setFilterVisibility((prev) => !prev)
    }

    const changeHandler = (e) => {
        return (el) => {
            e.target.checked ? el.checked = true : el.checked = false
            const labels = []
            options.forEach((el2) => {
                if (el2.checked) {
                    labels.push(el2.label)
                }
            })
            if (labels.length > 0) {
                const params = Object.fromEntries([...searchParams])
                setSearchParams({ ...params, queries: labels.toString() })
            }
            else {
                searchParams.delete('queries');
                setSearchParams(searchParams);
            }
        }
    }

    useEffect(() => {
        if (query.length > 0) {
            searchParams.set("query", query)
            setSearchParams(searchParams)
        }

    }, [query, searchParams, setSearchParams, query.length])

    return (
        <>
            <div className="side-filter" >
                <div className="filter">
                    <span className='sortBy'>Brend</span>
                    <button onClick={onClickHandler} className="toggle">
                        {filterVisibility
                            ?
                            <img src={minus} alt="minus" />
                            :
                            <img src={plus} alt="plus" />
                        }
                    </button>
                </div>
                {filterVisibility &&
                    <div className="options-dropdown">
                        <ul className='options'>
                            {options.map((el) => {
                                return <li key={el.id} className='option'>
                                    <DebounceInput
                                        type="checkbox"
                                        onChange={(e) => changeHandler(e)(el)}
                                        name={el.label}
                                        id={el.label}
                                        defaultChecked={searchParams.get('queries')?.includes(el.label)}
                                        debounceTimeout={500}
                                    />
                                    <label htmlFor={el.label}>{el.label}</label>
                                </li>
                            })}
                        </ul>
                    </div>}
            </div >
        </>
    )
}

export default FilterBrend