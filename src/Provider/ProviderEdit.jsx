import { useState } from "react"
import { Link } from "react-router-dom"
import { useLoaderData, redirect } from "react-router-dom";
import { updateCustomer, updateProvider } from "../additionalFunction";
import { InformationForm } from "../InformationForm";

export async function action({ request, params }) {
  const formData = await request.formData();
  const updates = Object.fromEntries(formData);
  console.log(updates);
  await updateProvider(params.providerId, updates);
  return redirect(`/provider/${params.providerId}`);
}
export const ProviderEdit = () => {
  const provider_infor = useLoaderData();
  return (
    <>
      <h1 className="text-xl font-semibold mb-2">
        Edit the information for the provider:
        <Link to={`/provider/${provider_infor.provider_id}`}> <span className="underline decoration-sky-500">{provider_infor.provider_id}</span></Link>
      </h1>
      <InformationForm infor={provider_infor} />
    </>
  )
}