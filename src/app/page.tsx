import CardContainer from "@/components/CardContainer"
import { horses } from "./lib/data"

export default function Home() {
  return (
    <main className="mt-[4rem] grid grid-cols-5 gap-5 ">
      <CardContainer horses={horses} />
      <aside className="hidden h-screen lg:block border">
        ads
      </aside>
    </main>
  )
}
