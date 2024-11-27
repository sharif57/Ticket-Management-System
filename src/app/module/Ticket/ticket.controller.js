import Bus from "../Bus/bus.modal.js";
import Ticket from "./ticket.modal.js";
import ticketServices from "./ticket.service.js";



const addTicket = async (req, res, next) => {
    try {
        const result = await ticketServices.ticketPost(req.body);
        res.status(201).json({
            message: 'New Ticket added successfully',
            success: true,
            data: result,
        });
    } catch (error) {
        next(error); 
    }
};


const updateTicketHandler = async (req, res, next) => {
    const id = req.params.id;
    const data = req.body;

    try {
        const result = await ticketServices.updateTicket(id, data);

        if (!result) {
            return res.status(404).json({ error: 'ticket not found' });
        }

        res.status(200).json({
            message: 'ticket information updated successfully',
            result,
        });
    } catch (error) {
        console.error(error);
        next(error); 
    }
};

const deleteTicket = async (req, res, next) => {
    try {
        const deletedBus = await ticketServices.deleteTicket(req.params.id);
        res.status(200).json({
            message: "Ticket deleted successfully",
            success: true
        });
    } catch (error) {
        next(error);
    }
};

const allTicket = async (req, res, next) => {
    try {
        const result = await ticketServices.allTicket();
        res.status(200).json({
            message: "All ticket get successfully",
            success: true,
            data: result
        });
    } catch (error) {
        next(error);
    }
};

const ticketController = {
    addTicket,
    updateTicketHandler,
    deleteTicket,
    allTicket
};

export default ticketController;
