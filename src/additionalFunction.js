import {data} from "./data"
export const requestForData = (dataType) => new Promise(resolve => {
    setTimeout(() => {
        resolve({ tableData: data[dataType].tableData, column: data[dataType].column })
    }, 1000);
});

const path = 'http://localhost/dtb_project_php';

export const login = async (username,password) => {
    const url = path+'/user/login.php'
    const params = new URLSearchParams();
    params.append('username', username);
    params.append('password', password);
    const response = await fetch(url, {
        method: 'POST',
        body: params
    });
    const data = await response.json();
    return data;
}
export const fetchProductData = async (productID) => {
    const url = path+'/listing/product/productdata.php'
    const params = new URLSearchParams({ id: productID });
    const response = await fetch(url, {
        method: 'POST',
        body: params
    });
    const data = await response.json();
    return data;
}

export const fetchCustomerData = async (customerId) => {
    const url = path+'/listing/customer/customerdata.php'
    const params = new URLSearchParams({ id: customerId });
    const response = await fetch(url, {
        method: 'POST',
        body: params
    });
    const data = await response.json();
    return data;
}
export const fetchProviderData = async (providerId) => {
    const url = path+'/listing/provider/providerdata.php'
    const params = new URLSearchParams({ id: providerId });
    const response = await fetch(url, {
        method: 'POST',
        body: params
    });
    const data = await response.json();
    return data;
}

export const fetchImportData = async (importID) => {
    const url = path+'/listing/import/importdata.php'
    const params = new URLSearchParams({ id: importID });
    const response = await fetch(url, {
        method: 'POST',
        body: params
    });
    const data = await response.json();
    return data;
}

export const fetchOrderData = async (orderID) => {
    console.log(orderID);
    const url = path+'/listing/order/orderdata.php'
    const params = new URLSearchParams({ id: orderID });
    const response = await fetch(url, {
        method: 'POST',
        body: params
    });
    const data = await response.json();
    return data;
}

export const fetchData = async (dataType, uid) => {
    const url_ = {
        inventory: '/listing/product/inventory.php',
        customer: '/listing/customer/customer.php',
        orderFromCustomer: '/listing/customer/orderFromCustomer.php',
        provider: '/listing/provider/provider.php',     
        importFromProvider: '/listing/provider/importFromProvider.php',
        'import': '/listing/import/import.php',
        importDetail: '/listing/import/importDetail.php',
        order: '/listing/order/order.php',
        orderDetail: '/listing/order/orderDetail.php',
    }
    const url=path+url_[dataType];
    console.log(url);
    const params = new URLSearchParams({ id: uid });
    const response = await fetch(url, {
        method: 'POST',
        body: params
    });
    const data = response.json();
    return data
}

export const genNewCustomerID = async () => {
    const url = path+'/modify/customer/gencustomerid.php';
    const response = await fetch(url);
    return response.json();
}

export const genNewProviderID = async () => {
    const url = path+'/modify/provider/genproviderid.php';
    const response = await fetch(url);
    return response.json();
}

export const addingCustomer = async (data) => {
    const url=path+'/modify/customer/insertcustomer.php'
    const params = new URLSearchParams();
    for (const [key, value] of Object.entries(data)) {
        params.append(key, value);
    }
    fetch(url, {
        method: 'POST',
        body: params
    });
    return true;
}

export const updateCustomer = async (id, data) => {
    const url=path+'/modify/customer/updatecustomerinfo.php'
    const params = new URLSearchParams();
    params.append('id', id);
    for (const [key, value] of Object.entries(data)) {
        params.append(key, value);
    }
    fetch(url, {
        method: 'POST',
        body: params
    });
    return true;
}

export const deleteCustomer = async (id) => {
    const url=path+'/modify/customer/deletecustomer.php'
    const params = new URLSearchParams();
    params.append('id', id);
    const response = await fetch(url, {
        method: 'POST',
        body: params
    });
    console.log(response);
    return true;
}

export const updateProvider = async (id, data) => {
    const url=path+'/modify/provider/updateprovider.php'
    const params = new URLSearchParams();
    params.append('id', id);
    for (const [key, value] of Object.entries(data)) {
        params.append(key, value);
    }
    fetch(url, {
        method: 'POST',
        body: params
    });
    return true;
}
export const addingProvider = async (data) => {
    const url='http://localhost/dtb_project_php/modify/provider/insertprovider.php'
    const params = new URLSearchParams();
    console.log(data);
    for (const [key, value] of Object.entries(data)) {
        params.append(key, value);
    }
    fetch(url, {
        method: 'POST',
        body: params
    });
    return true;
}
export const deleteProvider = async (id) => {
    const url=path+'/modify/provider/deleteprovider.php'
    const params = new URLSearchParams();
    params.append('id', id);
    const response = await fetch(url, {
        method: 'POST',
        body: params
    });
    return true;
}

export const deleteOrder = async (orderID) => {
    const url=path+'/modify/order/deleteorder.php'
    const params = new URLSearchParams({ id: orderID });
    const response = await fetch(url, {
        method: 'POST',
        body: params
    });
    const data = await response.json();
    return data;
}
export const approveOrder = async (orderID) => {
    const url=path+'/modify/order/approveorder.php'
    const params = new URLSearchParams({ id: orderID });
    const response = await fetch(url, {
        method: 'POST',
        body: params
    });
    const data = await response.json();
    console.log(data);
    return data;
}
export const unapproveOrder = async (orderID) => {
    const url=path+'/modify/order/unapproveorder.php'
    const params = new URLSearchParams({ id: orderID });
    const response = await fetch(url, {
        method: 'POST',
        body: params
    });
    const data = await response.json();
    return data;
}
export const rejectOrder = async (orderID) => {
    const url=path+'/modify/order/rejectorder.php'
    const params = new URLSearchParams({ id: orderID });
    const response = await fetch(url, {
        method: 'POST',
        body: params
    });
    const data = await response.json();
    console.log(data);
    return data;
}
//
export const updateProduct = async (id, data) => {
    const url=path+'/modify/product/updateproduct.php'
    const params = new URLSearchParams();
    params.append('id', id);
    for (const [key, value] of Object.entries(data)) {
        params.append(key, value);
    }
    fetch(url, {
        method: 'POST',
        body: params
    });
    return true;
}
export const addingProduct = async (data) => {
    const url=path+'/modify/product/insertproduct.php'
    const params = new URLSearchParams();
    for (const [key, value] of Object.entries(data)) {
        params.append(key, value);
    }
    fetch(url, {
        method: 'POST',
        body: params
    });
    return true;
}
export const genNewProductID = async () => {
    const url = path+'/modify/product/genproductid.php';
    const response = await fetch(url);
    return response.json();
}
export const deleteProduct = async (data) => {
    // const url=path+'/modify/product/deleteproduct.php'
    // const params = new URLSearchParams();
    // params.append('id', id);
    // const response = await fetch(url, {
    //     method: 'POST',
    //     body: params
    // });
    // console.log(response);
    return true;
}
//
// export const updateImport = async (id, data) => {
//     return true;
// }
// export const addingImport = async (data) => {
//     return true;
// }
export const genNewImportID = async () => {
    return 'CS009';
}
export const deleteImport = async (importID) => {
    const url=path+'/modify/import/deleteimport.php'
    const params = new URLSearchParams({ id: importID });
    const response = await fetch(url, {
        method: 'POST',
        body: params
    });
    const data = await response.json();
    console.log(data);
    return data;
}
export const approveImport = async (importID) => {
    const url=path+'/modify/import/approveimport.php'
    const params = new URLSearchParams({ id: importID });
    const response = await fetch(url, {
        method: 'POST',
        body: params
    });
    const data = await response.json();
    console.log(data);
    return data;
}
export const rejectImport = async (importID) => {
    const url=path+'/modify/import/rejectimport.php'
    const params = new URLSearchParams({ id: importID });
    const response = await fetch(url, {
        method: 'POST',
        body: params
    });
    const data = await response.json();
    console.log(data);
    return data;
}
