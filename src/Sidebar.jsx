import { NavLink } from "react-router-dom"
import { ImportIcon, InventoryIcon, OrderIcon, CustomerIcon, ProviderIcon } from "./icon"
export const SideBar = () => {
   return (
      <aside id="logo-sidebar" class="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700" aria-label="Sidebar">
         <div class="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
            <ul class="space-y-2">
               <li>
                  <NavLink to="/inventory" className={({isActive, isPending}) => {
                     return isActive ? "bg-sky-300 text-3xl" : "";
                  } }>
                     <div class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                        <InventoryIcon />
                        <span class="ml-3">Inventory</span>
                     </div>
                  </NavLink>
               </li>
               <li>
                  <NavLink to="/import">
                     <div class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                        <ImportIcon />
                        <span class="ml-3">Import</span>
                     </div>
                  </NavLink>

               </li>
               <li>
                  <NavLink to="/provider">
                     <div class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                        <ProviderIcon />
                        <span class="flex-1 ml-3 whitespace-nowrap">Provider</span>
                     </div>
                  </NavLink>

               </li>
               <li>
                  <NavLink to="/order">
                     <div class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                        <OrderIcon />
                        <span class="flex-1 ml-3 whitespace-nowrap">Order</span>
                     </div>
                  </NavLink>

               </li>
               <li>
                  <NavLink to="/customer">
                     <div class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                        <CustomerIcon />
                        <span class="flex-1 ml-3 whitespace-nowrap">Customer</span>
                     </div>
                  </NavLink>

               </li>
            </ul>
         </div>
      </aside>

   )
}