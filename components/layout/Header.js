import Image from 'next/image'



function Header() {
    return (
        <div className=" fixed w-full bg-blue-900 p-5 shadow-xl">
            <div className='text-gray-600 text-2xl'>
            <Image
                src="/amazon.png"
                layout='fixed'
                height={50}
                width={160}
            /> 
              Best-Sellers! Because you deserve only BEST ! </div>
            <input className="rounded-full  p-5 w-full text-gray-700 leading-tight "
                id="search" type="text" placeholder="search"
                name="search"
                value={''}
                onChange={() => { }}
            >
            </input>
        </div>


    )
}

export default Header
