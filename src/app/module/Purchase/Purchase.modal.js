import { model, Schema } from "mongoose";

const purchaseSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  ticket: {
    type: Schema.Types.ObjectId,
    ref: 'Ticket',
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
    default: 1,
  },
  totalAmount: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    enum: ['confirmed', 'cancelled'],
    default: 'confirmed',
  },
}, { timestamps: true });


const Purchase = model('Purchase', purchaseSchema);

export default Purchase;