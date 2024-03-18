import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { NavBar } from '../../ui/components/NavBar'
import { Sidemenu } from '../components/Sidemenu'
import { faTableColumns } from "@fortawesome/free-solid-svg-icons"

export const AppLayout = ({ children }) => {
  return (
    <>
      <NavBar />
      <div className='container-fluid p-4'>
        <h3 className='mb-4' style={{ fontSize: '20px', fontWeight: 'bold' }}>
          <FontAwesomeIcon icon={faTableColumns} /> Menú Principal
        </h3>
        <div className='row'>
          <div className='col-md-2 mb-4'>
            <Sidemenu />
          </div>
          <div className='col-md-10'>{children}</div>
        </div>
      </div>
    </>
  )
}
