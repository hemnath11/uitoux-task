import Product from '../../models/products/product_model.js'

export function NewProduct(_product_data) {
   return new Promise((resolve, reject) => {
        const product = new Product(_product_data);

       return product.save((err, doc) => {
            console.log(err);
            if(!err) {
                let success = {
                    status: 200,
                    product: doc,
                    success_msg: "Product has been created successfully..!"
                }
              return  resolve(success)
            }
            else {
                let error = {
                    status: 400,
                    error: err,
                    error_msg: "Product Not Created!.."
                }

                return reject(error)
            }
        })
    })
}

export function ProductsList() {
    return new Promise((resolve, reject) => {
       Product.find(function(err, data) {
        if(err){
            reject(err)
        }
        else{
            resolve(data);
        }
    });  
    })   
}
