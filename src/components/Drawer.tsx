import { CiMenuBurger } from "react-icons/ci";
import Filters from "./Filters";

export default function Drawer() {
  return (
    <section className="text-negro text-4xl ">
      <input type="checkbox" id="toggle" className="relative sr-only peer" />
      <label
        htmlFor="toggle"
        className={`active:scale-110 peer-checked:-rotate-90  
        transition-transform absolute top-3 delay-150 duration-300 xl:hidden`}
      >
        <CiMenuBurger />
      </label>
      <div
        className={`mt-[4.56rem] top-0 absolute h-screen bg-marron -left-[25rem] xl:left-0
         peer-checked:left-0 peer:transition ease-out delay-150 duration-300 border-2 border-negro   
        `}
      >
        <Filters />
      </div>
    </section>
  );
}
