import Search from './Search';
import CardList from './CardList';


function ProductSearch() {
    const search = (searchText: string) => {
       // const { products, isLoading, isError } = useSearch(searchText);
    }
    return (
        <div>  
            <Search search={search}></Search>
    
        </div>
    )
}
export default ProductSearch;