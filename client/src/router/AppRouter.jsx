import { Navigate, Route, Routes } from 'react-router-dom'
import { DashboardPage } from '../app/pages/DashboardPage'
import { ClientesPage } from '../app/pages/ClientesPage'
import { VentasPage } from '../app/pages/VentasPage'

export const AppRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<DashboardPage />} />
      <Route path='/clientes' element={<ClientesPage />} />
      <Route path='/ventas' element={<VentasPage />} />
      <Route path='/*' element={<Navigate to={'/'} />} />
    </Routes>
  )
}
