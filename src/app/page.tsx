import CardContainer from "@/components/CardContainer"
import { horses } from "../lib/data"

export default function Home() {
  return (
    <main className="mt-[4rem] flex flex-col-reverse w-full lg:grid lg:grid-cols-5 gap-5 ">
      <CardContainer horses={horses} />
      <aside className="h-[15rem] lg:h-screen w-full border">
        ads
      </aside>
    </main>
  )
}
