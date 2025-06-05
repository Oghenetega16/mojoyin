import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    const [showMenu, setShowMenu] = useState(true)

    const handleMenu = () => {
        setShowMenu(!showMenu)
    }

    return (
        <nav className="">
            <div className="flex justify-between items-center px-8 m-3 py-5 bg-white shadow-custom">
                <p className="text-lg">LOGO</p>
                {showMenu === true && <i class="fa-solid fa-bars text-2xl" onClick={handleMenu}></i>}
            </div>

            <div className={`${showMenu === true ? 'hidden' : 'block'} bg-white h-full w-8/9 p-5 absolute top-0 shadow-custom`}>
                <i class="fa-solid fa-xmark mb-10 text-2xl" onClick={handleMenu}></i>
                <ul className="space-y-5">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/menu'>Menu</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/contact'>Contact</Link></li>
                </ul>
                <div>
                    <ul className="flex space-x-5 text-white mt-10">
                        <li className="bg-neutral px-4 py-2"><Link to='/contact'>Make enquiries</Link></li>
                        <li className="bg-neutral px-4 py-2"><Link to='/contact'>Shop Now</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}