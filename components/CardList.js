import { useProducts, useProductsGroupedByCat } from '../lib/data-hooks'
import Card from './ui/Card';
import Image from 'next/image'
import { Fragment } from 'react';


function CardList() {
    const { data, isLoading } = useProducts();
    
    return (
        <Fragment>
             {
                data &&  Object.keys(data).map((e,i)=>{ return(
                    <div>
                        {e}
                        <br></br>
                        {JSON.stringify(data[e])}
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                    </div>)
            
                })
             }
        </Fragment>
    )
}
 
         
     
    


export default CardList
