import express from 'express'
import mongoose, { connection } from 'mongoose'

//App Config 

const app = express()
const port = process.env.PORT || 8001
const connection_url = 'mongodb+srv://admin:BjeSAHLGXqbMhMo1@cluster0.svhi6.mongodb.net/tinderdb?retryWrites=true&w=majority'

// Middleware

// DB Config
mongoose.connect(connection_url, {
    useNewUrlParser: true, 
    useCreateIndex: true,
    useUnifiedTopology: true,
})

// API Endpoints 

app.get('/', (req, res) => {
    res.status(200).send("Hello clever programmers")
})

// Listener

app.listen(port, () => console.log(`listening on local host: ${port}`))