import { TableHeaderRow } from "./TableHeaderRow"
import { TableDataRow } from "./TableDataRow"
import { Loading } from "./Loading"
import { useSortableTable } from "./useSortableTable"
import { data } from "../data"
import { FilterButton } from "./FilterButton"
import { SearchBar } from "./SearchBar"
import { useFilter } from "./useFilter"
import { useSearchBar } from "./useSearchBar"
import { useNavigate } from "react-router-dom"
import { TableNewRow } from "./TableNewRow"
import { TableTotalRow } from "./TableTotalRow"
const requiredSearchBar = [
    'inventory',
    'customer',
    'provider',
    'import',
];

const requiredFilter = [
    'order',
    'customer',
    'import',
];

const requiredAddingNewRow = [
    'customer',
    'provider',
    'inventory'
];
const requireTotalRow = [
    'importDetail',
    'orderDetail'
]
const redirectPath = {
    orderFromCustomer: 'order',
    importFromProvider: 'import',
    orderDetail: 'inventory',
    importDetail: 'inventory'
}
export const Table = ({ dataType, params }) => {
    const navigate = useNavigate();
    const column = data[dataType].column;
    const [tableData, sortData] = useSortableTable(dataType, params);
    const [setFilterValue, filterCondition] = useFilter(dataType)
    const [inputField, handleInputChange, searchCondition] = useSearchBar(dataType);
    const handleRowClick = (id) => {
        if (redirectPath.hasOwnProperty(dataType)) navigate(`/${redirectPath[dataType]}/${id}`)
        else navigate(`/${dataType}/${id}`);
    }

    return (<>
        <div class="flex items-center justify-between pb-4">
            {requiredFilter.includes(dataType) && <FilterButton dataType={dataType} setFilterValue={setFilterValue} />}
            {requiredSearchBar.includes(dataType) && <SearchBar input={inputField} handleInputChange={handleInputChange} />}
        </div>
        {
            !(column && tableData) ? <Loading /> :
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <TableHeaderRow headerList={column} handleSorting={sortData} />
                    </thead>
                    <tbody>
                        {tableData
                            .filter(searchCondition)
                            .filter(filterCondition)
                            .map(item => <TableDataRow rowData={item} column={column} key={item.id} onClick={handleRowClick} />
                            )}
                    </tbody>
                    <tfoot class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        {requiredAddingNewRow.includes(dataType) && <TableNewRow column={column} onClick={handleRowClick}/>}
                        {requireTotalRow.includes(dataType) && <TableTotalRow column={column} tableData={tableData}/>}
                    </tfoot>

                </table>
        }
    </>
    )
}