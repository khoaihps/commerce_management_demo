import { redirect } from "react-router-dom";
import { deleteProvider } from "../additionalFunction";

export async function action({ params }) {
  console.log('Deleting Provider');
  await deleteProvider(params.providerId);
  return redirect("/provider");
}