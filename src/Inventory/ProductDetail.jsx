import { Table } from "../Table/Table";
import { useLoaderData, Form } from "react-router-dom";
import { TrashIcon, PencilSquareIcon } from '@heroicons/react/20/solid';
import { fetchProductData } from "../additionalFunction";


export const loader = async ({ params }) => {
    const getData = async (id) => {
        const order_infor = {
            product_id: 'SP001',
            name: 'Snack',
            quantity: 10,
            sold: 10,
            price_in: 100,
            price_out: 120
        }
        return order_infor;
    }
    console.log(params);
    const data = await fetchProductData(params.inventoryId);

    return data;
}
export const ProductDetail = () => {
    const product_infor = useLoaderData();
    console.log()
    return <div>
        <div className="pb-4 mb-8 border-b border-gray-200 dark:border-gray-800">
            <h1 className="text-3xl font-bold uppercase mb-2">{product_infor.name}</h1>
            <h2 className="text-lg text-gray-500 dark:text-gray-400">Product ID: {product_infor.product_id}</h2>
            <h2 className="text-lg text-gray-500 dark:text-gray-400">Price from provider: {product_infor.price_in}</h2>
            <h2 className="text-lg text-gray-500 dark:text-gray-400">Price sell to customer: {product_infor.price_out}</h2>
            <h2 className="text-lg text-gray-500 dark:text-gray-400">Profit per product: {product_infor.price_out - product_infor.price_in}</h2>
            <h2 className="text-lg text-gray-500 dark:text-gray-400">Number of product left: {product_infor.quantity}</h2>
            <h2 className="text-lg text-gray-500 dark:text-gray-400">Number of product sold: {product_infor.sold}</h2>
            <div className="mb-4"></div>
            <div className="flex">
                <Form action="edit">
                    <button type="submit" className="inline-flex items-center text-gray-500 justify-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                        <PencilSquareIcon className="h-5 w-5" />
                        <h1 className="ml-2">Edit</h1>
                    </button>
                </Form>
                {/* <Form
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
                </Form> */}
            </div>

            {/* <Link to={`${location.pathname}/edit`} className="inline-flex items-center text-gray-500 justify-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                <PencilSquareIcon className="h-5 w-5" />
                <h1 className="ml-2">Edit</h1>
            </Link>
            <Link to={`${location.pathname}/delete`} className="inline-flex items-center text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2 text-center mr-5 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">
                <TrashIcon className="w-5 h-5" />
                <h1 className="ml-2">Delete</h1>
            </Link> */}
        </div>

        {/* <h2 className="mt-2 text-2xl font-semibold">Recent Order</h2> */}
        {/* <Table dataType="order_customer"></Table> */}
    </div>

}