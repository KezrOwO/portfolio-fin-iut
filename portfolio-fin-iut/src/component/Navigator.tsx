import { NavLink } from 'react-router-dom'

export default function Navigator() {
    return (
        <nav className="navbar">
            <ul className="nav-list">
                <li className="nav-item"><NavLink to="/home">Home</NavLink></li>
                <li className="nav-item"><NavLink to="/presentation">Presentation</NavLink></li>
                <li className="nav-item"><NavLink to="/projets">Projets</NavLink></li>
                <li className="nav-item"><NavLink to="/contact">Contact</NavLink></li>
            </ul>
        </nav>
    )
}