import Image from 'next/image'
import { useDebounce } from 'use-debounce';
import { Fragment, useState, useEffect } from 'react';
import { useSearch } from '../lib/swr-hooks'


function Search(props) {
    const [searchObj, setsearch] = useState('');

    const [value] = useDebounce(searchObj, 500);

    const onChange = e => {
        setsearch(e.target.value);
    }
    useEffect(() => {
        props.search(value);
    }, [value])

    return (
        <Fragment>
            {/* {  JSON.stringify(value) } */}
            <input className="rounded-full m-3 p-5 w-3/4 text-gray-700 justify-between  focus:outline-none "
                id="search" type="text" placeholder="search"
                name="search"
                value={searchObj}
                onChange={(e) => { onChange(e) }}
            >
            </input>

        </Fragment>


     
    )
}

export default Search
