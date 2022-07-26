import express from 'express'
import cors from 'cors'
import morgan from 'morgan';
import helmet from 'helmet'
import 'dotenv/config'

const app = express()

const PORT = process.env.PORT || 8000

// middlewares
app.use(express.json())
app.use(cors())
app.use(morgan('dev'))
app.use(helmet())

app.get('/',(req,res)=>{
res.json({
    message:'Welcome to the api endpoint'
})
})


app.listen(PORT, (error)=>{
error && console.log(error)
console.log(`Your server is running on PORT: ${PORT}`)
})


