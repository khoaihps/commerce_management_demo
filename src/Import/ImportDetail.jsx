import { Table } from "../Table/Table";
import { useLoaderData, Form, Link } from "react-router-dom";
import { XMarkIcon, TrashIcon, CheckIcon } from '@heroicons/react/20/solid'
import { requestForData, fetchImportData } from "../additionalFunction";


export const loader = async ({ params }) => {
    const getData = async (id) => {
        const import_infor = {
            import_id: 'OR001',
            date_ordered: '2023/01/02',
            provider_id: 'CS001',
            provider_name: 'Mai Duc An',
            status: 'Checked'
        }
        return import_infor;
    }
    const import_infor = await fetchImportData(params.importId);
    return import_infor;
}




export const ImportDetail = () => {
    const import_infor = useLoaderData();
    return <div>
        <div className="pb-4 mb-8 border-b border-gray-200 dark:border-gray-800">
            <h1 className="text-3xl font-bold uppercase mb-2">Import: #{import_infor.import_id}</h1>
            <h2 className="text-lg text-gray-500 dark:text-gray-400">This order was ordered on: {import_infor.date_ordered}</h2>
            <h2 className="text-lg text-gray-500 dark:text-gray-400">
                {"Ordered By: "}
                <Link to={`/provider/${import_infor.provider_id}`}>
                    <span className="underline decoration-sky-500">{import_infor.provider_id} - {import_infor.provider_name}</span>
                </Link>
            </h2>
            <h2 className="text-lg text-gray-500 dark:text-gray-400">Status: {import_infor.status}</h2>

            <div className="mb-4"></div>
            <div className="flex">
                {import_infor.status == 'Unchecked' && <Form
                    action="approve"
                    method="post"
                    onSubmit={(event) => {
                        if (
                            !confirm(
                                "Please confirm you want to approve this record."
                            )
                        ) {
                            event.preventDefault();
                        }
                    }}>
                    <button type="submit" className="inline-flex items-center focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                        <CheckIcon className="h-5 w-5" />
                        <h1 className="ml-2">Approve</h1>
                    </button>
                </Form>}
                {import_infor.status == 'Unchecked' && <Form
                    action="reject"
                    method="post"
                    onSubmit={(event) => {
                        if (
                            !confirm(
                                "Please confirm you want to reject this record."
                            )
                        ) {
                            event.preventDefault();
                        }
                    }}>
                    <button type="submit" className="inline-flex items-center focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
                        <XMarkIcon className="w-5 h-5" />
                        <h1 className="ml-2">Reject</h1>
                    </button>
                </Form>}
                {import_infor.status != 'Unchecked' && <Form
                    action="delete"
                    method="post"
                    onSubmit={(event) => {
                        if (
                            !confirm(
                                "Please confirm you want to delete this record."
                            )
                        ) {
                            event.preventDefault();
                        }
                    }}>
                    <button type="submit" className="inline-flex items-center text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2 text-center mr-5 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">
                        <TrashIcon className="w-5 h-5" />
                        <h1 className="ml-2">Delete</h1>
                    </button>
                </Form>}
            </div>
        </div>
        <h2 className="mt-2 text-2xl font-semibold">Product detail: </h2>
        <Table dataType="importDetail" params={import_infor.import_id}></Table>
    </div>

}