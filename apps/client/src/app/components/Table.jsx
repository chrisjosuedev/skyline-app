import { useState } from 'react'

import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  getPaginationRowModel,
  getSortedRowModel,
  getFilteredRowModel,
} from '@tanstack/react-table'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown, faCaretUp, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

export const Table = ({ data, columns, filterBy, paginate = false }) => {
  const [sorting, setSorting] = useState([])
  const [filtering, setFiltering] = useState('')

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting,
      globalFilter: filtering,
    },
    onSortingChange: setSorting,
    onGlobalFilterChange: setFiltering,
  })

  return (
    <>
      <div className='row justify-content-end mb-4'>
        <div className='col-4'>
          <label htmlFor='search' className='form-label'>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            &nbsp;Filtrar:
          </label>
          <input
            id='search'
            className='form-control me-2'
            type='search'
            autoComplete='new-password'
            value={filtering}
            onChange={(e) => setFiltering(e.target.value)}
            placeholder={filterBy}
          />
        </div>
      </div>
      <div className='table-responsive'>
        <table className='table table-striped w-100'>
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    onClick={header.column.getToggleSortingHandler()}
                    scope='col'
                    key={header.id}
                  >
                    <b> {header.column.columnDef.header} </b>
                    {
                      {
                        asc: <FontAwesomeIcon icon={faCaretUp} />,
                        desc: <FontAwesomeIcon icon={faCaretDown} />,
                      }[header.column.getIsSorted() ?? null]
                    }
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell, index) => (
                  <td key={index}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}
