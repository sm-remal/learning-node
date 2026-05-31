import path from "path"
import fs from "fs"

const filePath = path.join(process.cwd(), "./src/database/db.json");

// Data Read
export const readProduct = () => {
    // console.log(process.cwd())
    //  console.log(filePath)
    const products = fs.readFileSync(filePath, "utf-8");
    // console.log(products.toString())
    // console.log(products)
    return JSON.parse(products);
}

// Data Write
export const insertProduct = (payLoad: any) => {{
    fs.writeFileSync(filePath, payLoad)
}}