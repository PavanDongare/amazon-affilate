import Image from 'next/image'
import { useDebounce } from 'use-debounce';
import { Fragment, useState, useEffect } from 'react';
import { useProducts, useSearch } from '../lib/data-hooks'


function Search(props) {
    const [searchStr, setsearch] = useState('');
    const [value] = useDebounce(searchStr, 1000);
    const { data , refetch } = useProducts(searchStr);

    const onChange = e => {
        setsearch(e.target.value);
    }
    useEffect(() => {
        if(searchStr)
            refetch();
    }, [value])

    return (
        <Fragment>
            {/* {  JSON.stringify(value) } */}
            <input className="rounded-full m-3 p-5  w-3/4 text-gray-700 justify-between  focus:outline-none "
                id="search" type="text" placeholder="search"
                name="search"
                value={searchStr}
                onChange={(e) => { onChange(e) }}
            >
            </input>

        </Fragment>


     
    )
}

export default Search
