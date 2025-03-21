
import mongoose from "mongoose";


export default async function connection() {
    try {
        await mongoose.connect("mongodb://localhost:27017")
        console.log('✅ MongoDB Connected Successfully")')
    } catch (err) {
        console.error("❌ MongoDB Connection Failed:", err);
    }
}
