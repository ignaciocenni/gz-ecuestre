'use client'
import { FiSearch } from "react-icons/fi"
import { useFilters } from "@/lib/hooks"
import { useState } from 'react'

export default function SearchBar() {

  const { setFilter } = useFilters()
  const [query, setQuery] = useState<string>('')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFilter({ name: 'Query', value: query })
    setQuery('')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value)
  }

  return (
    <form
      className="flex items-center gap-1 text-xl"
      onSubmit={handleSubmit}
    >
      <input
        onChange={handleChange}
        type="text"
        placeholder="Buscar"
        className=" w-full max-w-xs px-2 py-1 rounded-lg focus:outline-none"
        value={query}
      />
      <button
        className="rounded-lg bg-gris px-2 py-1 h-[2.3rem]"
        type="submit"
      >
        <FiSearch />
      </button>
    </form>
  )
}
