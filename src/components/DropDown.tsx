'use client'
import { FaChevronDown } from "react-icons/fa"
import { useState, useRef, useEffect } from 'react'
import { usePathname, useSearchParams, useRouter } from 'next/navigation'
import clsx from "clsx"

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
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState<string | Option>(currentOption?.name || name)
  const dropdownRef = useRef<HTMLDivElement | null>(null)

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  const handleOutsideClick = (e: MouseEvent) => {
    if (dropdownRef.current && e.target instanceof Node && !dropdownRef.current.contains(e.target)) {
      setIsDropdownOpen(false)
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick)
    return () => {
      document.removeEventListener('click', handleOutsideClick)
    }
  }, [])

  return (
    <div className="w-full text-xl" ref={dropdownRef}>
      <button
        className="py-1 relative flex justify-center bg-blanco/50 px-2 outline items-center focus:outline-none  text-gray-600 rounded-xl focus:ring ring-gray-200 group"
        onClick={handleDropdownToggle}
      >
        <p className="px-4">{typeof selectedOption === 'string' ? selectedOption : selectedOption.name} </p>
        <FaChevronDown />
        {
          isDropdownOpen &&
          <div className='absolute left-0 top-full min-w-full w-max bg-blanco shadow-md mt-1 rounded z-10 '>
            <ul className="text-left px-2 border rounded">
              <li className="px-4 py-1 hover:bg-gris/50  border-b cursor-pointer" onClick={() => { }}>
                Todas
              </li>
              {options.map((option) => (
                <li key={option.id} className="px-4 py-1 hover:bg-gris/50 border-b cursor-pointer" onClick={() => { }}>
                  {option.name}
                </li>
              ))}
            </ul>
          </div>}
      </button>
    </div>
  )
}
