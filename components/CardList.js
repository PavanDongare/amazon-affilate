import { useProducts, useProductsGroupedByCat } from '../lib/data-hooks'
import Card from './ui/Card';
import  LoaderSkeleton from './layout/LoaderSkeleton'
import Image from 'next/image'
import { Fragment } from 'react';
import Skeleton from 'react-loading-skeleton'




function CardList() {
    const { data, isFetching } = useProducts();

    return (
        <Fragment>
            {isFetching && <LoaderSkeleton></LoaderSkeleton>
            }
            
            {(!data ) && <Image src="/trans.png" layout="responsive" height='100' width='200' /> }
           
            { data && Object.keys(data).length === 0 && <Image src="/noproduct.png" layout="responsive" height='100' width='200'  />  }
       
            {
                data && Object.keys(data).map((e, i) => {
                    return (
                        <div key={e}>
                            <Card>
                                <div
                                    className='bg-blue-900
                                                 rounded-md 
                                                text-white 
                                                text-2xl 
                                                w-full
                                                 h-10
                                                  px-10'>
                                    {e}
                                </div>
                            </Card>
                            <Card>
                                <div className='flex flex-wrap'>
                                    {data[e].map((x) => {
                                        return (<div>
                                            <div className='flex flex-col w-40 p-2' key={x.name}>
                                                <div>
                                                    <a  
                                                        href={x.url+'?tag='}
                                                        target='_blank'
                                                        > <Image
                                                        src={x.thumbnail}
                                                        height={150}
                                                        width={150}
                                                    ></Image> </a>
                                                    
                                                </div>
                                                <div>  {x.name} </div>
                                            </div>
                                        </div>)
                                    })}
                                </div>
                            </Card>
                        </div>)
                })
            }
        </Fragment>
    )
}






export default CardList
