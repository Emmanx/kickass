import mongoose from "mongoose";

const { Schema } = mongoose;

const productSchema = new Schema({
  name: {
    type: String,
    required: [true, "Product name is required"]
  },
  slug: {
    type: String,
    required: [true, "Slug is required"]
  },
  price: {
    type: Number,
    required: [true, "Product price is required"]
  },
  discount: {
    type: Number,
    default: 0
  },
  size: {
    type: Number,
    required: [true, "Product size is required"]
  },
  images: {
    type: Array,
    required: [true, "Product images are required"]
  },
  cloudURLs: {
    type: Array,
    default: []
  },
  category: {
    type: String,
    required: true,
    enum: ["men", "women", "unisex"]
  },
  description: {
    type: String,
    maxlength: 200
  },
  color: String,
  brand: {
    type: Schema.Types.ObjectId,
    required: true
  }
});

export default mongoose.model("Product", productSchema);
