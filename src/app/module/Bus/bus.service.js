import Bus from "./bus.modal.js";


const busPost = async (data) => {
    const result = await Bus.create(data);
    return result;
};


const updateBus = async (id, data) => {
    const { busName, busType, totalSeats, arrivalTime } = data;

    const result = await Bus.findByIdAndUpdate(
        id,
        { busName, busType, totalSeats, arrivalTime },
        { new: true, runValidators: true } 
    );

    return result;
};
 
const busServices = {
    busPost,
    updateBus
}

export default busServices;
