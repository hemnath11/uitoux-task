import mongoose from "mongoose";

const productSchema = mongoose.Schema({
    productName: {
        type: String
      },
      sku: {
        type: String
      },
      sellingPrice: {
        type: Number
      },
      orginalPrice: {
        type: Number
      },
      type: {
          type: Number
      },
      ratings: {
          type: Number
      },
      reviews: {
          type: Number
      },
      productImg: {
        type: String
      },
      status: {
        type: String,
        default: 'ACTIVE',
        enum: ['ACTIVE', 'INACTIVE']
      }
})

const Product = mongoose.model('products', productSchema)

export default Product;
