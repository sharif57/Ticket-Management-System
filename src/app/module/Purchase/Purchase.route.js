
import express from "express";
import purchaseController from "./Purchase.controller.js";
import { isUser } from "../middleware/auth.js";

const router = express.Router();

router.post('/purchase', isUser, purchaseController.insertPurchase);



const purchaseRoute = router;

export default purchaseRoute;
