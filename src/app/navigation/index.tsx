'use client'

import Link from "next/link";
import { useEffect, useState } from "react";


export default function Navbar() {
    const [isChecked, setChecked] = useState(false);



    const handleClick = ()=> {
        setChecked(!isChecked);
    }
    



    
    return (
        <>
            <div className="navbar text-neutral bg-info mb-4">
                <div className="flex-none">
                    <div className="dropdown dropdown-bottom">
                        <div className="btn btn-ghost" role="button" tabIndex={0}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current">
							    <path
						 	     strokeLinecap="round" 
						 	     strokeLinejoin="round" 
						 	     strokeWidth="2" 
						 	     d="M4 6h16M4 12h16M4 18h16">
							    </path>
						    </svg> 
                        </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content z-10 bg-info p-0 [&_li>*]:rounded-none">
                                <li>
                                    <Link href={"/"}>Accueil</Link>
                                </li>
                                <li>
                                    <Link href={"/portfolio"}>Portfolio</Link>
                                </li>
                            </ul>
                    </div>

                </div>
                <div className="flex-1">
                    <p  className="text-xl">Mon Portfolio</p>
                </div>
                <div className="flex-none">
                    <label className="flex cursor-pointer gap-2">
                        <svg
                         xmlns="http://www.w3.org/2000/svg"
                         width="20"
                         height="20"
                         viewBox="0 0 24 24"
                         fill="none"
                         stroke="currentColor"
                         strokeWidth="2"
                         strokeLinecap="round"
                         strokeLinejoin="round">
                         <circle cx="12" cy="12" r="5" />
                         <path
                         d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
                        </svg>
                        <input type="checkbox" value={"dark"} className="toggle theme-controller"/>
                        <svg
                         xmlns="http://www.w3.org/2000/svg"
                         width="20"
                         height="20"
                         viewBox="0 0 24 24"
                         fill="none"
                         stroke="currentColor"
                         strokeWidth="2"
                         strokeLinecap="round"
                         strokeLinejoin="round">
                            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                        </svg>
                    </label>
                </div>
            </div>
        </>
    )
}