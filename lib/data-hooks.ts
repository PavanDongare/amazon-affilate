import React from 'react'
import axios from 'axios'
import { useQuery } from 'react-query'


export function useSearchNormal() {
  const [state, setState] = React.useReducer((_, action) => action, {
    isIdle: true,
  })
  const mutate = React.useCallback(async (values) => {
    setState({ isLoading: true })
    try {
      const data = axios.get(`/api/search-products?searchText`, values).then((res) => res.data)
      setState({ isSuccess: true, data })
    } catch (error) {
      setState({ isError: true, error })
    }
  }, [])
  return [mutate, state]
}



const fetchPosts = (searchText) => axios.get('/api/search-product',{ params:{'searchText':searchText}}).then((res) => res.data)


export function useProducts(searchText:string) {
  return useQuery('products', ()=> fetchPosts(searchText),
  { // rq options
    enabled:false, // to avoid default fetch
    refetchOnWindowFocus: false,
  })
}
