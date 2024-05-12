import Logo from '../../assets/images/logo.svg'
import NavData from '../../assets/data/navbar_nav'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center my-7 font-inter'>
        <div className=' w-48 h-10'>
            <img src={Logo} alt="main logo"/>
        </div>
        <nav>
            <ul className='flex gap-x-10 items-center'>
                {
                    NavData.map((items,id)=>(
                        <li kley={id} className='cursor-pointer hover:scale-105 hover:font-medium transition-all duration-200'>
                            <a href={items.link}>
                                {items.title}
                            </a>
                        </li>
                    ))
                }
                <button className='text-white font-medium px-10 py-3 bg-gradient-to-b 
                from-[#06286E] to-[#164EC0] rounded-[32px] 
                active:scale-90
                transition-all duration-200'>LogIn</button>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar