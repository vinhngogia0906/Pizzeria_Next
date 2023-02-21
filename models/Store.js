import mongoose from "mongoose";

const StoreSchema = new mongoose.Schema({
    storeName: {
        type:String,
        required: true,
        maxlength: 60,
    },
    address: {
        type:String,
        required: true,
        maxlength: 300,
    },
}, {timestamps: true });

export default mongoose.models.Store || mongoose.model("Store", StoreSchema);