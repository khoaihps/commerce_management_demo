import { useState } from "react"
import { redirect, useLoaderData } from "react-router-dom";
import { updateCustomer, genNewCustomerID, addingCustomer } from "../additionalFunction";
import { InformationForm } from "../InformationForm";

export async function action({ request }) {
    const formData = await request.formData();
    const updates = Object.fromEntries(formData);
    console.log(updates);
    await addingCustomer(updates);
    return redirect(`/customer/${updates.customerId}`);
}
//Khoa gen cai id roi thay vao cai ham duoi nay nay, no tra ve id la duoc
export const loader = async () => {
    const id = await genNewCustomerID();
    return id;
}
export const CustomerNew = () => {
    const customerId = useLoaderData();
    console.log(customerId);
    return (
        <>
            <h1 className="text-xl font-semibold mb-2">
                Adding a new customer:
            </h1>
            <InformationForm infor={{customerId}}/>

        </>

    )
}