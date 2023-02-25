const num_of_rec = 10;
function padWithLeadingZeros(num, totalLength) {
    return String(num).padStart(totalLength, '0');
}

function getStatus() {
    const tmp = Math.random();
    if (tmp > 0.66) return 'Resolved';
    if (tmp > 0.33) return 'Shipping';
    return 'Pending';
}
function getStatus2() {
    const tmp = Math.random();
    if (tmp > 0.5) return 'Checked';
    return 'Unchecked';
}
function getRanking() {
    const tmp = Math.random();
    if (tmp > 0.9) return 'Gold';
    if (tmp > 0.7) return 'Silver';
    return 'Bronze';
}
function factoryInventory(id) {
    return {
        'id': 'SP' + padWithLeadingZeros(id, 3),
        'name': genName(),
        'price_in': Math.floor(Math.random() * 1000),
        'price_out': Math.floor(Math.random() * 1000),
        'sold': Math.floor(Math.random() * 1000),
        'quantity': Math.floor(Math.random() * 1000)
    }
}
function randomDate(start, end) {
    const today = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1; // Months start at 0!
    let dd = today.getDate();

    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;

    return yyyy + '/' + mm + '/' + dd;
}
function factoryOrder(id) {
    return {
        'id': 'OR' + padWithLeadingZeros(id, 3),
        'customer_name': genName() + ' ' + genName(),
        'date': randomDate(new Date(2023, 0, 1), new Date()),
        'total': Math.floor(Math.random() * 500) + 500,
        'status': getStatus(),
    }
}
function factoryCustomer(id) {
    return {
        'id': 'CS' + padWithLeadingZeros(id, 3),
        'customer_name': genName() + ' ' + genName(),
        'address': genName() + ' ' + genName() + ' ' + genName(),
        'phone_number': genPhoneNumber(),
        'ranking': getRanking(),
    }
}
function factoryProductOrder(id) {
    return {
        'id': 'SP' + padWithLeadingZeros(id, 3),
        'name': genName() + ' ' + genName(),
        'price': Math.floor(Math.random() * 1000),
        'quantity': Math.floor(Math.random() * 10) + 1,
    }
}
function factoryProvider(id) {
    return {
        'id': 'PR' + padWithLeadingZeros(id, 3),
        'provider_name': genName() + ' ' + genName(),
        'address': genName() + ' ' + genName() + ' ' + genName(),
        'phone_number': genPhoneNumber(),
    }
}
function factoryImport(id) {
    return {
        'id': 'IP' + padWithLeadingZeros(id, 3),
        'provider_name': genName() + ' ' + genName(),
        'phone_number': genPhoneNumber(),
        'date': randomDate(new Date(2023, 0, 1), new Date()),
        'total': Math.floor(Math.random() * 500) + 500,
        'status': getStatus2()
    }
}
function genPhoneNumber(){
    let a = [48];
    for (let i = 0; i < 9; ++i) a.push(Math.floor(Math.random() * 10) + 48);
    return String.fromCharCode(...a)
}
function genName() {
    let a = [];
    for (let i = 0; i < 5; ++i) a.push(Math.floor(Math.random() * 26) + 65);
    return String.fromCharCode(...a)
}
export function genInventory() {
    let arr = [];
    for (let i = 1; i <= num_of_rec; ++i) {
        arr.push(factoryInventory(i));
    }

    return arr;
}
export function genOrder() {
    let arr = [];
    for (let i = 1; i <= num_of_rec; ++i) {
        arr.push(factoryOrder(i));
    }

    return arr;
}
export function genCustomer() {
    let arr = [];
    for (let i = 1; i <= num_of_rec; ++i) {
        arr.push(factoryCustomer(i));
    }
    return arr;
}
export function genProvider() {
    let arr = [];
    for (let i = 1; i <= num_of_rec; ++i) {
        arr.push(factoryProvider(i));
    }
    return arr;
}
export function genProductOrder() {
    let arr = [];
    for (let i = 1; i <= num_of_rec; ++i) {
        let tmp = factoryProductOrder(i);
        tmp['total'] = tmp['quantity'] * tmp['price'];
        arr.push(tmp);
    }
    return arr;
}
export function genImportProduct() {
    let arr = [];
    for (let i = 1; i <= num_of_rec; ++i) {
        let tmp = factoryImport(i);
        arr.push(tmp);
    }
    return arr;
}