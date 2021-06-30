import Image from 'next/image'



function Header() {
    return (
        <div className="bg-gray-800 flex items-center p-2  shadow-xl">


            <Image 
                src="/download.png" 
                layout='fixed'
                height ={50}
                width = {120}
            />

            <div className='text-white m-5 text-lg'>Search Best Sellling producs</div>

            <input className="rounded-full  p-5 w-full text-gray-700 leading-tight focus:outline"
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
