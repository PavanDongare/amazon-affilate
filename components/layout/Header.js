import Image from 'next/image'
import Search from '../Search'
import Link from 'next/link'
import router from 'next/router'



function Header(props) {
  
    return (
        <div className="sticky top-0 z-50 flex flex-col sm:flex-row   bg-blue-900 p-2 ">
            <Link href="/">
         
            <Image className='rounded-lg cursor-pointer'
                    src="/amazon.png"
                 
                    height={10}
                    width={120}
                    onClick={() => router.reload()}
                />
    

            
            </Link>
                
                    <div className='flex-grow'>
                    <Search></Search>
                </div>
              
                <div className='text-white font-extrabold	px-10 text-3xl'>            
                    Best Sellers
                    <div className='text-yellow-600 font-extrabold	 text-2xl'>You deserve the BEST !</div>
                </div>
            
                <Image className='rounded-lg'
                    src="/usa.jpg"
        
                    height={10}
                    width={120}
                />
               
        </div>


    )
}

export default Header
