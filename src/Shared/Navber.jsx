import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";


const Navber = () => {
    const navigate = useNavigate();

    const { user, logOut, dark, toggleTheme } = useContext(AuthContext);

    console.log(user);

    const defualt = "https://i.ibb.co/9rczVxc/user.png";
    const handlelogout = () => {
        logOut()
            .then(res => {
                navigate('/');
            })
            .catch()
    }
    const links = [
        <li><NavLink to='/'>Home</NavLink></li>,
        <li><NavLink to='/addproduct'>Add Product</NavLink></li>,
        <li><NavLink to='mycart'>My Cart</NavLink></li>
    ]
    return (
        <div className="mx-10">
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {links}
                        </ul>
                    </div>
                    <Link>
                        <img className="h-[80px]" src='https://i.ibb.co/Krmz5xN/Bangla-Bites.jpg' alt="" />
                        <h2 className="text-xl font-semibold text-orange-500 hidden md:block">Bangla Bites</h2>
                    </Link>
                    {/* <a className="btn btn-ghost normal-case text-xl">daisyUI</a> */}
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-4">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    {/* <button onClick={toggleTheme}>
                        {dark ? "Light Mode" : "Dark Mode"}
                    </button> */}
                    {user ? (
                        <>

                            <div className="lg:flex-col flex gap-2 justify-center">
                                <div className="w-10 rounded-full">
                                    <img className="rounded-full flex justify-center items-center mx-auto lg:ml-5" src={user.photoURL || defualt} alt="user profile" />
                                </div>
                                <h2>{user.displayName}</h2>
                            </div>
                            
                            <button className="" onClick={handlelogout}>Sign Out</button>

                        </>
                    ) : (
                        <NavLink className="btn btn-ghost capitalize" to="/login">
                            Login
                        </NavLink>
                    )}

                </div>
            </div>
        </div>
    );
};

export default Navber;