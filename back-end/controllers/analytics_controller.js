const Order = require("../models/order_model");
const User = require("../models/user_model");

const numberOfUsers = async(req,res)=>{
   try {
    const today = new Date();
    const fourMonthsAgo = new Date(today.getFullYear(), today.getMonth() - 3, 1);
    console.log(fourMonthsAgo);

    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    
    const pipeline = [
        {
          $match: {
            created_at: { $gte: fourMonthsAgo }, // Filter users created in the last 4 months
          },
        },
        {
          $group: {
            _id: { year: { $year: "$created_at" }, month: { $month: "$created_at" } },
            users: { $sum: 1 }, // Count users per month
          },
        },
        {
          $sort: { "_id.year": 1, "_id.month": 1 }, // Sort by year and month
        },
        {
          $project: {
            _id: 0,
            month: {
              $arrayElemAt: [monthNames, { $subtract: ["$_id.month", 1] }], // Convert month number to name
            },
            users: 1,
          },
        },
      ];
      const result = await User.aggregate(pipeline);
      res.status(200).json(result);
    }
    catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });

}
}

const numberOfProductsSold = async (req, res) => {
    try {
        const today = new Date();
        const fourMonthsAgo = new Date(today.getFullYear(), today.getMonth() - 3, 1);
       
        const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    
        const pipeline = [
            {
              $match: {
                ordered_at: { $gte: fourMonthsAgo }, // Filter users created in the last 4 months
                status:  'delivered' , // Filter users created in the last 4 months
              },
            },
            {
              $group: {
                _id: { year: { $year: "$ordered_at" }, month: { $month: "$ordered_at" } },
                sold: { $sum: 1 }, // Count users per month
              },
            },
            {
              $sort: { "_id.year": 1, "_id.month": 1 }, // Sort by year and month
            },
            {
              $project: {
                _id: 0,
                month: {
                  $arrayElemAt: [monthNames, { $subtract: ["$_id.month", 1] }], // Convert month number to name
                },
                sold: 1,
              },
            },
          ];
        const result = await Order.aggregate(pipeline);
        res.status(200).json(result);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }

}

const deliverdAndNotDeliverd = async(req,res)=>{
    try{
        const today = new Date();
        const oneDay = 1000 * 60 * 60 * 24; // Milliseconds in a day
        
        // Calculate the start of the current week (week 4, most recent week)
        const startOfWeek4 = new Date(today);
        startOfWeek4.setDate(today.getDate() - today.getDay()); // Set to the most recent Sunday
        
        // Calculate the start dates for each of the 4 weeks
        const startOfWeek3 = new Date(startOfWeek4 - 7 * oneDay);
        const startOfWeek2 = new Date(startOfWeek3 - 7 * oneDay);
        const startOfWeek1 = new Date(startOfWeek2 - 7 * oneDay);
        
        const pipeline = [
          // 1. Match documents within the last 4 weeks
          {
            $match: {
              ordered_at: {
                $gte: startOfWeek1, // Start of the first week (4 weeks ago)
                $lt: today,         // Up to today
              },
            },
          },
          // 2. Add a custom field to classify each order into one of the 4 weeks
          {
            $addFields: {
              week: {
                $switch: {
                  branches: [
                    { case: { $gte: ["$ordered_at", startOfWeek4] }, then: 4 },
                    { case: { $gte: ["$ordered_at", startOfWeek3] }, then: 3 },
                    { case: { $gte: ["$ordered_at", startOfWeek2] }, then: 2 },
                    { case: { $gte: ["$ordered_at", startOfWeek1] }, then: 1 },
                  ],
                  default: null, // This won't happen since we filter dates in `$match`
                },
              },
            },
          },
          // 3. Group data by week and calculate delivered/not delivered counts
          {
            $group: {
              _id: "$week",
              delivered: {
                $sum: { $cond: [{ $eq: ["$status", "delivered"] }, 1, 0] }, // Count delivered orders
              },
              notDelivered: {
                $sum: { $cond: [{ $ne: ["$status", "delivered"] }, 1, 0] }, // Count not delivered orders
              },
            },
          },
          // 4. Sort results by week number (ascending)
          {
            $sort: { _id: 1 },
          },
          // 5. Format the output to include the "Week X" period
          {
            $project: {
              _id: 0,
              period: {
                $concat: ["Week ", { $toString: "$_id" }], // Format period as 'Week X'
              },
              delivered: 1,
              notDelivered: 1,
            },
          },
        ];
        const result = await Order.aggregate(pipeline);
        res.status(200).json(result);
          
    }
    catch(error){
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

module.exports = {
    numberOfUsers,
    numberOfProductsSold,
    deliverdAndNotDeliverd
}