import { useState, useEffect } from "react";
import { requestForData, fetchData } from "../additionalFunction";

export const useSortableTable = (dataType, params) => {
    const [tableData, setTableData] = useState(null);
    useEffect(() => {
        fetchData(dataType, params)
        .then((data) => setTableData(data));
        // setTableData(null);
        // (async () => {
        //     const requestedTableData = await requestForData(dataType, params);
        //     setTableData(requestedTableData.tableData);
        // })();
    }, [dataType])
    const sortData = (sortField, sortOrder) => {
        if (!tableData) return;
        if (!tableData[0].hasOwnProperty(sortField)) return;
        const initialState = sortOrder == 'asc' ? 1 : -1;
        setTableData(prev => {
            return [...prev].sort((item1, item2) => {
                if (item1[sortField] > item2[sortField]) return 1 * initialState;
                if (item1[sortField] < item2[sortField]) return -1 * initialState;
                return 0;
            })
        })
    }
    return [tableData, sortData];
}