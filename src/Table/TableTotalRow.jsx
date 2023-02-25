export const TableTotalRow = ({ tableData, column }) => {
    const total_value = tableData ? parseInt(tableData.reduce((accumulator, currentValue) => parseInt(accumulator) + parseInt(currentValue.total), 0)) : 0;
    return <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 font-bold">
        <td className="px-6 py-4 text-right" colSpan={column.length - 1}>
            Total
        </td>
        <td className="px-6 py-4">
            {total_value}
        </td>
    </tr>
}
