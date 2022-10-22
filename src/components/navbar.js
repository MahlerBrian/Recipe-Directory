import { Link } from 'react-router-dom'

//styles
import './navbar.css'
import SearchBar from './searchBar'

export default function Navbar() {
  return (
    <div className="navbar">
        <nav>
            <Link to='/' className='brand'>
                <h1>Burning Sensation</h1>
            </Link>
            <SearchBar />
            <Link to='/create'>Enter a Recipe</Link>

        </nav>
    </div>
  )
}
