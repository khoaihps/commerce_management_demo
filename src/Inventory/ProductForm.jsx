import { useState } from "react";
import { Form, useNavigate } from 'react-router-dom'

export const ProductForm = ({ infor }) => {
    const navigate = useNavigate();
    const [name, setName] = useState(infor.name)
    const [quantity, setQuantity] = useState(infor.quantity)
    const [priceIn, setPriceIn] = useState(infor.price_in);
    const [priceOut, setPriceOut] = useState(infor.price_out);

    const hanldeNameChange = ({ target }) => {
        setName(target.value)
    }
    const handleQuantityChange = ({ target }) => {
        setQuantity(target.value);
    }
    const handlePriceInChange = ({ target }) => {
        setPriceIn(target.value);
    }
    const handlePriceOutChange = ({ target }) => {
        setPriceOut(target.value);
    }
    return (<Form method="post" >
        {infor.product_id && <div class="mb-6">
            <label for="product_id" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product ID</label>
            <input type="text" id="product_id" name="product_id" class="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" value={infor.product_id} readOnly />
        </div>}
        <div class="mb-6">
            <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
            <input type="name" value={name} onChange={hanldeNameChange} id="name" name="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Product name" required />
        </div>
        
        <div class="mb-6">
            <label for="quantity" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Quantity</label>
            <input type="number" id="quantity" value={quantity} onChange={handleQuantityChange} name="quantity" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Quantity" required />
        </div>
        <div class="mb-6">
            <label for="price_in" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price In</label>
            <input type="number" id="price_in" value={priceIn} onChange={handlePriceInChange} name="price_in" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Price in" required />
        </div>
        <div class="mb-6">
            <label for="price_out" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price Out</label>
            <input type="number" id="price_out" value={priceOut} onChange={handlePriceOutChange} name="price_out" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Price out" required />
        </div>
        <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Save</button>
        <button type="button" class="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-800 ml-5"
            onClick={() => {
                navigate(-1);
            }}>
            Cancel
        </button>

    </Form>)
}