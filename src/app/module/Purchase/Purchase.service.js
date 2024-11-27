import Purchase from "./Purchase.modal.js"

const insertPurchase = async (data) => {
    const result = await Purchase.create(data);
    return result
}



const PurchaseServices = {
    insertPurchase
}

export default PurchaseServices;