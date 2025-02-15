import { Router } from "express"

const route = Router()

route.get('/', (req, res) => {
    res.send("Authentication route with GET method.")
})

export default route