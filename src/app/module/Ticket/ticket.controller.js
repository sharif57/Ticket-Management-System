import Bus from "../Bus/bus.modal.js";
import Ticket from "./ticket.modal.js";

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


const ticketController = {
    createTicket
};

export default ticketController;
