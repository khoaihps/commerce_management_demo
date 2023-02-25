import React from 'react';
import ReactDOM from 'react-dom/client';
import { MainContent, loader as mainContentLoader } from './MainContent';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import { ErrorPage } from "./ErrorPage";
import {
  OrderDetail,
  loader as orderLoader
} from './Order/OrderDetail';
import { action as orderDelete } from './Order/OrderDelete';
import { action as orderApprove } from './Order/OrderApprove';
import { action as orderReject } from './Order/OrderReject';
import { OrderNotApproved } from './Order/OrderNotApproved';



import { 
  ImportDetail,
  loader as importLoader
} from './Import/ImportDetail';
import { action as importDelete } from './Import/ImportDelete';
import { action as importApprove } from './Import/ImportApprove';
import { action as importReject } from './Import/ImportReject';

import {
  ProductDetail,
  loader as productLoader
} from './Inventory/ProductDetail';
import { action as productDelete } from './Inventory/ProductDelete';
import {ProductEdit, action as productEdit} from './Inventory/ProductEdit'
import {
  ProductNew,
  action as productNew, loader as productNewId
} from './Inventory/ProductNew';


import {
  CustomerDetail,
  loader as customerLoader
} from './Customer/CustomerDetail';
import {
  CustomerEdit,
  action as customerEdit
} from './Customer/CustomerEdit';
import {
  CustomerNew,
  action as customerNew, 
  loader as customerNewId
} from './Customer/CustomerNew';
import { action as customerDelete } from './Customer/CustomerDelete';
import {
  ProviderDetail,
  loader as providerLoader
} from './Provider/ProviderDetail';
import {
  ProviderEdit,
  action as providerEdit
} from './Provider/ProviderEdit';
import {
  ProviderNew,
  loader as providerNewId,
  action as providerNew
} from './Provider/ProviderNew';
import { action as providerDelete } from './Provider/ProviderDelete';



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/:data",
        element: <MainContent />,
        loader: mainContentLoader
      },
      {
        path: "customer/:customerId",
        element: <CustomerDetail />,
        loader: customerLoader
      },
      {
        path: "customer/new",
        element: <CustomerNew />,
        action: customerNew,
        loader: customerNewId
      },
      {
        path: "customer/:customerId/edit",
        element: <CustomerEdit />,
        loader: customerLoader,
        action: customerEdit
      },
      {
        path: "customer/:customerId/delete",
        action: customerDelete
      },
      {
        path: "provider/:providerId",
        element: <ProviderDetail />,
        loader: providerLoader
      },
      {
        path: "provider/new",
        element: <ProviderNew />,
        loader: providerNewId,
        action: providerNew
      },
      {
        path: "provider/:providerId/edit",
        element: <ProviderEdit />,
        loader: providerLoader,
        action: providerEdit
      },
      {
        path: "provider/:providerId/delete",
        action: providerDelete
      },
      //Order
      {
        path: "order/:orderId",
        element: <OrderDetail />,
        loader: orderLoader
      },
      {
        path: "order/:orderId/delete",
        action: orderDelete
      },
      {
        path: "order/:orderId/approve",
        action: orderApprove
      },
      {
        path: "order/:orderId/not_approved",
        element: <OrderNotApproved />
      },
      {
        path: "order/:orderId/reject",
        action: orderReject
      },
      //Inventory
      {
        path: "inventory/:inventoryId",
        element: <ProductDetail />,
        loader: productLoader
      },
      {
        path: "inventory/:inventoryId/delete",
        action: productDelete
      },
      {
        path: "inventory/:inventoryId/edit",
        element: <ProductEdit />,
        loader: productLoader,
        action: productEdit
      },
      {
        path: "inventory/new",
        element: <ProductNew />,
        loader: productNewId,
        action: productNew
      },
      //Import
      {
        path: "import/:importId",
        element: <ImportDetail />,
        loader: importLoader
      },
      {
        path: "import/:importId/delete",
        action: importDelete
      },
      {
        path: "import/:importId/approve",
        action: importApprove
      },
      {
        path: "import/:importId/reject",
        action: importReject
      },
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

