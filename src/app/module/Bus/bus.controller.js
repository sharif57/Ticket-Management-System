

import busServices from "./bus.service.js";



const addBus = async (req, res, next) => {
    try {
        const result = await busServices.busPost(req.body); 
        res.status(200).json({
            message: 'New bus added successfully',
            success: true,
            data: result
        });
    } catch (error) {
        next(error); 
    }
};

const busController = {
    addBus
};

export default busController;
