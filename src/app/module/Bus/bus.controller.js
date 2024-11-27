

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


 const updateBusHandler = async (req, res, next) => {
    const id = req.params.id;
    const data = req.body;

    try {
        const result = await busServices.updateBus(id, data);

        if (!result) {
            return res.status(404).json({ error: 'Bus not found' });
        }

        res.status(200).json({
            message: 'Bus information updated successfully',
            result,
        });
    } catch (error) {
        console.error(error);
        next(error); 
    }
};

const deleteBus = async (req, res, next) => {
    try {
        const deletedBus = await busServices.deleteBus(req.params.id);
        res.status(200).json({
            message: "Bus deleted successfully",
            success: true
        });
    } catch (error) {
        next(error);
    }
};

const allBus = async (req, res, next) => {
    try {
        const result = await busServices.allBus();
        res.status(200).json({
            message: "All users retrieved successfully",
            success: true,
            data: result
        });
    } catch (error) {
        next(error);
    }
};

const busController = {
    addBus,
    updateBusHandler,
    deleteBus,
    allBus
};

export default busController;
