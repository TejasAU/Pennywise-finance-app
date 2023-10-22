import express from "express";
import User from "./DB_models/User.js"
import { MongoClient } from "mongodb";

const router = express.Router();

const client = new MongoClient("mongodb+srv://bhaaveshw:Pennywise2125@pennywise.vvlnwo3.mongodb.net/")
const db = client.db('PennyWiseDB');

router.post('/', async(req, res) => {
    const newUser = new User(req.body)
    try{
        const savedUser = await newUser.save()
        res.status(200).json(savedUser)
    }catch(err){
        res.status(500).json(err)
    }
})

export default router