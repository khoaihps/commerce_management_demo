import { useEffect } from 'react';
import {useNavigate} from 'react-router-dom'

export const OrderNotApproved = () => {
    const navigate = useNavigate();
    useEffect(() => {
        const myTimeOut = setTimeout(() => {navigate('/order')}, 3000);
        return () => clearTimeout(myTimeOut);
    }, []);
    return <h1>You order is not approved duo to lack of product in inventory</h1>
}