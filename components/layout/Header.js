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

            <div className=' text-white font-extrabold	px-10 text-3xl '>
                Best Sellers
                <div className='text-yellow-500 font-extrabold	 text-2xl'>You deserve the BEST !</div>
            </div>

            <a
                    href="https://www.amazon.com?tag=onlybest0b-20"
                    target='_blank'
                > <Image
                    src="/usa.jpg"
                    height={50}
                    width={100}
                ></Image> </a>

        </div>


    )
}

export default Header
