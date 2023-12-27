import { IoIosCloseCircle } from "react-icons/io";

export default function FilterBadge({ children }: { children: React.ReactNode }) {
  return (
    <div
      className=" text-xs flex items-center justify-center gap-2 px-2 py-1 bg-blanco/50 border-2 border-negro rounded-full capitalize">
      {children}
      <button className="text-2xl"><IoIosCloseCircle /></button>
    </div>
  )
}
