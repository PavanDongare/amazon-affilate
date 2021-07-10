import { useProducts, useProductsGroupedByCat } from '../lib/data-hooks'
import Card from './ui/Card';
import Image from 'next/image'
import { Fragment } from 'react';


function CardList() {
    const { data, isLoading } = useProducts();

    return (
        <Fragment>
            {
                data && Object.keys(data).map((e, i) => {
                    return (
                        <div>
                           
                            <Card>  <div className='bg-blue-900 rounded-md text-white text-2xl w-full h-10 '> {e} </div> </Card>
                           
                            <Card>
                            <div className='flex flex-wrap'>
                            {data[e].map((x) => {
                                return (<div>
                                    <div className='flex flex-col w-40 p-2'
                                        key={x.name}
                                    >
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
