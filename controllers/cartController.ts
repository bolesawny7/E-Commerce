import { Cart } from "../models/carts";
import { Product } from "../models/products";
import { User } from "../models/users";
export const addProductToCart = async (req, res) => {
    const product = await Product.findById(req.params.productId);
    if (product !== null) {
        let user = await User.findById(req.params.userId);
        if (user !== null) {
            if (user.accountType == "Buyer") {
                const userCart = await Cart.findOne({ created_by: user._id })
                if (!userCart) {
                    const cart = new Cart({
                        totalPrice: product.price,
                        products: product.name,
                        created_by: user._id
                    })
                    await cart.save();
                    res.status(201).json(cart);
                }
                else {
                    userCart.totalPrice += product.price;
                    userCart.products.push(product.name);
                    await userCart.save();
                    res.status(201).json(userCart);
                }
            }
            else {
                res.json("Only Buyer can Add Products");
            }
        }
        else {
            res.json("There is no such user")
        }
    }
    else {
        res.json("There is no such product")
    }
}


export const getAllCarts = async (req, res) => {
    let user = await User.findById(req.params.id);
    const carts = await Cart.find({ created_by: user });
    res.json(carts);
};

export const deleteProductFromCart = async (req, res) => {
    const product = await Product.findById(req.params.productId);
    if (product !== null) {
        let user = await User.findById(req.params.userId);
        if (user !== null) {
            if (user.accountType == "Buyer") {
                const userCart = await Cart.findOne({ created_by: user._id })
                if (!userCart) {
                    res.json("You Don't Have Cart")
                }
                else {
                    userCart.totalPrice -= product.price;
                    let i = 0;
                    let index = 0;
                    while(userCart.products.length) {
                        if (userCart.products[i] === product.name) {
                            index = i;
                            break;
                        }
                        i++;
                    }
                    userCart.products.splice(index,1);
                    await userCart.save();
                    res.status(201).json(userCart);
                }
            }
            else {
                res.json("Only Buyer can delete Products");
            }
        }
        else {
            res.json("There is no such user")
        }
    } else {
        res.json("There is no such product")
    }
}
