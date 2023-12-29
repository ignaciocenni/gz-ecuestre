import DropDown from "./DropDown";
import SearchBar from "./SearchBar"
import { breeds } from "@/lib/data"
import FilterBadgesContainer from "./FilterBadgesContainer";

export default function Filters() {
  return (
    <article className="py-5 px-4 flex flex-col gap-6 w-80 h-full items-start shadow-xl">
      <SearchBar />
      <ul className="flex flex-col w-max  gap-4 md:gap-9 justify-center items-start">
        <li><DropDown options={breeds} name="Raza" /></li>
        <li><DropDown options={breeds} name="Color" /></li>
        <li><DropDown options={breeds} name="Edad" /></li>
      </ul>
      <br />
      <FilterBadgesContainer />
    </article>
  )
}
