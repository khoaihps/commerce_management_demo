import { useState } from "react"
import { redirect, useLoaderData } from "react-router-dom";
import { addingProduct, genNewProductID, updateProduct } from "../additionalFunction";
import { ProductForm } from "./ProductForm";

export async function action({ request }) {
    const formData = await request.formData();
    const updates = Object.fromEntries(formData);
    console.log(updates);
    await addingProduct(updates);
    return redirect(`/inventory/${updates.product_id}`);
}
//Khoa gen cai id roi thay vao cai ham duoi nay nay, no tra ve id la duoc
export const loader = async () => {
    const id = await genNewProductID();
    return id;
}
export const ProductNew = () => {
    const product_id = useLoaderData();
    console.log(product_id);
    return (
        <>
            <h1 className="text-xl font-semibold mb-2">
                Adding a new product:
            </h1>
            <ProductForm infor={{product_id}}/>

        </>

    )
}