import { redirect } from "react-router-dom";
import { approveOrder,unapproveOrder } from "../additionalFunction";

export async function action({ params }) {
  console.log('Approving Order');
  try {
    const isSuccessfull = await approveOrder(params.orderId);
    console.log(isSuccessfull);
    if (isSuccessfull) return redirect("/order")
    {
      await unapproveOrder(params.orderId);
      return redirect(`/order/${params.orderId}/not_approved`);
    }
  } catch {
    console.log('Error in fetch');
  }
  return null;
  
}