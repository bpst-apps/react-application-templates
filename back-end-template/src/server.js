// importing packages
import express from 'express'
import { routes } from './routes'

// create express application
const app = express()
app.use(express.json())


// create routes
routes.forEach(route => {
    app[route.method](route.path, route.handler)
})


// run server
app.listen(8080, () => {
    console.log("server is listening on port 8080");
});