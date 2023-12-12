

import { HashLink } from "react-router-hash-link";



const NavBar = () => {

    const navLinks =
        <>
            <li>
                <HashLink smooth to="#home">
                    Home
                </HashLink>
            </li>
            <li>
                <HashLink smooth to="#about">
                    About Me
                </HashLink>
            </li>
            <li>
                <HashLink smooth to="#education">
                    Education
                </HashLink>
            </li>
            <li>
                <HashLink smooth to="#skills">
                    Skills
                </HashLink>
            </li>
            <li>
                <HashLink smooth to="#projects">
                    Projects
                </HashLink>
            </li>
            <li>
                <HashLink smooth to="#contact">
                    Contact
                </HashLink>
            </li>


        </>

    return (
        <div className="navbar fixed z-10 py-3 bg-[#000000] shadow-yellow-600 shadow">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="text-[#fca311] font-semibold menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <HashLink smooth to='#top' className="text-[#fca311]"><img className="w-20"
                    src="https://github.com/Mitul3047/Image-link-hosting-repo/blob/main/portfolio/Yellow%20and%20Brown%20Modern%20Apparel%20Logo.png?raw=true" alt="" /></HashLink>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu font-semibold menu-horizontal px-1 text-[#fca311]">
                    {navLinks}
                </ul>
            </div>

        </div>
    );
};

export default NavBar;