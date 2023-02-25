import { useState } from "react"
import { redirect, useLoaderData } from "react-router-dom";
import { updateProvider, genNewProviderID, addingProvider } from "../additionalFunction";
import { InformationForm } from "../InformationForm";

export async function action({ request }) {
    const formData = await request.formData();
    const updates = Object.fromEntries(formData);
    console.log(updates);
    await addingProvider(updates);
    return redirect(`/provider/${updates.providerId}`);
}
//Khoa gen cai id roi thay vao cai ham duoi nay nay, no tra ve id la duoc
export const loader = async () => {
    const id = await genNewProviderID();
    return id;
}
export const ProviderNew = () => {
    const providerId = useLoaderData();
    return (
        <>
            <h1 className="text-xl font-semibold mb-2">
                Adding a new provider:
            </h1>
            <InformationForm infor={{providerId}}/>

        </>

    )
}