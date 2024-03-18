import app from './config/app.js'
import { PORT } from './config/config.js'

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})
