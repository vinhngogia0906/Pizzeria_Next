import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    productName: {
        type:String,
        required: true,
        maxlength: 60,
    },
    productDescription: {
        type:String,
        required: true,
        maxlength: 300,
    },
    productImgStr: {
        type:String,
        required: true,
        maxlength: 60,
    },
    productStore: {
        type:String,
        required: true,
        maxlength: 60,
    },
    productPrice: {
        type: Number,
        required: true,
    },
    productToppings: {
        type: [{text:{type:String, required: true}, price:{type:Number, required: true}}]
    }
}, {timestamps: true });

export default mongoose.models.Product || mongoose.model("Product", ProductSchema);