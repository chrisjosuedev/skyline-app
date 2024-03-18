import { Link } from 'react-router-dom'
import { faComment, faHouse, faList, faQuestion } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const NavBar = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
      <Link to={'/'} className='navbar-brand'>
        <img src='/assets/logo.png' className='img-logo' alt='logo' width={'30px'} />
        <span className='brand ml-2'>
          <b> S K Y | M A R K E T </b>
        </span>
      </Link>
      <button
        className='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarSupportedContent'
        aria-controls='navbarSupportedContent'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <span className='navbar-toggler-icon'></span>
      </button>
      <div
        className='collapse navbar-collapse justify-content-end'
        id='navbarSupportedContent'
      >
        <ul className='navbar-nav'>
          <li className='nav-item mr-4'>
            <Link className='nav-link' to='/'>
              <FontAwesomeIcon icon={faHouse} /> Home
            </Link>
          </li>
          <li className='nav-item mr-4'>
            <a className='nav-link' href='#'>
              <FontAwesomeIcon icon={faList} /> Paquetes
            </a>
          </li>
          <li className='nav-item mr-4'>
            <a className='nav-link' href='#'>
              <FontAwesomeIcon icon={faComment} /> Reviews
            </a>
          </li>
          <li className='nav-item mr-4'>
            <a className='nav-link' href='#'>
              <FontAwesomeIcon icon={faQuestion} /> Soporte
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
