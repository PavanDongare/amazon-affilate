import Image from 'next/image'



function Header(props) {
    return (
        <div className="flex flex-col sm:flex-row   bg-blue-900 p-2 ">
                <Image className='rounded-lg '
                    src="/amazon.png"
                    height={100}
                    width={200}
                />
                <div className='text-yellow-600 font-extrabold	px-10 text-3xl'>            
                    Best-Sellers
                <div className='text-yellow-600 font-extrabold	 text-2xl'>You deserve the BEST !</div>
                 </div>

                
        </div>


    )
}

export default Header
