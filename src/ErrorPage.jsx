import { useRouteError, Link } from "react-router-dom";
import Img404NotFound from './images/Img404NotFound.png'
export const ErrorPage = () => {
    const error = useRouteError();
    console.error(error);
    return <div className="w-full min-h-screen items-center flex justify-center	flex-col">
        <img src={Img404NotFound} className="max-w-sm" />
        <h1 className="my-2 text-xl font-bold text-gray-800">Looks like you've found the doorway to the great nothing</h1>
        <p className="my-2 text-gray-500">Sorry about that! Please visit our hompage to get where you need to go.</p>
        <Link to="/" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mx-2 my-3 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Take me there</Link>
    </div>


}