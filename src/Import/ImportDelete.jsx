import { redirect } from "react-router-dom";
import { deleteImport } from "../additionalFunction";

export async function action({ params }) {
  console.log('Deleting Import');

  await deleteImport(params.importId);
  return redirect("/import");
}