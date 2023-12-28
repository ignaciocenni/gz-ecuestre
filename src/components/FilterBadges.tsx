import { IoIosCloseCircle } from "react-icons/io";
import { useFilters } from "@/lib/hooks";
export default function FilterBadge({ name, value }: { name: string, value: string }) {
  const { deleteFilter } = useFilters()
  return (
    <div
      className=" text-xs flex items-center justify-center gap-2 px-2 py-1 bg-blanco/50 border-2 border-negro rounded-full capitalize">
      {value}
      <button
        className="text-2xl"
        onClick={() => deleteFilter({ name })}
      >
        <IoIosCloseCircle />
      </button>
    </div>
  )
}
