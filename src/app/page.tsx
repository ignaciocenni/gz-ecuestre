import CardContainer from "@/components/cards/CardContainer"
import { horses } from "../lib/data"
import Footer from "@/components/Footer"
import Pagination from "@/components/ui/Pagination"

export default function Home() {
  return (
    <main >
      <section className="mt-[6rem] flex flex-col   xl:flex-row-reverse xl:ml-80  gap-5 ">
        <aside className="h-[15rem] xl:h-screen xl:w-[16rem] border">
          ads
        </aside>
        <CardContainer horses={horses} />
      </section>
      <Pagination />
      <Footer />
    </main>
  )
}
