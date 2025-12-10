import Asset from "../models/asset.js";
import Log from "../models/log.js";
export const getAssetSummary = async (req, res) => {
    try {
        const summary = await Asset.aggregate([
            {
                $group: {
                    _id: "$status",
                    count: { $sum: 1 }
                }
            }
        ]);

        const total = await Asset.countDocuments();

        res.json({
            total,
            summary: summary.reduce((a, b) => {
                a[b._id] = b.count;
                return a;
            }, {})
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const getAssignmentStats = async (req, res) => {
    try {
        const stats = await Log.aggregate([
            { $group: { _id: "$type", count: { $sum: 1 } } }
        ]);

        res.json(stats.reduce((acc, curr) => {
            acc[curr._id] = curr.count;
            return acc;
        }, {}));
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const getMonthlyAnalytics = async (req, res) => {
    try {
        const purchases = await Asset.aggregate([
            {
                $group: {
                    _id: { year: { $year: "$purchaseDate" }, month: { $month: "$purchaseDate" } },
                    count: { $sum: 1 }
                }
            }
        ]);
        res.json(purchases);

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};