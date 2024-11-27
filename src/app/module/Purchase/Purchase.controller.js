import PurchaseServices from "./Purchase.service.js";


const insertPurchase = async (req, res, next) => {
    // const data = { ...req.body }
    // data['user'] = req.user.userId;
    // console.log(data)
    try {
        const result = await PurchaseServices.insertPurchase(req.body);
        res.status(200).json({
            message: 'Purchase ticket successfully',
            success: true,
            data: result
        });
    } catch (error) {
        next(error);
    }
};


const purchaseController = {
    insertPurchase
}


export default purchaseController