import { useState } from "react"
import { Link } from "react-router-dom"
import { useLoaderData, redirect } from "react-router-dom";
import { updateCustomer } from "../additionalFunction";
import { InformationForm } from "../InformationForm";

export async function action({ request, params }) {
  const formData = await request.formData();
  const updates = Object.fromEntries(formData);
  console.log(updates);
  await updateCustomer(params.customerId, updates);
  return redirect(`/customer/${params.customerId}`);
}
export const CustomerEdit = () => {
  const customer_infor = useLoaderData();
  return (
    <>
      <h1 className="text-xl font-semibold mb-2">
        Edit the information for the customer:
        <Link to={`/customer/${customer_infor.customer_id}`}> <span className="underline decoration-sky-500">{customer_infor.customer_id}</span></Link>
      </h1>
      <InformationForm infor={customer_infor} />
    </>
  )
}