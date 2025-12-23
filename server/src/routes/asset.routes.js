import express from "express";
import { assignAsset, returnAsset } from "../controllers/asset.controller.js";

const router = express.Router();

router.post("/assign", assignAsset);
router.post("/return", returnAsset);

export default router;