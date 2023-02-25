import { useEffect, useState } from "react";

const searchField = {
    inventory: 'name',
    customer: 'customer_name',
    provider: 'provider_name',
    _import: 'provider_name'
}
export const useSearchBar = (dataType) => {
    const [inputField, setInputField] = useState('');
    const handleInputChange = ({ target }) => {
        setInputField(target.value);
    }
    useEffect(() => {
        setInputField("")
    }, [dataType]);
    const searchCondition = item => {
        if (!searchField.hasOwnProperty(dataType)) return true;
        if (!inputField || inputField.length < 3) return true;
        if (!item.hasOwnProperty(searchField[dataType])) return true;
        return item[searchField[dataType]].toLowerCase().includes(inputField.toLowerCase());
    }
    return [inputField, handleInputChange, searchCondition];
}