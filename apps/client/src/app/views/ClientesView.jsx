import { useEffect, useState } from 'react'
import salesApi from '../../api/salesApi'
import { ImportantClientsTable } from '../components/clients/ImportantClientsTable'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faListCheck } from '@fortawesome/free-solid-svg-icons'
import { ClientsTable } from '../components/clients/ClientsTable'

export const ClientesView = () => {
  const [filterSelected, setFilterSelected] = useState('general')
  const [clients, setClients] = useState([])
  const [rows, setRows] = useState(0)
  const [showGeneral, setShowGeneral] = useState(true)
  const limit = 10

  // Fetch Clients
  const fetchClients = async (from = 1) => {
    try {
      const {
        data: { rows, data: clientsData },
      } = await salesApi.get(`/customers?limit=${limit}&from=${from}`)
      console.log(clientsData)
      setClients(clientsData)
      setRows(rows)
    } catch (error) {
      console.log(error)
    }
  }

  // Fetch Important Clients
  const fetchImportantClients = async () => {
    try {
      const {
        data: { data },
      } = await salesApi.get('/customers/sales')
      setClients(data)
    } catch (error) {
      console.log(error)
    }
  }

  // Load Clients...
  useEffect(() => {
    fetchClients()
  }, [])

  // General List
  const onHandleClients = () => {
    setClients([])
    fetchClients()
    setShowGeneral(true)
  }

  // Important Clients
  const onHandleImportants = () => {
    setClients([])
    fetchImportantClients()
    setShowGeneral(false)
  }

  return (
    <div className='row'>
      <div className='col-md-12 mb-4'>
        <h3 style={{ fontSize: '20px', fontWeight: 'bold' }}>Clientes</h3>
        <hr />
        <div className='btn-group btn-group-toggle' data-toggle='buttons'>
          <label
            className={`btn btn-outline-success ${
              filterSelected === 'general' ? 'active' : ''
            }`}
            onClick={onHandleClients}
          >
            <input
              type='radio'
              id='general'
              value='general'
              checked={filterSelected === 'general'}
              onChange={() => setFilterSelected('general')}
            />{' '}
            General
          </label>
          <label
            className={`btn btn-outline-success ${
              filterSelected === 'important' ? 'active' : ''
            }`}
            onClick={onHandleImportants}
          >
            <input
              type='radio'
              id='important'
              value='important'
              checked={filterSelected === 'important'}
              onChange={() => setFilterSelected('important')}
            />{' '}
            Más importantes
          </label>
        </div>
      </div>
      <div className='col-md-12'>
        {showGeneral ? (
          <ClientsTable data={clients} rows={rows} handlePage={fetchClients} limit={limit} />
        ) : (
          <>
            <span className='badge badge-success'>
              <FontAwesomeIcon icon={faListCheck} /> Ultimos 10 clientes con mayor número de
              ventas
            </span>
            <ImportantClientsTable data={clients} />
          </>
        )}
      </div>
    </div>
  )
}
