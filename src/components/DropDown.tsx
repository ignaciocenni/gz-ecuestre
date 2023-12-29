'use client'
import { FaChevronDown } from "react-icons/fa"
import { useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { useFilters } from "@/lib/hooks"
import { useDropDown } from "@/lib/hooks"

type Option = {
  name: string,
  id: number
}

type DropDownProps = {
  name: string,
  options: Option[]
}

export default function DropDown({ name, options }: DropDownProps) {
  const searchParams = useSearchParams()
  const currentOption = options.find((option) => String(option.id) === searchParams.get(name))
  const [selectedOption] = useState<string | Option>(currentOption?.name || name)

  const { dropdownRef, handleDropdownToggle, isDropdownOpen } = useDropDown()
  const { setFilter, deleteFilter } = useFilters()

  return (
    <div className="w-full text-xl" ref={dropdownRef}>
      <button
        className="py-0 relative flex justify-center bg-blanco/50 pr-1 pl-0 items-center   text-gray-600 rounded-xl  group"
        onClick={handleDropdownToggle}
      >
        <p className="px-4">{typeof selectedOption === 'string' ? selectedOption : selectedOption.name} </p>
        <FaChevronDown />
        {
          isDropdownOpen &&
          <div className='absolute left-0 top-full min-w-full w-max bg-blanco shadow-md mt-1 rounded z-10 '>
            <ul className="text-left px-2">
              <li className="px-4 py-1 hover:bg-gris/50  border-b cursor-pointer" onClick={() => deleteFilter({ name })}>
                Todas
              </li>
              {options.map((option) => (
                <li key={option.id} className="px-4 py-1 hover:bg-gris/50 border-b cursor-pointer" onClick={() => setFilter({ name, value: option.name })}>
                  {option.name}
                </li>
              ))}
            </ul>
          </div>}
      </button>
    </div>
  )
}
