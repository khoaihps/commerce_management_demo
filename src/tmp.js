// // const num_of_rec = 2;
// // function padWithLeadingZeros(num, totalLength) {
// //     return String(num).padStart(totalLength, '0');
// // }

// // function getStatus() {
// //     const tmp = Math.random();
// //     if (tmp > 0.66) return 'Resolved';
// //     if (tmp > 0.33) return 'Shipping';
// //     return 'Pending';
// // }
// // function getRanking() {
// //     const tmp = Math.random();
// //     if (tmp > 0.9) return 'Gold';
// //     if (tmp > 0.7) return 'Silver';
// //     return 'Bronze';
// // }
// // function factoryInventory(id) {
// //     return {
// //         'id': 'SP' + padWithLeadingZeros(id, 3),
// //         'name': genName(),
// //         'price_in': Math.floor(Math.random() * 1000),
// //         'price_out': Math.floor(Math.random() * 1000),
// //         'sold': Math.floor(Math.random() * 1000),
// //         'quantity': Math.floor(Math.random() * 1000)
// //     }
// // }
// // function randomDate(start, end) {
// //     const today = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
// //     const yyyy = today.getFullYear();
// //     let mm = today.getMonth() + 1; // Months start at 0!
// //     let dd = today.getDate();

// //     if (dd < 10) dd = '0' + dd;
// //     if (mm < 10) mm = '0' + mm;

// //     return yyyy + '/' + mm + '/' + dd;
// // }
// // function factoryOrder(id) {
// //     return {
// //         'id': 'OR' + padWithLeadingZeros(id, 3),
// //         'customer_name': genName() + ' ' + genName(),
// //         'date': randomDate(new Date(2023, 0, 1), new Date()),
// //         'total': Math.floor(Math.random() * 500) + 500,
// //         'status': getStatus(),
// //     }
// // }
// // function factoryCustomer(id) {
// //     return {
// //         'id': 'CU' + padWithLeadingZeros(id, 3),
// //         'customer_name': genName() + ' ' + genName(),
// //         'address': genName() + ' ' + genName() + ' ' + genName(),
// //         'phone_number': genPhoneNumber(),
// //         'ranking': getRanking(),
// //     }
// // }
// // function factoryProductOrder(id) {
// //     return {
// //         'id': 'SP' + padWithLeadingZeros(id, 3),
// //         'name': genName() + ' ' + genName(),
// //         'price': Math.floor(Math.random() * 1000),
// //         'quantity': Math.floor(Math.random() * 10),
// //     }
// // }
// // function factoryProvider(id) {
// //     return {
// //         'id': 'PR' + padWithLeadingZeros(id, 3),
// //         'provider_name': genName() + ' ' + genName(),
// //         'address': genName() + ' ' + genName() + ' ' + genName(),
// //         'phone_number': genPhoneNumber(),
// //     }
// // }
// // function genPhoneNumber(){
// //     let a = [48];
// //     for (let i = 0; i < 9; ++i) a.push(Math.floor(Math.random() * 10) + 48);
// //     return String.fromCharCode(...a)
// // }
// // function genName() {
// //     let a = [];
// //     for (let i = 0; i < 5; ++i) a.push(Math.floor(Math.random() * 26) + 65);
// //     return String.fromCharCode(...a)
// // }
// //  function genInventory() {
// //     let arr = [];
// //     for (let i = 1; i <= num_of_rec; ++i) {
// //         arr.push(factoryInventory(i));
// //     }

// //     return arr;
// // }
// //  function genOrder() {
// //     let arr = [];
// //     for (let i = 1; i <= num_of_rec; ++i) {
// //         arr.push(factoryOrder(i));
// //     }

// //     return arr;
// // }
// //  function genCustomer() {
// //     let arr = [];
// //     for (let i = 1; i <= num_of_rec; ++i) {
// //         arr.push(factoryCustomer(i));
// //     }
// //     return arr;
// // }
// //  function genProvider() {
// //     let arr = [];
// //     for (let i = 1; i <= num_of_rec; ++i) {
// //         arr.push(factoryProvider(i));
// //     }
// //     return arr;
// // }
// //  function genProductOrder() {
// //     let arr = [];
// //     for (let i = 1; i <= num_of_rec; ++i) {
// //         let tmp = factoryProductOrder(i);
// //         tmp['total'] = tmp['quantity'] * tmp['price'];
// //         arr.push(tmp);
// //     }
// //     return arr;
// // }

// // const inventory = {
// //     tableData: genInventory(),
// //     column: [
// //         { label: 'ID', accessor: 'id', sortable: true },
// //         { label: 'Name', accessor: 'name', sortable: true },
// //         { label: 'Price In', accessor: 'price_in', sortable: true },
// //         { label: 'Price Out', accessor: 'price_out', sortable: true },
// //         { label: 'Sold', accessor: 'sold', sortable: true },
// //         { label: 'Quantity', accessor: 'quantity', sortable: true },
// //     ]
// // }
// // const product_order = {
// //     tableData: genProductOrder(),
// //     column: [
// //         { label: 'ID', accessor: 'id', sortable: true },
// //         { label: 'Name', accessor: 'name', sortable: true },
// //         { label: 'Price', accessor: 'price', sortable: true },
// //         { label: 'Quantity', accessor: 'quantity', sortable: true },
// //         { label: 'Total', accessor: 'total', sortable: true },
// //     ]
// // }
// // const order = {
// //     tableData: genOrder(),
// //     column: [
// //         { label: 'ID', accessor: 'id', sortable: true },
// //         { label: 'Customer Name', accessor: 'customer_name', sortable: true },
// //         { label: 'Date', accessor: 'date', sortable: true },
// //         { label: 'Total', accessor: 'total', sortable: true },
// //         { label: 'Status', accessor: 'status', sortable: false },
// //     ]
// // }
// // const customer = {
// //     tableData: genCustomer(),
// //     column: [
// //         { label: 'ID', accessor: 'id', sortable: true },
// //         { label: 'Customer Name', accessor: 'customer_name', sortable: true },
// //         { label: 'Address', accessor: 'address', sortable: false },
// //         { label: 'Phone Number', accessor: 'phone_number', sortable: false },
// //         { label: 'Ranking', accessor: 'ranking', sortable: false },
// //     ]
// // }
// // const provider = {
// //     tableData: genProvider(),
// //     column: [
// //         { label: 'ID', accessor: 'id', sortable: true },
// //         { label: 'Provider Name', accessor: 'provider_name', sortable: true },
// //         { label: 'Address', accessor: 'address', sortable: false },
// //         { label: 'Phone Number', accessor: 'phone_number', sortable: false },
// //     ]
// // }
// // const data = {inventory, product_order, order, customer, provider}

// // const fs = require('fs');
// // const content = [];
// // [genCustomer, genInventory, genOrder, genProductOrder, genProvider]
// // .forEach(item => {
// //     content.push(item());
// // })
// // console.log(content)
// //     fs.writeFile('./sample', JSON.stringify(content, null, 4), err => {
// //         if (err) {
// //           console.error(err);
// //         }
// //       });



// const tmp = [
//     {
//         h1: 'Inventory',
//         h2: 'List of product are curently on the selves'
//     },
//     {
//         h1: 'Order',
//         h2: 'List of all order was made',
//     },
//     {
//         h1: 'Customer',
//         h2: 'List of all customers and their information',
//     },
//     {
//         h1: 'Provider',
//         h2: 'List of all privider who provide the goods',
//     },
//     {
//         h1: 'Import',
//         h2: 'List of all import recently',
//     },
// ]

// console.log(tmp.map(item => 
//     `<>
//         <h1 className="text-5xl font-semibold">${item.h1}</h1>
//         <h2 className="mb-5">${item.h2}</h2>
//     </>`))


// function objFac(id) {
//     return {
//         id: id,
//         value: Math.floor(Math.random() * 100)
//     }
// }
// const arr = [];
// for (let i = 0; i < 10; ++i) arr.push(objFac(i));
// console.log(arr);
// console.log(arr.reduce((a, b) => a + b.value, 0))

function f(a, b){
    return a;
}
console.log(f(1, 2));
console.log(f(1));
