import { Menu } from 'lucide-react'

const Navbar = ({ visitCount}) => {
    
    

    return (
        <div className='bg-white'>
            {/* <Button addVisit={addVisit}></Button> */}
            <nav className="flex items-center justify-between px-8 py-4 bg-white border-b border-gray-100">

                <div className="flex items-center">
                    {/* <p className='inline-block lg:hidden'>
                        <Menu></Menu>
                    </p> */}
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="pt-2 btn btn-ghost btn-circle inline-block lg:hidden">
                                <Menu></Menu>
                            </div>
                            <ul
                                tabIndex="-1"
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                                <li><a>Products</a></li>
                                <li><a>Features</a></li>
                                <li><a>Pricing</a></li>
                                <li><a>Testimonials</a></li>
                                <li><a>FAQ</a></li>
                            </ul>
                        </div>
                        <h1 className="text-xl  md:text-3xl font-bold text-[#7C3AED]">DigiTools</h1>
                    </div>
                    </div>


                    <div className="hidden lg:flex items-center gap-8">
                        <a href="#" className="text-gray-600 hover:text-[#7C3AED] transition-colors font-medium">Products</a>
                        <a href="#" className="text-gray-600 hover:text-[#7C3AED] transition-colors font-medium">Features</a>
                        <a href="#" className="text-gray-600 hover:text-[#7C3AED] transition-colors font-medium">Pricing</a>
                        <a href="#" className="text-gray-600 hover:text-[#7C3AED] transition-colors font-medium">Testimonials</a>
                        <a href="#" className="text-gray-600 hover:text-[#7C3AED] transition-colors font-medium">FAQ</a>
                    </div>


                    <div className="flex items-center gap-6">
                        <button>
                            <div className="indicator">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 md:h-6 w-4 md:w-6" fill="none" viewBox="0 0 24 24" stroke="black"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /> </svg>
                                <span className=" badge-sm indicator-item  text-red-500 text-[10px] md:text-[16px] font-bold"> {visitCount.length}</span>
                            </div>
                        </button>

                        <button className="hidden md:inline-block text-gray-700 font-medium hover:text-[#7C3AED] transition-colors">
                            Login
                        </button>

                        <button className="bg-gradient-to-r from-[#7C3AED] to-[#A855F7] text-[10px] md:text-sm text-white px-6 py-2.5 rounded-full font-medium hover:opacity-90 transition-all shadow-md">
                            Get Started
                        </button>
                    </div>
            </nav>
        </div>
    );
};

export default Navbar;