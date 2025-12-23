import Asset from "../models/asset.js";
import Log from "../models/log.js";

/**
 * POST /api/assets/assign
 */
export const assignAsset = async (req, res) => {
    try {
        const { assetId, employeeId } = req.body;

        // 1. Check asset exists
        const asset = await Asset.findById(assetId);
        if (!asset) {
            return res.status(404).json({ message: "Asset not found" });
        }

        // 2. Check availability
        if (asset.status !== "Available") {
            return res.status(400).json({ message: "Asset not available" });
        }

        // 3. Update asset status
        asset.status = "Assigned";
        asset.assignedTo = employeeId;
        await asset.save();

        // 4. CREATE LOG ENTRY
        await Log.create({
            assetId,
            employeeId,
            type: "Assigned"
        });

        res.status(200).json({ message: "Asset assigned and log created" });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

/**
 * POST /api/assets/return
 */
export const returnAsset = async (req, res) => {
    try {
        const { assetId, employeeId } = req.body;

        // 1. Check asset exists
        const asset = await Asset.findById(assetId);
        if (!asset) {
            return res.status(404).json({ message: "Asset not found" });
        }

        // 2. Update asset status
        asset.status = "Available";
        asset.assignedTo = null;
        await asset.save();

        // 3. CREATE LOG ENTRY
        await Log.create({
            assetId,
            employeeId,
            type: "Returned"
        });

        res.status(200).json({ message: "Asset returned and log created" });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};