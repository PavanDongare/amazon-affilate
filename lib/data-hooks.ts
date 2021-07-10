import axios from 'axios'
import { useQuery } from 'react-query'



const fetchPosts = (searchText) => axios.get('/api/search-product',{ params:{'searchText':searchText}}).then((res) => res.data)

export function useProducts(searchText:string) {
  return useQuery('products', ()=> fetchPosts(searchText),
  { // rq options
    enabled:false, // to avoid default fetch
    refetchOnWindowFocus: false,
    staleTime:Infinity
  })
}
