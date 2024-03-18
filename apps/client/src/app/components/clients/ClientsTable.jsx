import ReactPaginate from 'react-paginate'
import { formatDate } from '../../../helpers/formatDate.js'
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
    header: 'Fecha de Nacimiento',
    accessorKey: 'Fecha_nacimiento',
    cell: (props) => formatDate(props.getValue()),
  },
  {
    header: 'Dirección',
    accessorKey: 'Dirección',
  },
  {
    header: 'Localidad (Cod. Postal)',
    accessorKey: 'Localidad_Código_postal',
  },
  {
    header: 'Teléfono',
    accessorKey: 'Teléfono',
  },
  {
    header: 'Email',
    accessorKey: 'Correo_electrónico',
  },
]

export const ClientsTable = ({ data, rows, handlePage, limit }) => {
  const handlePageClick = (pagination) => {
    let page = pagination.selected
    let nextPage = (page * limit) + 1
    handlePage(nextPage)
  }

  return (
    <>
      <Table data={data} columns={columns} filterBy={'Nombre, Dirección...'} />
      <ReactPaginate
        previousLabel={'Anterior'}
        nextLabel={'Siguiente'}
        breakLabel={'...'}
        pageCount={Math.ceil(rows / limit)}
        marginPagesDisplayed={2}
        onPageChange={handlePageClick}
        containerClassName={'pagination justify-content-center'}
        pageClassName={'page-item'}
        pageLinkClassName={'page-link'}
        previousClassName={'page-item'}
        previousLinkClassName={'page-link'}
        nextClassName={'page-item'}
        nextLinkClassName={'page-link'}
        breakClassName={'page-item'}
        breakLinkClassName={'page-link'}
        activeClassName={'active'}
      />
    </>
  )
}
