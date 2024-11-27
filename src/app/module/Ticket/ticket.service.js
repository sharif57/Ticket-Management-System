import Ticket from "./ticket.modal.js";



const updateTicket = async (id, data) => {
    const { availableSeats, price, time } = data;

    const result = await Ticket.findByIdAndUpdate(
        id,
        { availableSeats, price, time },
        { new: true, runValidators: true } 
    );

    return result;
};

const deleteTicket = async (id) => {

    const deletedTicket = await Ticket.findByIdAndDelete(id);

    return deletedTicket;

};

const ticketServices = {
    updateTicket,
    deleteTicket
}

export default ticketServices;
