import express from 'express'
import dotenv from 'dotenv'
import userRoutes from './routes/user.routes.js'
import authenticationRoutes from './routes/authentication.route.js'
import adminRoutes from './routes/admin.route.js'
import songsRoutes from './routes/songs.route.js'
import albumsRoutes from './routes/albums.route.js'
import statisticsRoutes from './routes/statistics.route.js'

dotenv.config();

const app = express();
const PORT = process.env.PORT

app.use("/api/users", userRoutes)
app.use("/api/authentication", authenticationRoutes)
app.use("/api/admin", adminRoutes)
app.use("/api/songs", songsRoutes)
app.use("/api/albums", albumsRoutes)
app.use("/api/statistics", statisticsRoutes)

app.listen(PORT, ()=>{
    console.log("Server is running on PORT " + PORT);
})