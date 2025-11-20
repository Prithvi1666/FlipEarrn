import React from 'react'
import { assets } from '../assets/assets'
import { Link, useNavigate } from 'react-router-dom'
import { MenuIcon, XIcon } from 'lucide-react'

const Navbar = () => {

    const [menuOpen, setMenuOpen] = React.useState(false)
    const navigate = useNavigate()

  return (
     <nav className='h-20'>
                <div className='fixed left-0 top-0 right-0 z-100 flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 border-b border-gray-300 bg-white transition-all'>
                    <img onClick={()=> {navigate('/'); scrollTo(0,0)}} src={assets.logo} alt="logo" className='h-10 cursor-pointer'/>

                    {/* Desktop Menu */}
                    <div className='hidden sm:flex items-center gap-4 md:gap-8 max-md:text-sm text-gray-800'>
                        <Link to='/' onClick={() => scrollTo(0, 0)}> Home </Link>
                        <Link to='/marketplace' onClick={() => scrollTo(0, 0)}> Marketplace </Link>
                        <Link to='/messages' onClick={() => scrollTo(0, 0)}> Messages </Link>
                        <Link to='/my-listings' onClick={() => scrollTo(0, 0)}> My Listings </Link>
                        
                    </div>

                    <div>
                        <button className='max-sm:hidden cursor-pointer px-8 py-2 bg-indigo-500 hover:bg-indigo-600 transition text-white rounded-full'>Login</button>
                         <MenuIcon onClick={() => setMenuOpen(true)} className='sm:hidden'/>
                    </div>

                </div>
                {/* Mobile Menu */}
                <div className={`sm:hidden fixed inset-0 ${menuOpen ? 'w-full' : 'w-0'} overflow-hidden bg-white backdrop-blur shadow-xl rounded-lg z-[200] text-sm transition-all`}>
                    <div className='flex flex-col items-center justify-center h-full text-xl font-semibold gap-6 p-4'>
                        <Link to='/marketplace' onClick={() => setMenuOpen(false)}> Marketplace </Link>
                        <button>Messages</button>
                        <button>My Listings</button>
                        
                        <button className=' cursor-pointer px-8 py-2 bg-indigo-500 hover:bg-indigo-600 transition text-white rounded-full'>Login</button>
                        <XIcon onClick={() => setMenuOpen(false)} className='absolute size-8 right-6 top-6 text-gray-500 hover:text-gray-700 cursor-pointer'/>
                    </div>
                </div>
            </nav>
  )
}

export default Navbar