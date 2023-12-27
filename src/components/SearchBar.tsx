import { CiSearch } from "react-icons/ci"

export default function SearchBar() {
  return (
    <form className="flex items-center gap-1">
      <input
        type="text"
        placeholder="Buscar"
        className=" w-full max-w-xs px-2 py-1 rounded-lg outline"
      />
      <button className="rounded-lg bg-gris px-2 py-1 h-[3rem] outline">
        <CiSearch />
      </button>
    </form>
  )
}
