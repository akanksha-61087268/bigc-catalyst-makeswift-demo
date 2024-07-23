import mongoose from "mongoose"


const productModel = new mongoose.Schema({
    name:String,
    price:String,
    description:String,
    category:String
});
const Product = mongoose.models.catalystproducts || mongoose.model("catalystproducts", productModel);

export default Product;
