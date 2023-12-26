import CardContainer from "@/components/CardContainer"
import { horses, breeds } from "./lib/data"
import DropDown from "@/components/DropDown"
import SearchBar from "@/components/SearchBar"

export default function Home() {
  return (
    <main className="flex justify-center gap-2 h-screen">
      <aside className="hidden py-5 lg:flex flex-col items-center  border w-[30rem]">
        <SearchBar />
        <DropDown options={breeds} name="razas" />
        <DropDown options={breeds} name="color" />
        <DropDown options={breeds} name="edad" />
      </aside>
      <CardContainer horses={horses} />
      <aside className="hidden lg:block border w-[15rem]">
        ads
      </aside>
    </main>
  )
}
