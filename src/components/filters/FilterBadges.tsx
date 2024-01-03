import { IoIosCloseCircle } from "react-icons/io";
import { useFilters } from "@/lib/hooks";
export default function FilterBadge({ name, value }: { name: string, value: string }) {
  const { deleteFilter } = useFilters()
  return (
    <div
      className="text-xs font-bold flex items-center justify-center gap-2 px-2 pr-0  bg-orange-100 border-2 border-amber-700 text-gray-600 rounded-full capitalize">
      {value}
      <button
        className="text-2xl"
        onClick={() => deleteFilter({ name })}
      >
        <div className="text-amber-700">
          <IoIosCloseCircle />
        </div>
      </button>
    </div>
  )
}
