import { genCustomer, genInventory, genOrder, genProductOrder, genProvider, genImportProduct } from "./gen"
const inventory = {
    tableData: genInventory(),
    column: [
        { label: 'ID', accessor: 'id', sortable: true },
        { label: 'Name', accessor: 'name', sortable: true },
        { label: 'Price In', accessor: 'price_in', sortable: true },
        { label: 'Price Out', accessor: 'price_out', sortable: true },
        { label: 'Sold', accessor: 'sold', sortable: true },
        { label: 'Quantity', accessor: 'quantity', sortable: true },
    ]
}
const orderDetail = {
    tableData: genProductOrder(),
    column: [
        { label: 'ID', accessor: 'id', sortable: true },
        { label: 'Name', accessor: 'name', sortable: true },
        { label: 'Price', accessor: 'price', sortable: true },
        { label: 'Quantity', accessor: 'quantity', sortable: true },
        { label: 'Total', accessor: 'total', sortable: true },
    ]
}
const importDetail = {
    tableData: genProductOrder(),
    column: [
        { label: 'ID', accessor: 'id', sortable: true },
        { label: 'Name', accessor: 'name', sortable: true },
        { label: 'Price', accessor: 'price', sortable: true },
        { label: 'Quantity', accessor: 'quantity', sortable: true },
        { label: 'Total', accessor: 'total', sortable: true },
    ]
}
const order = {
    tableData: genOrder(),
    column: [
        { label: 'ID', accessor: 'id', sortable: true },
        { label: 'Customer Name', accessor: 'customer_name', sortable: true },
        { label: 'Date', accessor: 'date', sortable: true },
        { label: 'Total', accessor: 'total', sortable: true },
        { label: 'Status', accessor: 'status', sortable: false },
    ]
}
const customer = {
    tableData: genCustomer(),
    column: [
        { label: 'ID', accessor: 'id', sortable: true },
        { label: 'Customer Name', accessor: 'customer_name', sortable: true },
        { label: 'Address', accessor: 'address', sortable: false },
        { label: 'Phone Number', accessor: 'phone_number', sortable: false },
        { label: 'Ranking', accessor: 'ranking', sortable: false },
    ]
}
const provider = {
    tableData: genProvider(),
    column: [
        { label: 'ID', accessor: 'id', sortable: true },
        { label: 'Provider Name', accessor: 'provider_name', sortable: true },
        { label: 'Address', accessor: 'address', sortable: false },
        { label: 'Phone Number', accessor: 'phone_number', sortable: false },
    ]
}
const _import = {
    tableData: genImportProduct(),
    column: [
        { label: 'ID', accessor: 'id', sortable: true },
        { label: 'Provider Name', accessor: 'provider_name', sortable: true },
        { label: 'Date', accessor: 'date', sortable: true },
        { label: 'Total', accessor: 'total', sortable: true },
        { label: 'Status', accessor: 'status', sortable: false },

    ]
}
const importFromProvider = {
    tableData: genImportProduct(),
    column: [
        { label: 'ID', accessor: 'id', sortable: true },
        { label: 'Date', accessor: 'date', sortable: true },
        { label: 'Total', accessor: 'total', sortable: true },   
        { label: 'Status', accessor: 'status', sortable: false },
    ]
}
const orderFromCustomer = {
    tableData: genOrder(),
    column: [
        { label: 'ID', accessor: 'id', sortable: true },
        { label: 'Date', accessor: 'date', sortable: true },
        { label: 'Total', accessor: 'total', sortable: true },
        { label: 'Status', accessor: 'status', sortable: false },
    ]
}

export const data = {inventory, orderDetail, order, customer, provider, 'import':_import, orderFromCustomer, importFromProvider, importDetail}