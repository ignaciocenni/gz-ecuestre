import { useSearchParams, useRouter, usePathname } from 'next/navigation'
import { useState, useEffect, useRef } from 'react'

export const useUrlSearchParams = () => {
  const searchParams = useSearchParams()
  const params = new URLSearchParams(searchParams)
  const { replace } = useRouter()
  const path = usePathname()

  const setFilter = ({ name, value }: { name: string; value: string }) => {
    params.set(name, value)
    replace(`${path}?${params.toString()}`)
  }

  const deleteFilter = ({ name }: { name: string }) => {
    params.delete(name)
    replace(`${path}?${params.toString()}`)
  }

  const getSearchParams = () => {
    const result = []
    for (const [key, value] of searchParams.entries()) {
      result.push({ name: key, value })
    }
    return result
  }

  const setPage = (value: number) => {
    params.set('page', String(value))
    replace(`${path}?${params.toString()}`)
  }

  return {
    setFilter,
    deleteFilter,
    getSearchParams,
    setPage
  }
}

export const useDropDown = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
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
  return {
    isDropdownOpen,
    handleDropdownToggle,
    dropdownRef
  }
}
