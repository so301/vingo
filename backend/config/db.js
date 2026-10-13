// import mongoose from "mongoose"

// const connectDb=async () => {
//     try {
//         await mongoose.connect(process.env.MONGODB_URL)
//         console.log("db connected")
//     } catch (error) {
//         console.log("db error")
//     }
// }

// export default connectDb

import mongoose from "mongoose";

const connectDb = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URL);

        console.log("DB connected successfully");
        console.log("MongoDB Host:", conn.connection.host);
        console.log("Database:", conn.connection.name);

    } catch (error) {
        console.log("DB ERROR:");
        console.log(error.message);
    }
};

export default connectDb;