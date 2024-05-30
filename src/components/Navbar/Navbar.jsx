import {Link, NavLink} from "react-router-dom";
import LogoImg from '../../assets/logotravel.png'
import '../../index.css'
import {FaCaretDown} from 'react-icons/fa'

const dropDownLinks = [
    {
        name: "Our Services",
        link: "/#services"
    },
    {
        name: "Top Brands",
        link: "/#mobile_brands"
    },
    {
        name: "Location",
        link: "/#location"
    }
]

const Navbar = () =>{
    return(
        <>
        <div className='fixed top-0 right-0 w-full bg-white text-black shadow-md'>
            <div className='bg-gradient-to-r from-primary to-secondary text-white'>
                <div className='container py-[2px] sm:block hidden'>
                    <div className='flex justify-between'>
                        <p>20% off on next booking</p>
                        <p>Mobile No. +91 12334455</p>
                    </div>
                </div>
            </div>
            <div className='container py-3 sm:py-0'>
                <div className='flex justify-between items-center'>
                    {/*logo section */}
                    <div>
                        <Link to='/' onClick={() => window.scrollTo(0,0)}>
                            <img  src={LogoImg} alt='img' className='h-16'/>
                        </Link>
                    </div>
                    {/* Desktop nav links section */}
                    <div className='hidden sm:block'>
                        <ul className='flex items-center gap-6'>
                            <li className='py-4'>
                                <NavLink to='/' activeClassName='active'  onClick={() => window.scrollTo(0,0)}>
                                    Home
                                </NavLink>
                            </li>
                            <li className='py-4' >
                                <NavLink to='/blogs' activeClassName='active' onClick={() => window.scrollTo(0,0)}>
                                    Blogs
                                </NavLink>
                            </li>
                            <li className='py-4'>
                                <NavLink to='/places' activeClassName='active' onClick={() => window.scrollTo(0,0)}>
                                    Best places
                                </NavLink>
                            </li>
                            <li className='py-4'>
                                <NavLink to='/about' activeClassName='active' onClick={() => window.scrollTo(0,0)}>
                                    About
                                </NavLink>
                            </li>
                            <li className='py-4 relative group cursor-pointer'>
                                <div className='dropdown flex items-center'>
                                    <span>Quick Links</span>
                                    <span>
                                        <FaCaretDown
                                        className='transition-all duration-200 group-hover:rotate-180'
                                        />
                                    </span>
                                </div>
                                <div className='absolute -left-9 z-[9999] hidden  group-hover:block shadow-md
                                text-black w-[150px] bg-white p-2'>
                                    <ul >
                                        {dropDownLinks.map((data ) => {
                                            return(
                                                <li key={data.name}>
                                                <a className='inline-block w-full rounded-md p-2 hover:bg-primary/20'
                                                   href={data.link}>
                                                    {data.name}
                                                </a>
                                            </li>)
                                        })}
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Navbar