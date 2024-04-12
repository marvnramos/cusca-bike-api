import mongoose from "mongoose";
import 'dotenv/config';

const MONGODB_URI = process.env.MONGODB_URI;

const connect = async () => {
    try{
        const db = await mongoose.connect(MONGODB_URI!);
        console.log(` 🗃️ | Connected to: ${db.connection.name} database`);
    }catch(err){
        console.error(` ❌ | Error connecting to database: ${err}`);
    }
};

export default connect;