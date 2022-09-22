// const { Promise } = require("mongoose")
import { NewProduct, ProductsList } from '../../dao/products/product_dao.js';


export function CreateNewProduct(_product_data) {
    return new Promise((resolve, reject) => {
            NewProduct(_product_data).then(res => {
               return resolve(res)
            }).catch(err => {
                return reject(err)
            })
    })
}

export function GetProductsList() {
    return new Promise((resolve, reject) => {
        ProductsList().then(res => {
           return resolve(res)
        }).catch(err => {
            return reject(err)
        })
})
}
