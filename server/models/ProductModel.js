import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
    unsold:{
        type:Boolean,
        required:true,
    }
});

const ProductModel =mongoose.model('product',ProductSchema);
export default ProductModel;