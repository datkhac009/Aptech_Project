import { useEffect, useState } from "react"
import "./index.scss"

import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCartShopping, faMagnifyingGlass, faPhone, faUser } from "@fortawesome/free-solid-svg-icons"


const Header = () => {
    const [isheight, setIsheight] = useState(false)
    const [ismenuchild, setIsmenuchild] = useState(false)
    const [isIndex,setIndex]   = useState(0)
    const handleClickMenuchild = (index) => {
        setIsmenuchild(!ismenuchild)
        setIndex(index)
        
       
      
    }
    useEffect(() => {
        const handleScroll = () => {
            setIsheight(window.scrollY > 100)
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isheight]);
    console.log(isheight)
    // console.log(scrollY)
    console.log(ismenuchild)
    console.log(isIndex)
    return (
        <header className="header">
            {/* headerblock */}
            <nav className={`header-block transition-all ${isheight ? 'header-small' : ''} `}>
                <div className="logo">
                    <img src="/src/assets/img/logo.png" alt=""></img>
                </div>
                <div className="search  ">
                    <form>
                        <fieldset>
                            <input type="text" placeholder="Search by product or keyword..." />
                            <button type="submit" className="search-btn w-[50px] px-4 py-0 mb-0 bg-[#ddd] border-none text-[#333]"><FontAwesomeIcon icon={faMagnifyingGlass} /></button>

                        </fieldset>
                    </form>
                </div>
                <div className="user">
                    <div className="phone">
                        <p><span><FontAwesomeIcon icon={faPhone} /></span> 03-2735-6623 </p>
                    </div>
                    <div className="account">
                        <span><i><FontAwesomeIcon icon={faUser} /></i></span>
                        <a href="#"> Sign in </a>
                        <span>/ </span>
                        <a href="#">Register</a>
                    </div>
                    <div className="shopping">
                        <a href="#"> <span><FontAwesomeIcon icon={faCartShopping} /></span> Cart </a>
                    </div>
                </div>
            </nav>

            {/* menu */}
            <div className="navMenuPages">
                <ul className="navMenuPages__list">
                    <li onClick={() => { handleClickMenuchild(1) }} className={`navMenuPages__parent ${ismenuchild && isIndex === 1  ? 'active' : 'hiddens'}`}> <a href="#">Spices</a>
                        <ul className="navMenuPages__child ">
                            <li> <a href="#">Spices:A_C</a> </li>
                            <li> <a href="#">Spices:A_C</a> </li>
                            <li> <a href="#">Spices:A_C</a> </li>
                            <li> <a href="#">Spices:A_C</a> </li>
                            <li> <a href="#">Spices:A_C</a> </li>
                            <li> <a href="#">Spices:A_C</a> </li>
                            <li> <a href="#">Spices:A_C</a> </li>
                            <li> <a href="#">Spices:A_C</a> </li>
                        </ul>
                    </li>
                    <li onClick={() => { handleClickMenuchild(2) }} className={`navMenuPages__parent ${ismenuchild && isIndex === 2  ? 'active' : 'hiddens'}`}> <a href="#">Spices</a>
                        <ul className="navMenuPages__child ">
                            <li> <a href="#">Spices:A_C</a> </li>
                            <li> <a href="#">Spices:A_C</a> </li>
                            <li> <a href="#">Spices:A_C</a> </li>
                            <li> <a href="#">Spices:A_C</a> </li>
                            <li> <a href="#">Spices:A_C</a> </li>
                            <li> <a href="#">Spices:A_C</a> </li>
                            <li> <a href="#">Spices:A_C</a> </li>
                            <li> <a href="#">Spices:A_C</a> </li>
                        </ul>
                    </li>
                    <li> <a href="#">Dehydrated Fruits &amp; Vegetables</a></li>
                </ul>

            </div>
            {/* <nav className="header__nav">
                <ul className="header__list">
                    <li className="header__item">
                        <Link className="header__link" to="/homepage">Home</Link>
                    </li>
                    <li className="header__item">
                        <Link className="header__link" to="/about">About</Link>
                    </li>
                </ul>
            </nav> */}
        </header>
    )
}

export default Header
