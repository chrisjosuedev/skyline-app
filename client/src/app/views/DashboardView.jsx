import { useEffect, useState } from 'react'
import { DoughnutChart } from '../components/DoughnutChart'
import salesApi from '../../api/salesApi'

export const DashboardView = () => {
  const [analitics, setAnalitics] = useState(null)

  useEffect(() => {
    const fetchAnalitics = async () => {
      try {
        const {
          data: { data },
        } = await salesApi.get('/sales/totals')
        const analitics = data[0]
        setAnalitics(analitics)
      } catch (error) {
        console.log(error)
      }
    }
    fetchAnalitics()
  }, [])

  return (
    <div className='container mt-4'>
      <div className='row mb-4'>
        <div className='col-md-12'>
          <h1 className='view-title'>DASHBOARD</h1>
          <hr />
          <p className='text-muted'> Analítica de Relacion Venta/Coste</p>
        </div>
        {analitics ? (
          <div className='col-md-6 mx-auto'>
            <div className='card'>
              <div className='card-body'>
                <h5 className='card-title'>Ventas Total/Coste</h5>
                <hr />
                <DoughnutChart data={analitics} />
              </div>
            </div>
          </div>
        ) : (
          <div className='col-md-12'>
            <div className='alert alert-dark' role='alert'>
              No hay datos para visualizar la gráfica. 🚀
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
