import { redirect } from "react-router-dom";
import { rejectOrder } from "../additionalFunction";

export async function action({ params }) {
  console.log('Reject Order');

  await rejectOrder(params.orderId);
  return redirect("/order");
}