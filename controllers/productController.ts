import { Product } from "../models/products";
import { User } from "../models/users";

export const getAllProducts = async (req, res) => {
    try {
        const category = req.query.category;
        const SortBy = req.query.SortBy;
        if (SortBy !== undefined) {
            if (category === undefined) {
                const products = await Product.find().sort({ price: -1 });
                res.json(products);
            }
            else {
                const product = await Product.find({ "category": category }).sort({ price: -1 });
                res.json(product);
            }
        }
        else {
            if (category === undefined) {
                const products = await Product.find();
                res.json(products);
            }
            else {
                const product = await Product.find({ "category": category });
                res.json(product);
            }
        }
    } catch {
        res.status(500).json({ error: true, message: "error occured" });
    }

};

/*
export const getProductsCategory = async (req, res) => {
    try {
        const category = req.query.category;
        const product = await Product.find({ "category": category });
        res.json(product);
    } catch {
        res.status(500).json({ error: true, message: "error occured" });
    }



    let OrderBy;
    const products = await Product.find();
    res.json(products);
}
*/


export const addProduct = async (req, res) => {
    const product = new Product({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        category: req.body.category,
        quantity: req.body.quantity,
        created_by: req.body.created_by
    })
    let userid = product.created_by;
    let user = await User.findById(userid);
    if (user && user.accountType == "Seller") {
        await product.save();
        res.status(201).json(product);
    }
    else {
        res.json("Only Seller can Add Products");
    }
}
