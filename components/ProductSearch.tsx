import Search from './Search';
import CardList from './CardList';
import  useSearch from '../lib/data-hooks'

function ProductSearch() {
    const search = (searchText: string) => {
       // const { products, isLoading, isError } = useSearch(searchText);
    }
    return (
        <div>  
            <Search search={search}></Search>
            <CardList></CardList>
        </div>
    )
}
export default ProductSearch;