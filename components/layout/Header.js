import Image from 'next/image'



function Header(props) {
    return (
        <div className="flex flex-row  space-x-10 justify-center bg-blue-900 p-5 ">
                <Image
                    src="/amazon.png"
                    height={50}
                    width={160}
                />
                <div className='text-yellow-600 font-extrabold	 text-6xl'> Best-Sellers! </div>

                <div className='text-yellow-600 font-extrabold	 text-2xl'>You deserve the BEST !</div>
        </div>


    )
}

export default Header
