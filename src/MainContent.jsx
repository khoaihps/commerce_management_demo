import { Table } from "./Table/Table"
import { useEffect, useState, } from "react"
import { useLocation, useLoaderData } from "react-router-dom"
import { headers } from "./Information"
import { requestForData } from "./additionalFunction"

export const loader = async ({ params }) => {
    return params.data;
}
export const MainContent = () => {
    const capitalizeFirstLetter = (string) => {
        if (!string) return "";
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    const dataType = useLoaderData();
    useEffect(() => {
        document.title = capitalizeFirstLetter(dataType);
    }, [dataType]);
    return (
        <>
            {headers[dataType]}
            <Table dataType={dataType} />
        </>
    )
}