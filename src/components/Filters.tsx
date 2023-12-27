import DropDown from "./DropDown";
import SearchBar from "./SearchBar"
import { breeds } from "@/app/lib/data"
import FilterBadge from "./FilterBadges";

export default function Filters() {
  return (
    <article className="py-5 px-4 flex flex-col gap-6 w-80 h-screen items-start border">
      <SearchBar />
      <ul className="flex flex-col w-max px-4 gap-4 md:gap-9 justify-center items-start">
        <li><DropDown options={breeds} name="Raza" /></li>
        <li><DropDown options={breeds} name="Color" /></li>
        <li><DropDown options={breeds} name="Edad" /></li>
      </ul>
      <section className="flex flex-wrap gap-2">
        <FilterBadge>Raza</FilterBadge>
        <FilterBadge>Color</FilterBadge>
        <FilterBadge>Edad</FilterBadge>
        <FilterBadge>Query</FilterBadge>
      </section>
    </article>
  )
}
