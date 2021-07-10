import { useProducts } from '../lib/data-hooks'
import Card from './ui/Card';
import Image from 'next/image'


function CardList() {
    const { data, isLoading } = useProducts();
    return (

        <div className='flex flex-wrap'>
            {data && data.map((x) => {
                return (
                    <Card>
                        <div className='flex flex-col w-40'
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
                          <div> {x.category} </div>
                            
                        </div>
                    </Card>)
            })}
        </div>
    )
}

export default CardList
