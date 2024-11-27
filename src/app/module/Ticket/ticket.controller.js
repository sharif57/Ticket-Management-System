import Bus from "../Bus/bus.modal.js";
import Ticket from "./ticket.modal.js";
import ticketServices from "./ticket.service.js";

const createTicket = async (req, res, next) => {
    try {
        const { busId, price, time, availableSeats } = req.body;

        const bus = await Bus.findById(busId);
        if (!bus) {
            return res.status(404).json({ message: 'Bus not found' });
        }

        const newTicket = new Ticket({
            bus: busId,
            price,
            time,
            availableSeats,
        });

        await newTicket.save();
        res.status(201).json({ message: 'Ticket created successfully', ticket: newTicket });
    } catch (error) {
        next(error)
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

const ticketController = {
    createTicket,
    updateTicketHandler,
    deleteTicket
};

export default ticketController;
