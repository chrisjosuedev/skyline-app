import { useEffect, useState } from 'react'
import { SalesTable } from '../components/sales/SalesTable.jsx'
import salesApi from '../../api/salesApi.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faListCheck } from "@fortawesome/free-solid-svg-icons"

export const SalesView = () => {
  const [sales, setSales] = useState([])

  useEffect(() => {
    const fetchSales = async () => {
      try {
        const {
          data: { data },
        } = await salesApi.get('/sales/recents')
        setSales(data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchSales()
  }, [])

  return (
    <div className='row'>
      <div className='col-md-12'>
        <h3 style={{ fontSize: '20px', fontWeight: 'bold' }}>Ventas</h3>
        <hr />
        <span className='badge badge-success'>
          <FontAwesomeIcon icon={faListCheck} />
          {' '}Ultimas 10 ventas realizadas
        </span>
      </div>
      <div className='col-md-12'>
        <SalesTable data={sales} />
      </div>
    </div>
  )
}
