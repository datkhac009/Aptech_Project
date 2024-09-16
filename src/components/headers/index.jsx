import { useEffect, useState } from "react"
import "./index.scss"

import { Link } from 'react-router-dom'


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
      }, []);
    console.log(isheight)
    // console.log(scrollY)
    return (
        <header className="header">
            <nav className={`header-block transition-all ${isheight ?'hidden' : 'block'}`}>
                <div className="logo">
                    <img src="" alt=""></img>
                </div>
                <div className="search">
                <form>
                    <fieldset>
                        <input type="text" placeholder="Search by product or keyword..."/>
                        <button type="submit">search</button>
                    </fieldset>
                </form>
                </div>
                <div className="user">
                    <div className="phone">
                        <p> <span></span> 0327356623 </p>
                    </div>
                    <div className="account">
                        <i></i>
                        <a href="#">Sign in </a>
                        <span>/</span>
                        <a href="#">Register</a>
                    </div>
                    <div className="shopping">
                        <a href="#"> <span></span> Cart </a>
                    </div>
                </div>
            </nav>
            <nav className="header__nav">
                <ul className="header__list">
                    <li className="header__item">
                        <Link className="header__link" to="/homepage">Home</Link>
                    </li>
                    <li className="header__item">
                        <Link className="header__link" to="/about">About</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
