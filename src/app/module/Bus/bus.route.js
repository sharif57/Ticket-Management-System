
import express from "express";
import busController from "./bus.controller.js";
import { isAdmin, isUser } from "../middleware/auth.js";
// import { isAdmin } from "../middleware/auth.js";

const router = express.Router();

router.post('/bus', isAdmin, busController.addBus);
router.put('/bus/:id', isAdmin, busController.updateBusHandler);
router.delete('/bus/:id', isAdmin, busController.deleteBus);
// router.get('/bus', busController.deleteBus);
router.get("/bus", isUser, busController.allBus)


const busRoute = router;

export default busRoute;
