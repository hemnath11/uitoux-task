import { CreateNewProduct, GetProductsList } from "../../modules/products/product_module.js";

export function createProduct(req, res) {
    let product = req.body;
    CreateNewProduct(product).then(productRes => {
        res.status(200).json(productRes.data);
    }).catch(error => {
        res.status(400).json(error)
    })

}

export function GetProducts(req, res) {
    GetProductsList().then(response => {
        res.status(200).json(response);
    }).catch(err => {
        res.status(400).json(err)
    })
}

