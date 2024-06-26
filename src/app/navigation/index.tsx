'use client'

import Link from "next/link";


export default function Navbar() {
    
    return (
        <>
            <div className="navbar">
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
                            <ul tabIndex={0} className="menu menu-sm dropdown-content z-10 bg-primary p-0 [&_li>*]:rounded-none">
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
                    <div className="dropdown dropdown-bottom dropdown-end">
                        <div className="btn btn-ghost btn m-1" role="button" tabIndex={0}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                 d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"/>
                            </svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content rounded-box w-52 bg-primary z-10 border-info">
                            <h2 className="font-bold">Thèmes</h2>
                            <li>
                                <label className="label cursor-pointer gap-4">
                                    <span className="label-text">Par défaut</span>
                                    <input type="radio" name="theme-radios" className="radio theme-controller" value="default"/>
                                </label>
                            </li>
                            <li>
                                <label className="label cursor-pointer gap-4">
                                    <span className="label-text">Rétro</span>
                                    <input type="radio" name="theme-radios" className="radio theme-controller" value="retro"/>
                                </label>
                            </li>
                            <li>
                                <label className="label cursor-pointer gap-4">
                                    <span className="label-text">Cupcake</span>
                                    <input type="radio" name="theme-radios" className="radio theme-controller" value="cupcake"/>
                                </label>
                            </li>
                            <li>
                                <label className="label cursor-pointer gap-4">
                                    <span className="label-text">Lavender</span>
                                    <input type="radio" name="theme-radios" className="radio theme-controller" value="lavender"/>
                                </label>
                            </li>
                            <li>
                                <label className="label cursor-pointer gap-4">
                                    <span className="label-text">Modern</span>
                                    <input type="radio" name="theme-radios" className="radio theme-controller" value="modern"/>
                                </label>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}