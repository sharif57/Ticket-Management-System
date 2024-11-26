

import express from "express";
import busController from "./bus.controller.js";
import { isAdmin } from "../middleware/auth.js";

const router = express.Router();

router.post('/busAdd',isAdmin, busController.addBus);

const busRoute = router;

export default busRoute;
