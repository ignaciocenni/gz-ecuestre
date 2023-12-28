import CardContainer from "@/components/CardContainer"
import { horses } from "../lib/data"

export default function Home() {
  return (
    <main className="mt-[6rem] flex flex-col-reverse   xl:flex-row xl:ml-80  gap-5 ">
      <CardContainer horses={horses} />
      <aside className="h-[15rem] xl:h-screen xl:w-[16rem] border">
        ads
      </aside>
    </main>
  )
}
