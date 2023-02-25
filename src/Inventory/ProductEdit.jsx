import { useState } from "react"
import { Link } from "react-router-dom"
import { useLoaderData, redirect } from "react-router-dom";
import { updateProduct } from "../additionalFunction";
import { ProductForm } from "./ProductForm";

export async function action({ request, params }) {
  const formData = await request.formData();
  const updates = Object.fromEntries(formData);
  console.log(params.inventoryId);
  await updateProduct(params.inventoryId, updates);
  return redirect(`/inventory/${params.inventoryId}`);
}
export const ProductEdit = () => {
  const product_infor = useLoaderData();
  return (
    <>
      <h1 className="text-xl font-semibold mb-2">
        Edit the information for the product:
        <Link to={`/inventory/${product_infor.product_id}`}> <span className="underline decoration-sky-500">{product_infor.product_id}</span></Link>
      </h1>
      <ProductForm infor={product_infor} />
    </>
  )
}