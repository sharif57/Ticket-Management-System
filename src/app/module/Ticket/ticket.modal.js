import { model, Schema } from "mongoose";

const ticketSchema = new Schema({
  bus: {
    type: Schema.Types.ObjectId,
    ref: 'Bus',
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  availableSeats: {
    type: Number,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
}, { timestamps: true });


const Ticket = model('Ticket', ticketSchema);

export default Ticket;