import { pool } from '../config/db.js'

/**
 * Get All Clients with Pagination
 */
export const getClients = async (req, res) => {
  let { limit = 10, from = 1 } = req.query
  try {
    if (Number(from) <= 0) from = 1
    const [data] = await pool.query(
      `
      SELECT * FROM clientes 
      ORDER BY ID_Cliente
      LIMIT ? OFFSET ?`,
      [Number(limit), Number(from) - 1]
    )
    const [total] = await pool.query('SELECT COUNT(*) as total_clientes FROM clientes')

    res.status(200).json({
      httpCode: 200,
      currentRows: data.length,
      rows: total[0].total_clientes,
      data,
    })
  } catch (error) {
    res.status(500).json({
      httpCode: 500,
      message: error,
    })
  }
}

/**
 * Get Sales Amount by Clients
 */
export const getSalesByClient = async (req, res) => {
  const { limit = 10 } = req.query
  try {
    const [data] = await pool.query(
      `
      SELECT ventas.ID_Cliente, clientes.Nombre_completo, COUNT(*) as Numero_ventas, 
	    sum(Importe_venta_total) - sum(Importe_Coste_total) as Ventas_total
      FROM ventas
      LEFT JOIN clientes on clientes.ID_Cliente = ventas.ID_Cliente
      GROUP BY ventas.ID_Cliente 
      ORDER BY Numero_ventas DESC, clientes.Nombre_completo ASC
      LIMIT ?`,
      [Number(limit)]
    )
    res.status(200).json({
      httpCode: 200,
      count: data.length,
      data,
    })
  } catch (error) {
    res.status(500).json({
      httpCode: 500,
      message: error,
    })
  }
}
