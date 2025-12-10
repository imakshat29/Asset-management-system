import express from "express";
import { getAssetSummary, getAssignmentStats, getMonthlyAnalytics } from "../controllers/report.controller.js";

const router = express.Router();
    router.get("/asset-summary", getAssetSummary);
    router.get("/assignment-stats", getAssignmentStats);
    router.get("/monthly-analytics", getMonthlyAnalytics);

export default router;