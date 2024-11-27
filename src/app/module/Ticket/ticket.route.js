
import express from "express";
import ticketController from "./ticket.controller.js";
import { isAdmin, isUser } from "../middleware/auth.js";

const router = express.Router();

router.post('/ticket', isAdmin, ticketController.addTicket);
router.put('/ticket/:id', isAdmin, ticketController.updateTicketHandler);
router.delete('/ticket/:id', isAdmin, ticketController.deleteTicket);
router.get('/ticket', isUser, ticketController.allTicket);



const ticketRoute = router;

export default ticketRoute;
