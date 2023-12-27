import { CiMenuBurger } from "react-icons/ci";
import { IoCloseCircle } from "react-icons/io5";

import Filters from "./Filters";

export default function Drawer() {
  return (
    <section className="text-negro text-4xl ">
      <input type="checkbox" id='toggle' className="relative sr-only peer" />
      <label htmlFor="toggle"
        className={`active:scale-110 peer-checked:rotate-90 transition-all absolute top-3`}
      >
        <CiMenuBurger />
      </label>
      <div
        className={`mt-[4rem] top-0 absolute h-screen bg-marron -left-[25rem] 
         peer-checked:left-0 peer:transition ease-out delay-150 duration-300    
        `}
      >
        <Filters />
      </div>

    </section>
  )
}