
import express from "express";
import ticketController from "./ticket.controller.js";
// import { isAdmin } from "../middleware/auth.js";

const router = express.Router();

router.post('/ticket',ticketController.createTicket);
router.put('/ticket/:id', ticketController.updateTicketHandler);




const ticketRoute = router;

export default ticketRoute;
