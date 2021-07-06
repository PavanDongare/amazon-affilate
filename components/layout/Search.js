import Image from 'next/image'
import { useDebounce } from 'use-debounce';
import { Fragment, useState, useEffect } from 'react';


function Search(props) {
    const [searchObj, setsearch] = useState({ 'search': '' });

    const [value] = useDebounce(searchObj, 1000);
    var { search } = searchObj;
    const onChange = e => {
        setsearch({ ...searchObj, [e.target.name]: e.target.value });
    }
    useEffect(() => {
        if (searchObj.search)
            props.onChange(searchObj);
    }, [value])

    return (

            <input className="rounded-full m-3 p-5 w-3/4 text-gray-700 justify-between  focus:outline-none "
                id="search" type="text" placeholder="search"
                name="search"
                value={search}
                onChange={(e) => { onChange(e) }}
            >
            </input>
     
    )
}

export default Search
