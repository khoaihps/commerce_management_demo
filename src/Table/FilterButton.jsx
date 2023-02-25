import { Fragment, useEffect, useState } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { BsFillClockFill, BsPiggyBankFill } from "react-icons/bs";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
} 
const preset = {
    order: {
        icon: <BsFillClockFill className='w-4 h-4 mr-2 text-gray-400'/>,
        options: [
            'Last day',
            'Last 7 days',
            'Last 30 days'
        ],
        tmp: [
            { label: 'Last days', value: 1 },
            { label: 'Last 7 days', value: 7 },
            { label: 'Last 30 days', value: 30 },
        ],
        default: 'Select Time Stamp'
    },
    'import': {
        icon: <BsFillClockFill className='w-4 h-4 mr-2 text-gray-400'/>,
        options: [
            'Last day',
            'Last 7 days',
            'Last 30 days'
        ],
        tmp: [
            { label: 'Last days', value: 1 },
            { label: 'Last 7 days', value: 7 },
            { label: 'Last 30 days', value: 30 },
        ],
        default: 'Select Time Stamp'
    },
    customer: {
        icon: <BsPiggyBankFill className='w-4 h-4 mr-2 text-gray-400'/>,
        options: [
            'Bronze',
            'Silver',
            'Gold'
        ],
        tmp: [
            { label: 'Bronze', value: 'Bronze' },
            { label: 'Silver', value: 'Silver' },
            { label: 'Gold', value: 'Gold' },
        ],
        default: 'Select Ranking'
    },
}




export const FilterButton = ({ dataType, setFilterValue }) => {
    const [filterLabel, setFilterLabel] = useState(preset[dataType].default);
    const handleClick = (item) => {
        setFilterValue(item.value);
        setFilterLabelite(item.value);
    }
    useEffect(() => {
        setFilterValue(null);
        setFilterLabel(preset[dataType].default);
    }, [dataType]);
    return (
        <Menu as="div" className="relative inline-block text-left">
            <div>
                <Menu.Button className="inline-flex items-center text-gray-500 bg-white w-full justify-center rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 shadow-sm focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200">
                    {preset[dataType].icon}
                    {filterLabel}
                    <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
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
                <Menu.Items className="absolute left-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                        {preset[dataType].tmp.map(item => <Menu.Item key={item.value}>
                            {({ active }) => (
                                <p
                                    onClick={() => handleClick(item)}
                                    className={classNames(
                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                        'block px-4 py-2 text-sm',
                                        'cursor-pointer'
                                    )}
                                >
                                    {item.label}
                                </p>
                            )}
                        </Menu.Item>)}
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
    )
}