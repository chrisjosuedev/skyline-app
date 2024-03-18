import { formatDate } from "../../../helpers/formatDate"
import { Table } from '../Table'

const columns = [
  {
    header: 'ID Pedido',
    accessorKey: 'ID_Pedido',
  },
  {
    header: 'ID Cliente',
    accessorKey: 'ID_Cliente',
  },
  {
    header: 'Nombre Cliente',
    accessorKey: 'Nombre_completo',
  },
  {
    header: 'Fecha',
    accessorKey: 'Fecha_pedido',
    cell: (props) => formatDate(props.getValue()),
  },
  {
    header: 'Total ($)',
    accessorKey: 'Monto_total',
    cell: (props) => <div className="text-right">{props.getValue().toFixed(2)}</div>,
  },
]

export const SalesTable = ({ data }) => {
  return <Table data={data} columns={columns} filterBy={'Nombre, Fecha Pedido...'} />
}
