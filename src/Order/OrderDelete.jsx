import { redirect } from "react-router-dom";
import { deleteOrder } from "../additionalFunction";

export async function action({ params }) {
  console.log('Deleting Customer');

  await deleteOrder(params.orderId);
  return redirect("/order");
}