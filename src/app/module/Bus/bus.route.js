

import express from "express";
import busController from "./bus.controller.js";
// import { isAdmin } from "../middleware/auth.js";

const router = express.Router();

router.post('/busAdd', busController.addBus);
router.put('/busAdd/:id', busController.updateBusHandler);

const busRoute = router;

export default busRoute;
