"use client";

import { IoIosNotificationsOutline } from "react-icons/io";
import { MdOutlineEditCalendar } from "react-icons/md";
import { motion } from "framer-motion";
import { BsUpcScan, BsCart3 } from "react-icons/bs";
import { IoAdd } from "react-icons/io5";
import { Nav } from "../nav/navbar";
import { Menu, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import React from "react";

const categoryPills = [
  "Name",
  "Location",
  "Supplier",
  "Patient Simulators",
  "Task Trainers",
  "Simulation Equipment",
  "Medical Furniture",
  "Consumable Supplies",
  "Non-Consumable Supplies",
  "Computers",
  "Office Supplies",
];

const products = [
  { name: "Product 1", quantity: 100, location: "A1", supplier: "Supplier 1" },
  { name: "Product 2", quantity: 200, location: "A2", supplier: "Supplier 2" },
  { name: "Product 3", quantity: 300, location: "A3", supplier: "Supplier 3" },
  { name: "Product 4", quantity: 400, location: "A4", supplier: "Supplier 4" },
  { name: "Product 5", quantity: 500, location: "A5", supplier: "Supplier 5" },
  { name: "Product 6", quantity: 600, location: "A6", supplier: "Supplier 6" },
];

const tableHeaders = [
  "Item Name",
  "Amount",
  "Location",
  "Type",
  "Status",
  "Action",
];

export default function Example() {
  const [categoryPill, setCategoryPill] = useState(categoryPills[0]);
  const [cartQuantity, setCartQuantity] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const totalItems = products.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (pageNumber: React.SetStateAction<number>) => {
    if (currentPage > products.length / 10) {
      setCurrentPage(Math.ceil(products.length / 10));
    }
    setCurrentPage(pageNumber);
  };

  const generatePageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }
    return pageNumbers;
  };

  return (
    <div className="bg-white min-h-screen min-w-screen max-w-screen">
      <Nav />

      <div className="flex justify-between items-center p-4 border-b">
        <div className="flex">
          <button className="text-sm font-semibold leading-6 text-slate-700 hover:bg-slate-100 px-3 py-2 rounded-md flex items-center">
            <IoIosNotificationsOutline className="text-lg mr-1" />
            <span>Notifications</span>
          </button>
          <button className="text-sm font-semibold leading-6 text-slate-700 hover:bg-slate-100 px-3 py-2 rounded-md flex items-center ml-1">
            <BsUpcScan className="text-lg mr-2" />
            <span>Scans</span>
          </button>
        </div>

        <div className="flex items-center space-x-2">
          <button className="text-sm font-semibold leading-6 text-slate-700 hover:bg-slate-100 px-3 py-2 rounded-md flex items-center border-black border">
            <IoAdd className="text-lg mr-1" />
            <span>Add Item</span>
          </button>
          <button className="text-sm font-semibold leading-6 text-white bg-blue-600 px-3 py-2 rounded-md flex items-center border">
            <BsCart3 className="text-lg mr-1" />
            <span>Cart</span>
          </button>
        </div>
      </div>

      <div className="mx-auto min-w-screen px-6 pt-6">
        <div className="pb-4 bg-white dark:bg-gray-900">
          <div className="flex justify-between items-center">
            <div className="flex">
              {/* Search Bar */}
              <label htmlFor="table-search" className="sr-only">
                Search
              </label>
              <div className="relative mt-1">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    className="w-5 h-5 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  id="table-search"
                  className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 h-9"
                  placeholder={`Search by ${categoryPill}`}
                />
              </div>
              {/* END - Search Bar */}

              {/* Category Pill */}
              <Menu
                as="div"
                className="relative inline-block text-left pl-2 mt-1"
              >
                <div>
                  <Menu.Button className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 h-9">
                    Category
                    <svg
                      class="w-4 h-4 ml-2"
                      aria-hidden="true"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M19 9l-7 7-7-7"
                      ></path>
                    </svg>
                  </Menu.Button>
                </div>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-2">
                      {categoryPills.slice(0, 3).map((pill, index) => (
                        <Menu.Item key={index}>
                          <button
                            onClick={(s) => setCategoryPill(pill)}
                            className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100 hover:text-gray-900 w-full text-left"
                          >
                            {pill}
                          </button>
                        </Menu.Item>
                      ))}
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
              {/* END - Category Pill */}
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="relative overflow-x-auto border border-slate-400 sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 table-auto sm:rounded-lg">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 border-b border-gray-200">
              <tr>
                <th scope="col" className="p-4">
                  <div className="flex items-center">
                    <input
                      id="checkbox-all-search"
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label htmlFor="checkbox-all-search" className="sr-only">
                      checkbox
                    </label>
                  </div>
                </th>
                {tableHeaders.map((header, index) => (
                  <th key={index} scope="col" className="px-4 py-3">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr
                  key={index}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <td className="w-4 p-4">
                    <div className="flex items-center">
                      <input
                        id="checkbox-table-search-1"
                        type="checkbox"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        htmlFor="checkbox-table-search-1"
                        className="sr-only"
                      >
                        checkbox
                      </label>
                    </div>
                  </td>
                  <th
                    scope="row"
                    className="px-4 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {product.name}
                  </th>
                  <td className="px-4 py-4">{product.quantity}</td>
                  <td className="px-4 py-4">{product.location}</td>
                  <td className="px-4 py-4">Type</td>
                  <td className="px-4 py-4">Status</td>
                  <td className="px-4 py-4">
                    <div className="flex flex-row space-x-4 w-auto">
                      <motion.button
                        whileHover={{
                          scale: 1.2,
                        }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <MdOutlineEditCalendar className="text-xl cursor-pointer rounded-sm text-slate-600 hover:text-slate-900" />
                      </motion.button>
                      <motion.button
                        whileHover={{
                          scale: 1.2,
                        }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <BsCart3 className="text-xl cursor-pointer rounded-sm text-slate-600 hover:text-slate-900" />
                      </motion.button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <nav
            className="flex items-center justify-between px-4 py-1 bg-white border-t border-gray-200 sm:px-6 dark:bg-gray-800 dark:border-gray-700"
            aria-label="Table navigation"
          >
            <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
              Showing{" "}
              <span className="font-semibold text-gray-900 dark:text-white">
                1-{products.length > 10 ? 10 : products.length}
              </span>{" "}
              of{" "}
              <span className="font-semibold text-gray-900 dark:text-white">
                {products.length}
              </span>
            </span>
            <ul className="inline-flex items-center -space-x-px">
              <li>
                <a
                  href="#"
                  onClick={() => {
                    if (currentPage === 1) return;
                    handlePageChange(currentPage - 1);
                  }}
                  className="block px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  <span className="sr-only">Previous</span>
                  <svg
                    className="w-5 h-5"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </a>
              </li>
              {/* Render the pagination links dynamically based on your data */}
              {/* Example: Rendering 5 page links */}
              {generatePageNumbers().map((pageNumber) => (
                <li key={pageNumber}>
                  <a
                    href="#"
                    className={`px-3 py-2 leading-tight ${
                      pageNumber === currentPage
                        ? "text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                        : "text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    }`}
                    onClick={() => handlePageChange(pageNumber)}
                  >
                    {pageNumber}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#"
                  onClick={() => {
                    if (currentPage === totalPages) return;
                    handlePageChange(currentPage + 1);
                  }}
                  className="block px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  <span className="sr-only">Next</span>
                  <svg
                    className="w-5 h-5"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
