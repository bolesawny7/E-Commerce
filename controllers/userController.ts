import { Db, ObjectId } from "mongodb";
import { User } from "../models/users";
// function to send users as json objects
export const getAllUsers = async (req, res) => {
    const users = await User.find();
    res.json(users);
};

export const getUsersId = async (req, res) => {
    const user = await User.findById(req.params.id);
    res.json(user);
};


//adding users function
export const addUsers = async (req, res) => {
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        phoneNumber: req.body.phoneNumber,
        accountType: req.body.accountType
    })
    await user.save();
    //201 == created
    res.status(201).json(user);
};

export const updateUsers = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        Object.assign(user, req.body)
        user?.save()
        res.send({ data: user })
    }
    catch {
        res.status(404).send({ error: "User not Found" });
    }
}

export const deleteUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        await user?.remove();
        res.send({ data: true })
    }
    catch {
        res.status(404).send({ error: "User not Found" });

    }
};




/*
const updateUsers = (req, res) => {
    const { name, email, password, phoneNumber, accountType } = req.body;
    const { id } = req.params;
    let updatedUser = users.find((updatedUser) => updatedUser.id == id);
    if (!updatedUser) {
        res.json({
            message: "not found",
        });
    } else {
        updatedUser = {
            id: updatedUser.id,
            name: name || updatedUser.name,
            email: email || updatedUser.email,
            password: password || updatedUser.password,
            phoneNumber: phoneNumber || updatedUser.phoneNumber,
            accountType: accountType || updatedUser.accountType,
        };
        res.json(updatedUser);
    }
};

const deleteUser = (req, res) => {
    const { id } = req.params;
    const user = users.find((user) => user.id == id);
    if (!user) {
        res.json({
            message: "not found",
        });
    } else {
        const index = users.indexOf(user);
        users.splice(index, 1);
        res.json({
            message: "Deleted",
            users
        })
    }
};
*/







