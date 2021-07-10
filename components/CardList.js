import { useProducts, useProductsGroupedByCat } from '../lib/data-hooks'
import Card from './ui/Card';
import Image from 'next/image'
import { Fragment } from 'react';
import Skeleton from 'react-loading-skeleton'


function CardList() {
    const { data, isLoading,isFetching } = useProducts();

    return (
        <Fragment>
            {isFetching && <div>
                <Skeleton width={180} height={24} />
                <Skeleton height={48} />
                <div className="my-4" />
                <Skeleton width={180} height={24} />
                <Skeleton height={48} />
                <div className="my-4" />
                <Skeleton width={180} height={24} />
                <Skeleton height={48} />
            </div>


            }
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
                                                    <Image
                                                        src={x.thumbnail}
                                                        height={150}
                                                        width={150}
                                                    ></Image>
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
