import "./index.scss"

import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header className="header">
            <nav className="header__nav">
                <ul className="header__list">
                    <li className="header__item">
                        <Link className="header__link" to="/">Home</Link>
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
