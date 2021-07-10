import { useProducts } from '../lib/data-hooks'
import Card from './ui/Card';
import Image from 'next/image'


function CardList() {
    const { data, isLoading } = useProducts();
    return (

        <div>
            {data && data.map((x) => {
                return (
                    <Card>
                        <div className='flex flex-col '>
                            <div>
                            <Image
                                src={x.thumbnail}
                                height={100}
                                width={100}
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
