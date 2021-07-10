import axios from 'axios'
import { useQuery } from 'react-query'
import _ from 'lodash';


const fetchPosts = (searchText) => axios.get('/api/search-product',{ params:{'searchText':searchText}}).then((res) => 
{
  var products = res.data ;
  var grouped = _.mapValues(_.groupBy(products, 'category'),
                          clist => clist.map(p => _.omit(p, 'category ')));

  console.log(grouped);
  var cat = Object.keys(grouped);
  return grouped;
}
)


export function useProducts(searchText:string) {
  return useQuery('products', ()=> fetchPosts(searchText),
  { // rq options
    enabled:false, // to avoid default fetch
    refetchOnWindowFocus: false,
    staleTime:Infinity
  })
}



