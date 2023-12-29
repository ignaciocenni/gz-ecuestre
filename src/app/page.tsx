import CardContainer from "@/components/CardContainer"
import { horses } from "../lib/data"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main >
      <section className="mt-[6rem] flex flex-col   xl:flex-row-reverse xl:ml-80  gap-5 ">
        <aside className="h-[15rem] xl:h-screen xl:w-[16rem] border">
          ads
        </aside>
        <CardContainer horses={horses} />
      </section>
      <Footer />
    </main>
  )
}
