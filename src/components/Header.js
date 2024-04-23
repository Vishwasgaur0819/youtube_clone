import React, { useEffect, useState } from 'react'
import { logo, searchApi } from '../utills/constant'
import { useSelector, useDispatch } from 'react-redux';
import { cacheSearchResults } from '../utills/redux_store/slices/searchSlice';
import { toggleMenu } from '../utills/redux_store/slices/appSlice';

const Header = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const searchResultsObj = useSelector(store => store.search);

    const dispatch = useDispatch();
    const toggleSideBar = () => {
        dispatch(toggleMenu())
    }

    const getSuggestions = async () => {
        if (searchResultsObj?.[searchQuery]) {
            setSuggestions(searchResultsObj[searchQuery])
            return
        }
        try {
            const res = await fetch(searchApi + searchQuery);
            const textData = await res.text();
            let json = JSON.parse(textData)?.[1]
            // console.log("suggestion data", json);
            setSuggestions(json)

            dispatch(cacheSearchResults([searchQuery, json]));
        } catch (e) {
            console.error(e)
        }
    }

    useEffect(() => {
        let timer = setTimeout(() => { getSuggestions() }, 1000);
        return () => clearInterval(timer);
    }, [searchQuery])


    return (
        <div className='grid grid-flow-col p-5 shadow-md' >
            <div className='flex col-span-1' >
                <img onClick={() => toggleSideBar()} className='h-8 cursor-pointer' alt='menu' src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/207px-Hamburger_icon.svg.png' />
                <img className='h-20 cursor-pointer' alt='logo' src={'logo'} />
            </div>
            <div className='col-span-10' >
                <div className='w-3/5' >
                    <div className='w-full'>
                        <input onFocus={() => setShowSuggestions(true)} onBlur={() => setShowSuggestions(false)} value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className='px-5 w-11/12 h-10 border border-gray-400 rounded-l-full ph-2' type='text' />
                        <button className='border border-gray-400 rounded-r-full h-10 px-5 py-2 bg-gray-200 w-1/12' >🔍 </button>
                    </div>
                    {showSuggestions && <div className=' absolute bg-white shadow-lg mt-2 rounded-lg border w-96'>
                        <ul>
                            {suggestions?.map(item => <li key={item} className='px-5 py-2 shadow-sm border hover:bg-gray-200' >{item}</li>)}
                        </ul>
                    </div>}
                </div>
            </div>
            <div className='col-span-1' >
                <img className='h-10' alt='user' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzGMmExHRKg0KgcmgcSOj-ZJQcSvBWECBwCw&s' />
            </div>
        </div>
    )
}

export default Header