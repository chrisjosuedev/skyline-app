import {
  faChartLine,
  faTag,
  faUserGear,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink } from 'react-router-dom'

export const Sidemenu = () => {
  return (
    <div className='card'>
      <ul className='list-group list-group-flush'>
        <li className='list-group-item p-0'>
          <NavLink
            className={({ isActive }) =>
              `btn btn-sidebar btn-block rounded-0 text-left shadow-none ${
                isActive ? 'side-active' : ''
              }`
            }
            to={'/'}
            end
          >
            <FontAwesomeIcon icon={faChartLine} />
            <span className='ml-2'>Dashboard</span>
          </NavLink>
        </li>
        <li className='list-group-item p-0'>
          <NavLink
            className={({ isActive }) =>
              `btn btn-sidebar btn-block rounded-0 text-left shadow-none ${
                isActive ? 'side-active' : ''
              }`
            }
            to={'/clientes'}
          >
            <FontAwesomeIcon icon={faUserGear} />
            <span className='ml-2'>Clientes</span>
          </NavLink>
        </li>
        <li className='list-group-item p-0'>
          <NavLink
            className={({ isActive }) =>
              `btn btn-sidebar btn-block rounded-0 text-left shadow-none ${
                isActive ? 'side-active' : ''
              }`
            }
            to={'/ventas'}
          >
            <FontAwesomeIcon icon={faTag} />
            <span className='ml-2'>Ventas</span>
          </NavLink>
        </li>
      </ul>
    </div>
  )
}
