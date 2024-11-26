import Bus from "./bus.modal.js";


const busPost = async (data) => {
    const result = await Bus.create(data);
    return result;
};


const busServices = {
    busPost
}

export default busServices;
