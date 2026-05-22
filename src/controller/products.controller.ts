import type { IncomingMessage, ServerResponse } from "http";
import { readProduct } from "../service/product.service";

export const productController = (req: IncomingMessage, res: ServerResponse) => {
    const url = req.url;
    const method = req.method;

    if (url === "/products" && method === "GET") {

        // const products = [
        //     {
        //         id: 1,
        //         name: "Wireless Mouse",
        //         category: "Electronics",
        //         price: 1200,
        //         stock: 25,
        //         brand: "Logitech",
        //         rating: 4.5,
        //     },
        //     {
        //         id: 2,
        //         name: "Mechanical Keyboard",
        //         category: "Electronics",
        //         price: 3500,
        //         stock: 15,
        //         brand: "Redragon",
        //         rating: 4.7,
        //     },
        //     {
        //         id: 3,
        //         name: "Gaming Headphone",
        //         category: "Accessories",
        //         price: 2800,
        //         stock: 10,
        //         brand: "Razer",
        //         rating: 4.6,
        //     },
        //     {
        //         id: 4,
        //         name: "Smart Watch",
        //         category: "Wearable",
        //         price: 5500,
        //         stock: 8,
        //         brand: "Xiaomi",
        //         rating: 4.4,
        //     },
        //     {
        //         id: 5,
        //         name: "USB-C Charger",
        //         category: "Mobile Accessories",
        //         price: 900,
        //         stock: 40,
        //         brand: "Anker",
        //         rating: 4.3,
        //     },
        //     {
        //         id: 6,
        //         name: "Laptop Stand",
        //         category: "Office",
        //         price: 1500,
        //         stock: 18,
        //         brand: "Baseus",
        //         rating: 4.5,
        //     },
        //     {
        //         id: 7,
        //         name: "Bluetooth Speaker",
        //         category: "Audio",
        //         price: 3200,
        //         stock: 12,
        //         brand: "JBL",
        //         rating: 4.8,
        //     },
        //     {
        //         id: 8,
        //         name: "External SSD 1TB",
        //         category: "Storage",
        //         price: 9500,
        //         stock: 6,
        //         brand: "Samsung",
        //         rating: 4.9,
        //     },
        // ];

        const products = readProduct()

        res.writeHead(200, { "content-type": "application/json" });
        res.end(JSON.stringify({ message: "Products retrieved successfully", data: products}));
    }
}