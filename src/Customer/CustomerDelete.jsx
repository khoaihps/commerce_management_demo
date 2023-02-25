import { redirect } from "react-router-dom";
import { deleteCustomer } from "../additionalFunction";

export async function action({ params }) {
  console.log('Deleting Customer');

  await deleteCustomer(params.customerId);
  return redirect("/customer");
}