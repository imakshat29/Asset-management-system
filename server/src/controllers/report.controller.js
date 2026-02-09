import Asset from "../models/asset.js";
import Log from "../models/log.js";

//Asset Summary api controller
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

//Assignment Statistics api controller
export const getAssignmentStats = async (req, res) => {
    try {
        const stats = await Log.aggregate([
            { $group: { _id: "$type", count: { $sum: 1 } } }
        ]);

        const response = {
            Assigned: 0,
            Returned: 0
        };
        stats.forEach(item => {
            response[item._id] = item.count;
        });

        res.status(200).json(response);

    } catch (error) {
        res.status(500).json({
            message: "Failed to fetch assignment statistics",
            error: error.message
        });
    }
    // res.json(stats.reduce((acc, curr) => {
    //     acc[curr._id] = curr.count;
    //     return acc;
    // }, {}));
    // } catch (err) {
    //     res.status(500).json({ error: err.message });
    // }
};

export const getMonthlyAnalytics = async (req, res) => {
    try {
        const purchases = await Asset.aggregate([
            { $match: { purchaseDate: { $ne: null } } },
            {
                $group: {
                    _id: {
                        year: { $year: "$purchaseDate" },
                        month: { $month: "$purchaseDate" }
                    },
                    count: { $sum: 1 }
                }
            },
            { $sort: { "_id.year": 1, "_id.month": 1 } }
        ]);

        // res.json(purchases);
        // Assets assigned per month
        const assignments = await Log.aggregate([
            { $match: { type: "Assigned" } },
            {
                $group: {
                    _id: {
                        year: { $year: "$date" },
                        month: { $month: "$date" }
                    },
                    count: { $sum: 1 }
                }
            },
            { $sort: { "_id.year": 1, "_id.month": 1 } }
        ]);

        // Assets returned per month
        const returns = await Log.aggregate([
            { $match: { type: "Returned" } },
            {
                $group: {
                    _id: {
                        year: { $year: "$date" },
                        month: { $month: "$date" }
                    },
                    count: { $sum: 1 }
                }
            },
            { $sort: { "_id.year": 1, "_id.month": 1 } }
        ]);

        // Format response for frontend/dashboard
        const formatData = (data) =>
            data.map(item => ({
                year: item._id.year,
                month: item._id.month,
                count: item.count
            }));

        res.status(200).json({
            purchases: formatData(purchases),
            assignments: formatData(assignments),
            returns: formatData(returns)
        });

    } catch (err) {
        res.status(500).json({ 
            message: "Failed to fetch monthly analytics",
            error: err.message });
    }
};

// Dashboard Reporting API controller
export const getDashboardReport = async (req, res) => {
    try {
        //    Asset Summary
        const assetSummaryAgg = await Asset.aggregate([
            {
                $group: {
                    _id: "$status",
                    count: { $sum: 1 }
                }
            }
        ]);

        const totalAssets = await Asset.countDocuments();

        const assetSummary = assetSummaryAgg.reduce((acc, curr) => {
            acc[curr._id] = curr.count;
            return acc;
        }, {});

        //    Assignment Statistics
        const assignmentAgg = await Log.aggregate([
            {
                $group: {
                    _id: "$type",
                    count: { $sum: 1 }
                }
            }
        ]);

        const assignmentStats = {
            Assigned: 0,
            Returned: 0
        };

        assignmentAgg.forEach(item => {
            assignmentStats[item._id] = item.count;
        });

        //    Monthly Analytics

        const purchases = await Asset.aggregate([
            { $match: { purchaseDate: { $ne: null } } },
            {
                $group: {
                    _id: {
                        year: { $year: "$purchaseDate" },
                        month: { $month: "$purchaseDate" }
                    },
                    count: { $sum: 1 }
                }
            },
            { $sort: { "_id.year": 1, "_id.month": 1 } }
        ]);

        const assignments = await Log.aggregate([
            { $match: { type: "Assigned" } },
            {
                $group: {
                    _id: {
                        year: { $year: "$date" },
                        month: { $month: "$date" }
                    },
                    count: { $sum: 1 }
                }
            },
            { $sort: { "_id.year": 1, "_id.month": 1 } }
        ]);

        const returns = await Log.aggregate([
            { $match: { type: "Returned" } },
            {
                $group: {
                    _id: {
                        year: { $year: "$date" },
                        month: { $month: "$date" }
                    },
                    count: { $sum: 1 }
                }
            },
            { $sort: { "_id.year": 1, "_id.month": 1 } }
        ]);

        const formatData = (data) =>
            data.map(item => ({
                year: item._id.year,
                month: item._id.month,
                count: item.count
            }));

        //    Final Dashboard Response
        res.status(200).json({
            assetSummary: {
                total: totalAssets,
                statusWise: assetSummary
            },
            assignmentStatistics: assignmentStats,
            monthlyAnalytics: {
                purchases: formatData(purchases),
                assignments: formatData(assignments),
                returns: formatData(returns)
            }
        });

    } catch (error) {
        res.status(500).json({
            message: "Failed to fetch dashboard report",
            error: error.message
        });
    }
};