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

// const ticketPost = async (data) => {
//     const result = await Ticket.create(data);
//     return result;
// };

const ticketPost = async (ticketData) => {
    // Create a new bus and save it to the database
    const data = new Ticket(ticketData);
    return await data.save();
};


const allTicket = async () => {
    return await Ticket.find();
};

const ticketServices = {
    updateTicket,
    deleteTicket,
    allTicket,
    ticketPost
}

export default ticketServices;
