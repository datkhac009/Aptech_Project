import { useEffect, useState } from "react"
import "./index.scss"
    
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCartShopping, faMagnifyingGlass, faPhone, faUser } from "@fortawesome/free-solid-svg-icons"


const Header = () => {
    const[isheight, setIsheight] = useState(false)

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
    return (
        <header className="header">
            <nav className={`header-block transition-all ${isheight ?'header-small' : ''}`}>
                <div className="logo">
                    <img src="/src/assets/img/logo.png" alt=""></img>
                </div>
                <div className="search  ">
                <form>
                    <fieldset>
                        <input type="text" placeholder="Search by product or keyword..."/>
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
