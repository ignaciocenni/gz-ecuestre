import { CiSearch } from "react-icons/ci"

export default function SearchBar() {
  return (
    <form className="flex items-center gap-1">
      <input type="text" placeholder="Buscar" className="relative input input-bordered w-full max-w-xs" />
      <button className="btn btn-neutral">
        <CiSearch />
      </button>
    </form>
  )
}
