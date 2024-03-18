import { Table } from '../Table.jsx'

const columns = [
  {
    header: 'ID Cliente',
    accessorKey: 'ID_Cliente',
  },
  {
    header: 'Nombre Cliente',
    accessorKey: 'Nombre_completo',
  },
  {
    header: '# Ventas',
    accessorKey: 'Numero_ventas',
  },
  {
    header: 'Total de Ventas ($)',
    accessorKey: 'Ventas_total',
    cell: (props) => <div className='text-right'>{props.getValue().toFixed(2)}</div>,
  },
]

export const ImportantClientsTable = ({ data }) => {
  return <Table data={data} columns={columns} filterBy={'Nombre, # Ventas...'} />
}
