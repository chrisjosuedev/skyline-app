import { pool } from '../config/db.js'

/**
 * Get latest 10 sales
 */
export const getLatestSales = async (req, res) => {
  const { limit = 10 } = req.query
  try {
    const [data] = await pool.query(
      `
      SELECT ventas.ID_Pedido, ventas.ID_Cliente, clientes.Nombre_completo, ventas.Fecha_pedido, 
	    sum(Importe_venta_total) - sum(Importe_Coste_total) as Monto_total
      FROM ventas
      LEFT JOIN clientes on clientes.ID_Cliente = ventas.ID_Cliente
      GROUP BY ventas.ID_Pedido
      ORDER BY ventas.Fecha_pedido DESC
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

/**
 * Get Sales Total and Costs
 */
export const getTotalSales = async (req, res) => {
  try {
    const [data] = await pool.query(
      `
      SELECT sum(Importe_venta_total) as venta_total, sum(Importe_Coste_total) as coste_total
      FROM ventas`
    )
    res.status(200).json({
      httpCode: 200,
      data,
    })
  } catch (error) {
    res.status(500).json({
      httpCode: 500,
      message: error,
    })
  }
}
