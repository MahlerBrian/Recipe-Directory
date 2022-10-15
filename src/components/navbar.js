import { Link } from 'react-router-dom'

//styles
import './navbar.css'

export default function Navbar() {
  return (
    <div className="navbar">
        <nav>
            <Link to='/' className='brand'>
                <h1>Burning Sensation</h1>
            </Link>
            <Link to='/create'>Enter a Recipe</Link>

        </nav>
    </div>
  )
}
