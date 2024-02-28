import React, { useState } from'react'
import logo from '../assets/Logo.svg'
import {Link} from 'react-router-dom'

const Navbar = (props)=>{
    let isLoggedIn=props.isLoggedIn;
    let setIsLoggedIn=props.setIsLoggedIn;
    
    
    return (

        <div className='flex justify-evenly'>
            <Link to="/">

                <img src={logo} alt="Logo" width={160} height={32} loading='lazy'/>

            </Link>
            <nav>
                <ul className='flex gap-3'>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/">About</Link>
                    </li>
                    <li>
                        <Link to="/">Contact</Link>
                    </li>


                </ul>


           </nav>

           {/* LogIn- LogOut- SignUp- Button */}

            {/* hm condition bhi add krenge button men isliye hm alag tarah se button create krenge */}
           
           <div className='flex ml-5 mr-3 gap-3'>
                {/* jb loggedIn nhi hoga tb hmara ye Login button visible hoga */}
                {     !isLoggedIn &&
                    <Link to="/login">
                        <button>Log In</button>
                    </Link>
                }
                {/* jb loggedIn nhi hoga tb hmara ye signup vala button visible hoga 
                logged nhi hai to sign up dikhega*/}

                {   !isLoggedIn &&
                    <Link to="/signup">
                        <button>Sign Up</button>
                    </Link>
                }
                {/* Log out vala button visible th dikhega jb user log in hoga */}
                {  isLoggedIn &&
                    <Link to="/">
                        <button>LogOut</button>
                    </Link>
                } 
                {/* dashboard bhi tabhi dikhega jb user logged in hoga */}
                {   isLoggedIn &&
                    <Link to="/dashboard">
                        <button>Dashboard</button>
                    </Link>
                }




           </div>


        </div>
    )
}
export default Navbar;