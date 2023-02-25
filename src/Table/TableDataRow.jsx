export const TableDataRow = ({ rowData, column, onClick }) => {
    return <tr className="cursor-pointer bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50" onClick={() => {onClick(rowData.id)}}>
        {column.map(item => <td className="px-6 py-4" key={item.accessor}>
            {rowData[item.accessor]}
        </td>)}
    </tr>
}