import express from 'express';
import userRoutes from './app/module/user/user.route.js';
import busRoute from './app/module/Bus/bus.route.js';
import ticketRoute from './app/module/Ticket/ticket.route.js';
import purchaseRoute from './app/module/Purchase/Purchase.route.js';
const app = express()
app.use(express.json())


app.get('/', (req, res) => {
    res.send('server is running')
})


app.use('/api', userRoutes)
app.use('/api', busRoute)
app.use('/api', ticketRoute)
app.use('/api', purchaseRoute)
export default app