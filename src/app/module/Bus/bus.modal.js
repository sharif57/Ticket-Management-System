import  { model, Schema } from 'mongoose';

const busSchema = new Schema({
    busName: {
        type: String,
        required: true,
    },
    busType: {
        type: String,
        enum: ['AC', 'Non-AC'],
        required: true,
    },
    totalSeats: {
        type: Number,
        required: true,
    },
    arrivalTime: {
        type: [String], // e.g., ["08:00 AM", "02:00 PM"]
        required: true,
    },
}, { timestamps: true });

const Bus = model('Bus', busSchema);

export default Bus;
