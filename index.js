const express = require("express");

const app = express();

require("dotenv").config();

app.use(express.json());

const connectDB = require("./connectMongo");

connectDB();


const ProductModel = require("./models/product.model");
const OrderModel = require("./models/order.model");


app.get("/api/v1/products", async (req, res) => {
    try {
        const data = await ProductModel.find({});
        const totalItems = await ProductModel.countDocuments({});

        const response = {
            data, 
        };

        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({ msg: error.message });
    }
});

app.get("/api/v1/products/:id", async (req, res) => {
    try {
        const data = await ProductModel.findById(req.params.id);

        if (data) {
            return res.status(200).json({
                msg: "Ok",
                data,
            });
        }

        return res.status(404).json({
            msg: "Not Found",
        });
    } catch (error) {
        return res.status(500).json({
            msg: error.message,
        });
    }
});

app.post("/api/v1/orders", async (req, res) => {
    try {
        const { productname, productprice, quantity, name, phone, address } = req.body;
        const order = new OrderModel({
            productname,
            productprice,
            quantity,
            name,
            phone,
            address,
        });
        const data = await order.save();

        return res.status(200).json({
            data,
        });
    } catch (error) {
        return res.status(500).json({
            msg: error.message,
        });
    }
});


const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log("Server is running on port " + PORT);
});